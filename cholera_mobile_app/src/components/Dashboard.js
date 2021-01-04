import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {connect} from 'react-redux';
import {fetchPatients, getStateTwo} from '../actions';
import AppBarCostum from '../common/AppBarCustom';
import CardStatus from '../common/CardStatus';
import PatientList from './PatientList';

const Dashboard = ({navigation, ...props}) => {
  const {patients, fetchPatients, loading, getStateTwo, statsPosition} = props;

  useEffect(() => {
    fetchPatients();
    getStateTwo();
  }, [fetchPatients]);

  return (
    <>
      <AppBarCostum>
        <Appbar.Content title="Tableau de bord" />
        <Appbar.Action
          icon="new-box"
          onPress={() => navigation.navigate('AddPatient')}
        />
      </AppBarCostum>
      <ScrollView
        contentContainerStyle={{flex: 1, margin: 10, paddingVertical: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <CardStatus
            title="CAS CONFIRMES"
            source={require('../../assets/svg/cholera.svg')}
            number={statsPosition ? statsPosition.declares : null}
          />
          <CardStatus
            title="CAS SUSPECTS"
            source={require('../../assets/svg/immunity.svg')}
            number="100"
            number={statsPosition ? statsPosition.suspect : null}
          />
          <View />
        </View>
        <View style={{marginVertical: 15, marginLeft: 5}}>
          <Text
            style={{fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold'}}>
            Listes des cas : {patients.total}
          </Text>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#3A9679" />
        ) : (
          <PatientList navigation={navigation} items={patients.data} />
        )}
      </ScrollView>
    </>
  );
};

const mapStateToProps = ({patientState}) => ({
  loading: patientState.loading,
  patients: patientState.patients,
  statsPosition: patientState.statsPosition,
});

export default connect(mapStateToProps, {fetchPatients, getStateTwo})(
  Dashboard,
);

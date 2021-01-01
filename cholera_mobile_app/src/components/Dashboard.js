import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import {PATIENTS} from '../../data/patient';
import AppBarCostum from '../common/AppBarCustom';
import CardStatus from '../common/CardStatus';
import PatientList from './PatientList';

const Dashboard = ({navigation}) => {
  return (
    <>
      <AppBarCostum>
        <Appbar.Content title="Tableau de bord" />
        <Appbar.Action
          icon="new-box"
          onPress={() => navigation.navigate('AddPatient')}
        />
      </AppBarCostum>
      <ScrollView contentContainerStyle={{flex: 1, margin: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <CardStatus
            title="CAS CONFIRMES"
            source={require('../../assets/svg/cholera.svg')}
            number="200"
          />
          <CardStatus
            title="CAS SUSPECTS"
            source={require('../../assets/svg/immunity.svg')}
            number="100"
          />
          <View />
        </View>
        <View style={{marginVertical: 15, marginLeft: 5}}>
          <Text
            style={{fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold'}}>
            Listes des cas
          </Text>
        </View>
        <PatientList navigation={navigation} items={PATIENTS} />
      </ScrollView>
    </>
  );
};

export default Dashboard;

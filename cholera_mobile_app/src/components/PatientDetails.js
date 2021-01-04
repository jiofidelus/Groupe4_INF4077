import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Card, List, Modal, Portal, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {fetchPatient} from '../actions';
import ButtonAction from '../common/ButtomAction';
import {Colors} from '../common/Colors';
import Dot from '../common/Dot';
import StatusPatient from '../common/StatusPatient';
import {CommonStyle} from '../common/styles';
import {BUCKET_URL, getRegion} from '../config';

const PatientDetails = (props) => {
  const idPatient = props.route.params.idPatient;

  const {fetchPatient, patient, loadindDetails} = props;

  const image = {
    uri: 'https://hero-bucket.s3.amazonaws.com/defaultuser/user.png',
  };

  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    fetchPatient(idPatient);
  }, [idPatient, fetchPatient]);

  const ImageBackgroundInterpolate = animation.interpolate({
    inputRange: [0, 100],
    outputRange: [250, 80],
    extrapolate: 'clamp',
  });

  const headerStyle = {
    height: ImageBackgroundInterpolate,
  };

  const fontSizeInterpolate = animation.interpolate({
    inputRange: [0, 100],
    outputRange: [18, 16],
    extrapolate: 'clamp',
  });

  const opacityInterpolate = animation.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
  });

  const fontStyle = {
    fontSize: fontSizeInterpolate,
  };

  const OpacityStyle = {
    opacity: opacityInterpolate,
  };

  const renderContact = (contacts) => {
    return contacts.map((contact) => {
      return <Text>{contact}</Text>;
    });
  };

  const renderImageBackground = (photo) => {
    return (
      <ImageBackground
        source={{
          uri: patient
            ? `${BUCKET_URL}/patients/${patient.patientIdArchive}/${patient.picture}`
            : `${BUCKET_URL}/default/user.png`,
        }}
        style={{width: '100%', height: '100%'}}
        blurRadius={Platform.OS === 'ios' ? 10 : 5}>
        <View style={{margin: 10}}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Material color="white" name="arrow-back" size={24} />
          </TouchableOpacity>
        </View>
        <View style={CommonStyle.headerProfileContent}>
          <Animated.View style={OpacityStyle}>
            <Avatar.Image
              size={100}
              source={{
                uri: patient
                  ? `${BUCKET_URL}/patients/${patient.patientIdArchive}/${patient.picture}`
                  : `${BUCKET_URL}/default/user.png`,
              }}
            />
          </Animated.View>
          <Animated.View style={OpacityStyle}>
            <Text style={styles.subTitle}>
              {patient ? patient.names : ' '} {patient ? patient.surnames : ''}
            </Text>
            {patient ? (
              <StatusPatient status={patient.statusIdStatus} />
            ) : (
              <Text></Text>
            )}
          </Animated.View>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: 'white',
            padding: 20,
            margin: 10,
          }}>
          <View>
            <Text
              style={{fontSize: 16, fontWeight: 'bolder', marginVertical: 5}}>
              Envoyer un message
            </Text>
            <View style={{marginVertical: 5}}>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                value="Telephones"
                onChangeText={(name) => console.log(name)}
              />
            </View>
            <View style={{marginVertical: 5}}>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                multiline
                numberOfLines={5}
                value="Message"
                onChangeText={(name) => console.log(name)}
              />
            </View>
            <ButtonAction title="Envoyer" icon="send" />
          </View>
        </Modal>
      </Portal>

      {loadindDetails ? (
        <ActivityIndicator color="red" />
      ) : (
        <Animated.ScrollView
          contentContainerStyle={{paddingTop: 250}}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: animation,
                },
              },
            },
          ])}>
          <View style={{margin: 5}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'center',
                  borderRightWidth: 1,
                }}>
                <Text>Age</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {patient ? patient.old : ''} ans
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'center',
                  borderRightWidth: 1,
                }}>
                <Text>Poids</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {patient ? patient.poids : ''} Kg
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Text>Ville</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {patient ? getRegion(patient.regionIdRegion) : ''}
                </Text>
              </View>
            </View>
            <View>
              <Card style={{margin: 5}}>
                <Card.Title title="A propos" titleStyle={{fontSize: 20}} />
                <Card.Content>
                  <View>
                    <View />
                    <View style={{marginVertical: 5}}>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View>
                          <Icon
                            name="clock-o"
                            size={30}
                            color={Colors.color0}
                          />
                        </View>
                        <View style={{marginHorizontal: 10}}>
                          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                            Date d'admission
                          </Text>
                          <Text>{patient ? patient.admissionDate : ''}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            </View>

            {patient.suivies.length > 0 && (
              <View>
                <Card style={{margin: 5}}>
                  <Card.Title
                    title="Suivie Medical"
                    titleStyle={{fontSize: 20}}
                  />
                  <Card.Content>
                    <View style={{marginVertical: 5}}>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View>
                          <Icon
                            name="calendar"
                            size={30}
                            color={Colors.color0}
                          />
                        </View>
                        <View style={{marginHorizontal: 10}}>
                          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                            Date et Heure
                          </Text>
                          <Text>11:30 a 14:50</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{marginVertical: 5}}>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View>
                          <Icon
                            name="file-text-o"
                            size={30}
                            color={Colors.color0}
                          />
                        </View>
                        <View style={{marginHorizontal: 10}}>
                          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                            description
                          </Text>
                          <Text>Tres malade</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{marginVertical: 5}}>
                      <Text
                        style={{
                          marginVertical: 5,
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        deshydratation
                      </Text>
                      <Dot level={3} />
                    </View>
                    <View style={{marginVertical: 5}}>
                      <Text
                        style={{
                          marginVertical: 5,
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        Niveau de selles
                      </Text>
                      <Dot level={2} />
                    </View>
                    <View style={{marginVertical: 5}}>
                      <Text
                        style={{
                          marginVertical: 5,
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        Niveau de vomissements
                      </Text>
                      <Dot level={4} />
                    </View>
                    <View style={{marginVertical: 5}}>
                      <Text
                        style={{
                          marginVertical: 5,
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        Niveau de diarhree
                      </Text>
                      <Dot level={4} />
                    </View>
                  </Card.Content>
                </Card>
              </View>
            )}
            <Card style={{margin: 5}}>
              <List.Item
                onPress={showModal}
                title="Envoyer Message"
                titleStyle={{
                  fontWeight: 'bold',
                }}
                description={() => renderContact(['694169369'])}
                left={(props) => (
                  <List.Icon {...props} icon="phone" color={Colors.color0} />
                )}
              />
            </Card>
          </View>
        </Animated.ScrollView>
      )}
      <Animated.View style={[styles.header, headerStyle]}>
        {renderImageBackground(image)}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  textColor: {
    color: 'white',
    fontFamily: 'BalooBhai-Regular',
  },
  titleParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    justifyContent: 'center',
    margin: 10,
    fontFamily: 'BalooBhai-Regular',
  },
  subTitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

const mapStateToProps = ({patientState}) => ({
  patient: patientState.patient,
  loadindDetails: patientState.loadindDetails,
});

export default connect(mapStateToProps, {fetchPatient})(PatientDetails);

import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';
import StatusPatient from './StatusPatient';

const PatientItem = ({
  item: {names, id, picture, age, regionIdRegion, statusIdStatus, surnames},
  navigation,
}) => {
  const percent = Math.floor(Math.random() * 11) * 10;

  console.log(percent * 10);

  return (
    <TouchableOpacity
      key={id}
      onPress={() => navigation.push('DetailsPatient')}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 8,
          elevation: 1,
          padding: 5,
          borderRadius: 5,
        }}>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Avatar.Image size={64} source={{uri: picture}} />
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', backgroundColor: ''}}>
            {names} {surnames}
          </Text>
          <Text style={{fontSize: 12}}>{age} ans </Text>
          <Text style={{fontSize: 12, marginVertical: 5}}>
            {regionIdRegion}
          </Text>
          <View style={{marginTop: 10, display: 'flex', flexDirection: 'row'}}>
            <StatusPatient status={statusIdStatus} />
          </View>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <ProgressCircle
            percent={percent}
            radius={40}
            borderWidth={6}
            color={percent > 50 ? '#f05454' : '#16c79a'}
            shadowColor="#999"
            bgColor="#fff">
            <Text style={{fontSize: 18}}>{percent} %</Text>
          </ProgressCircle>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PatientItem;

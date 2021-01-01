import React from 'react';
import {Text, View} from 'react-native';

export default function StatusPatient({status}) {
  const getStatus = (status) => {
    switch (status) {
      case 1:
        return 'CAS SUSPECT';
      case 2:
        return 'CAS DECLARES';
      case 3:
        return 'HORS DANGER';
      default:
        return 'EN EXAMEN';
    }
  };

  return (
    <View
      style={{
        backgroundColor: status === 1 ? '#f05454' : '#16c79a',
        padding: 2,
        borderRadius: 5,
      }}>
      <Text style={{fontSize: 12, padding: 2, color: 'white'}}>
        {getStatus(status)}
      </Text>
    </View>
  );
}

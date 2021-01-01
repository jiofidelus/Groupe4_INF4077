import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CardStatus from '../common/CardStatus';

export default function Dashboard() {
  return (
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
        <Text style={{fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold'}}>
          Listes des cas
        </Text>
      </View>
    </ScrollView>
  );
}

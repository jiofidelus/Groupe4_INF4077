import React from 'react';
import {Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import AppBarCostum from '../common/AppBarCustom';
import BarChartPatient from './BarChartPatient';
import RoundBar from './RoundBar';

export default function Charts() {
  return (
    <View style={{flex: 1}}>
      <AppBarCostum>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Statistiques" />
      </AppBarCostum>
      <View>
        <Text>Cas par regions</Text>
        <BarChartPatient />
      </View>
      <View>
        <Text>Etats de cas</Text>
        <RoundBar />
      </View>
    </View>
  );
}

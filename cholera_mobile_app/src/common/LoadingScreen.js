//import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Colors} from './Colors';

// const clearAll = async () => {
//   try {
//     await AsyncStorage.clear();
//   } catch (e) {
//     // clear error
//   }

//   console.log('Done.');
// };

//clearAll();

const LoadingScreen = (_) => {
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItem: 'center'}}>
      <ActivityIndicator size="large" color={Colors.color8} />
    </View>
  );
};

export default LoadingScreen;

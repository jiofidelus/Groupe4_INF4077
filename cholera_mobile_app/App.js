/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import LoginScreen from './src/components/auth/LoginScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ApplicationProvider {...eva} theme={eva.light}>
        <LoginScreen />
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginVertical: 10,
  },

  button: {
    padding: 20,
    marginTop: 15,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
  },
});

export default App;

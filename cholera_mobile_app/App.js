/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './src/routes';

const App: () => React$Node = () => {
  return (
    <>
      <PaperProvider>
        <StatusBar barStyle="dark-content" />
        <Routes />
      </PaperProvider>
    </>
  );
};

export default App;

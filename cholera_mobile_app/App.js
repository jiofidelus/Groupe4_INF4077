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
import {Provider as StoreProvider} from 'react-redux';
import Routes from './src/routes';
import store from './src/store';

const App: () => React$Node = () => {
  return (
    <>
      <StoreProvider store={store}>
        <PaperProvider>
          <StatusBar barStyle="dark-content" />
          <Routes />
        </PaperProvider>
      </StoreProvider>
    </>
  );
};

export default App;

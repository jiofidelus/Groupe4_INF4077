/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Button,
  Input,
  Layout,
} from '@ui-kitten/components';
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const HomeScreen = () => (
  <Layout style={{display: 'flex', flex: 1, margin: 25}}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18, fontFamily: 'Ranchers-Regular'}}>
        CHOLERA MONITORING{' '}
      </Text>
    </View>
    <View style={{flex: 2}}>
      <Text style={{fontSize: 16}}>Connectez vous a votre compte</Text>
      <Input size="large" style={styles.inputStyle} placeholder="email" />
      <Input
        size="large"
        style={styles.inputStyle}
        secureTextEntry
        placeholder="mot de passe"
      />
      <Button> Connectez vous</Button>
    </View>
    <View style={{flex: 1}}>
      <Text>Ou connectez vous avec</Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('./src/assets/images/001-facebook.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} appearance="ghost">
          <Image source={require('./src/assets/images/002-google.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} appearance="ghost">
          <Image source={require('./src/assets/images/003-twitter.png')} />
        </TouchableOpacity>
      </View>
    </View>
  </Layout>
);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ApplicationProvider {...eva} theme={eva.light}>
        <HomeScreen />
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

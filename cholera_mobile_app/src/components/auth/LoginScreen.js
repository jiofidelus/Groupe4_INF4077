/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, Input, ScrollView, StyleSheet, Text, View} from 'react-native';

const LoginScreen = () => (
  <ScrollView
    contentContainerStyle={{
      flex: 1,
    }}>
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
      <Input
        size="large"
        style={styles.inputStyle}
        placeholder="Entrez votre email"
      />
      <Input
        size="large"
        style={styles.inputStyle}
        secureTextEntry
        placeholder="Entrez votre mot de passe"
      />
      <Button> Connectez vous</Button>
    </View>
  </ScrollView>
);

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

export default LoginScreen;

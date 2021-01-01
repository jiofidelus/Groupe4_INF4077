import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const AppBarCostum = ({children, styleCustom}) => (
  <Appbar.Header style={[{backgroundColor: 'white'}, styleCustom]}>
    {children}
  </Appbar.Header>
);

const styles = StyleSheet.create({
  shadow: {
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: {height: 0, width: 0},
  },
});

export default AppBarCostum;

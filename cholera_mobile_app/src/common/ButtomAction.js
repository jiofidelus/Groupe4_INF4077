import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {Colors} from './Colors';

const ButtonAction = ({title, loading, icon, onPress}) => (
  <View style={{marginTop: 20}}>
    <Button
      loading={loading}
      style={{backgroundColor: Colors.color6}}
      icon={icon}
      mode="contained"
      onPress={onPress}>
      {title}
    </Button>
  </View>
);
export default ButtonAction;

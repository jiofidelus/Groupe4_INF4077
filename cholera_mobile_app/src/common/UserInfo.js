import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Material from 'react-native-vector-icons/MaterialIcons';

const UserInfo = ({iconName, userInfo, iconTitle}) => (
  <View style={styles.ligne_info}>
    <Material name={iconName} size={24} />
    <View style={{marginLeft: 10}}>
      <Text>
        {' '}
        {iconTitle} : {userInfo}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  ligne_info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
});

export default UserInfo;

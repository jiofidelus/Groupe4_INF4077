import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Dot({level}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View
        style={[
          {backgroundColor: level >= 1 ? '#ffd369' : '#bbb'},
          styles.dot,
        ]}></View>
      <View
        style={[
          {backgroundColor: level >= 2 ? '#ffd369' : '#bbb'},
          styles.dot,
        ]}></View>
      <View
        style={[
          {backgroundColor: level >= 3 ? '#ffd369' : '#bbb'},
          styles.dot,
        ]}></View>
      <View
        style={[
          {backgroundColor: level >= 4 ? '#ffd369' : '#bbb'},
          styles.dot,
        ]}></View>
      <View
        style={[
          {backgroundColor: level >= 5 ? '#ffd369' : '#bbb'},
          styles.dot,
        ]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
});

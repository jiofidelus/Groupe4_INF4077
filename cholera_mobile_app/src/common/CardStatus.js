import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';
import SvgUri from 'react-native-svg-uri';

const CardStatus = ({
  source,
  colorView,
  colorImage,
  title,
  number,
  onPress,
  otherStyle,
}) => (
  <TouchableOpacity style={styles.touchStyle} onPress={onPress}>
    <Card elevation={3}>
      <View
        style={[styles.cardStyle, {backgroundColor: colorView}, otherStyle]}>
        <SvgUri width={64} height={64} fill={colorImage} source={source} />
        <Text style={{marginVertical: 5}}>{title}</Text>
        <Text style={{fontSize: 30, fontWeight: '700'}}>{number}</Text>
      </View>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchStyle: {
    marginTop: 20,
    width: '45%',
  },
  textStyle: {
    marginTop: 10,
  },
  cardStyle: {
    padding: 10,
    justifyContent: 'center',
  },
});

export default CardStatus;

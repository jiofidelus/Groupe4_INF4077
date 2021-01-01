import CardView from '@knax/react-native-cardview';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const InfoCard = ({image, label, disabled}) => {
  return (
    <CardView cardElevation={3}>
      <View
        style={{width: 100, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          disabled={disabled}
          onPress={() => {
            this.onGotoRoute(route);
          }}
          style={styles.cardStyle}>
          <Image source={image} style={{height: 50, width: 50}} />
          <Text style={{fontSize: 10, fontWeight: '500'}}>{label}</Text>
        </TouchableOpacity>
      </View>
    </CardView>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: '100%',
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});

export default InfoCard;

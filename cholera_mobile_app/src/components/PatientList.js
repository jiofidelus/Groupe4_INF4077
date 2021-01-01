import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import PatientItem from '../common/PatientItem';

const PatientList = ({items, navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  console.log(items, 'THE ITEMS');
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item}) => {
          return <PatientItem navigation={navigation} item={item} />;
        }}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

export default PatientList;

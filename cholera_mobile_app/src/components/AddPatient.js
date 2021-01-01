import React, {useState} from 'react';
import {ImageBackground, Platform, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-picker/lib/commonjs';
import {Appbar, Avatar} from 'react-native-paper';
import AppBarCostum from '../common/AppBarCustom';
import {CommonStyle} from '../common/styles';

export default function AddPatient({navigation}) {
  const [fileImage, setFileImage] = useState(null);

  const addImage = (_) => {
    const options = {
      noData: true,
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('inside');
        const imageData = {
          uri:
            Platform.OS === 'android'
              ? response.uri
              : response.uri.replace('file://', ''),
          type: response.type,
          name: response.fileName,
        };
        console.log(imageData);
        setresponsableImage(imageData.uri);
        setFileImage(imageData);
      }
    });
  };

  return (
    <View style={{flex: 1}}>
      <AppBarCostum>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Enregister un patient"
          subtitle="Veuillez entrer les donnees"
        />
      </AppBarCostum>
      <View style={CommonStyle.headerProfil}>
        <ImageBackground
          source={{
            uri: 's3://hero-bucket/defaultuser/user.png',
          }}
          blurRadius={Platform.OS === 'ios' ? 10 : 5}
          style={CommonStyle.headerProfileContent}>
          <TouchableOpacity onPress={() => addImage()}>
            <Avatar.Image
              size={130}
              source={{
                uri: 's3://hero-bucket/defaultuser/user.png',
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

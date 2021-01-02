import React, {useState} from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker/lib/commonjs';
import {Appbar, Avatar, RadioButton, TextInput} from 'react-native-paper';
import AppBarCostum from '../common/AppBarCustom';
import ButtonAction from '../common/ButtomAction';
import {Colors} from '../common/Colors';
import {CommonStyle} from '../common/styles';

export default function AddPatient({navigation}) {
  const [fileImage, setFileImage] = useState(null);
  const [checked, setChecked] = React.useState('first');

  const image = {
    uri: 'https://hero-bucket.s3.amazonaws.com/defaultuser/user.png',
  };

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
          source={image}
          blurRadius={Platform.OS === 'ios' ? 10 : 5}
          style={CommonStyle.headerProfileContent}>
          <TouchableOpacity onPress={() => addImage()}>
            <Avatar.Image size={130} source={image} />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <ScrollView style={CommonStyle.marginChild}>
        <View style={styles.viewMargin}>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            value="Nom"
            onChangeText={(name) => console.log(name)}
          />
        </View>
        <View style={styles.viewMargin}>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            value="Prenoms"
            onChangeText={(name) => console.log(name)}
          />
        </View>
        <View style={styles.viewMargin}>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            value="age"
            onChangeText={(name) => console.log(name)}
          />
        </View>
        <View style={styles.viewMargin}>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            value="poids"
            onChangeText={(name) => console.log(name)}
          />
        </View>
        <View>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>
        <View style={styles.viewMargin}>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            value="Ville"
            onChangeText={(name) => console.log(name)}
          />
        </View>
        <View style={styles.viewMargin}>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            value="Telephones"
            onChangeText={(name) => console.log(name)}
          />
        </View>
        <View style={styles.viewMargin}>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            value="Date d'admission"
            onChangeText={(name) => console.log(name)}
          />
        </View>
        <ButtonAction title="Enregister" icon="send" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewMargin: {
    marginVertical: 5,
  },
  error: {
    fontSize: 12,
    color: Colors.color13,
  },
});

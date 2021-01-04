import React from 'react';
import {ImageBackground, Platform, TouchableOpacity, View} from 'react-native';
import {Appbar, Avatar, Divider, FAB} from 'react-native-paper';
import {connect} from 'react-redux';
import {logout} from '../actions';
import AppBarCostum from '../common/AppBarCustom';
import ButtonAction from '../common/ButtomAction';
import {CommonStyle} from '../common/styles';
import UserInfo from '../common/UserInfo';

const Profile = ({navigation, profile, logout}) => {
  const image = {
    uri: 'https://hero-bucket.s3.amazonaws.com/defaultuser/user.png',
  };

  return (
    <View>
      <AppBarCostum>
        <Appbar.Content title="Compte" subtitle="Atemengue" />
      </AppBarCostum>
      <View style={CommonStyle.headerProfil}>
        <ImageBackground
          source={image}
          blurRadius={Platform.OS === 'ios' ? 10 : 5}
          style={CommonStyle.headerProfileContent}>
          <TouchableOpacity onPress={() => console.log('cliked!!')}>
            <Avatar.Image size={130} source={image} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View>
        <FAB
          style={[CommonStyle.fab, CommonStyle.positionFab]}
          icon="content-save-edit-outline"
          color="white"
          onPress={() => navigation.navigate('EditProfile')}
        />
      </View>
      <View style={CommonStyle.userInfo}>
        <UserInfo iconName="person" iconTitle="Nom" userInfo="ATEMENGUE" />
        <Divider style={CommonStyle.userInfoMargin} />
        <UserInfo
          iconName="email"
          iconTitle="Email"
          userInfo="moafembe@gmail.com"
        />
        <Divider style={CommonStyle.userInfoMargin} />
        <ButtonAction title="Deconnexion" onPress={logout} />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {logout})(Profile);

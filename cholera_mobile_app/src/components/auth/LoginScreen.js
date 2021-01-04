/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {connect} from 'react-redux';
import {login} from '../../actions';
import ButtonAction from '../../common/ButtomAction';
import {CommonStyle} from '../../common/styles';

const LoginScreen = (props) => {
  const {loading, error} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    props.login(username, password);
  };

  return (
    <ScrollView
      contentContainerStyle={[CommonStyle.container, CommonStyle.marginChild]}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontFamily: 'Ranchers-Regular'}}>
          CHOLERA MONITORING{' '}
        </Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={{fontSize: 16}}>Connectez vous a votre compte</Text>
        <TextInput
          size="large"
          style={styles.inputStyle}
          placeholder="Entrez votre email"
          error={error}
          onChangeText={(value) => setUsername(value)}
        />
        <TextInput
          size="large"
          error={error}
          style={styles.inputStyle}
          secureTextEntry
          placeholder="Entrez votre mot de passe"
          onChangeText={(value) => setPassword(value)}
        />

        <ButtonAction
          loading={loading}
          onPress={onSubmit}
          title="Connectez vous"
        />

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../../assets/img/001-facebook.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} appearance="ghost">
            <Image source={require('../../../assets/img/002-google.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} appearance="ghost">
            <Image source={require('../../../assets/img/003-twitter.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginVertical: 10,
  },

  button: {
    padding: 20,
    marginTop: 15,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
  },
});

const mapStateToProps = ({authState}) => ({
  loading: authState.loading,
  error: authState.error,
});

export default connect(mapStateToProps, {
  login,
})(LoginScreen);

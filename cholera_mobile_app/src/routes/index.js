import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {TokenValidity} from '../actions';
import {navigate, navigationRef} from '../refs/navigationRef';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';
  switch (routeName) {
    case 'Home':
      return 'Acceuil';
    case 'Statistiques':
      return 'Statistiques';
    case 'Maps':
      return 'Maps';
    case 'Notification':
      return 'Notifications';
    case 'Profile':
      return 'Profile';
  }
}

function shouldHeaderBeShown(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Dashboard';

  console.log(routeName);
  switch (routeName) {
    case 'Dashboard':
      return false;
    case 'Statistiques':
      return false;
    case 'Maps':
      return false;
    case 'Notification':
      return false;
    case 'Profile':
      return false;
  }
}

const Routes = (props) => {
  const {isSignedIn, token} = props;

  console.log(isSignedIn, 'THE SIGNIN');

  const checkTokenValid = () => {
    const token = AsyncStorage.getItem('token');
    if (token) {
      props.TokenValidity();
    } else {
      localStorage.clear();
    }
  };

  useEffect(() => {
    checkTokenValid();
  }, []);

  const renderApp = () => {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          headerMode="float"
          aninmation="fade"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName="Home">
          {isSignedIn === false ? (
            <Stack.Screen
              options={{headerShown: false}}
              name="Auth"
              component={AuthStack}
            />
          ) : (
            <Stack.Screen
              options={({route}) => ({
                headerRight: () => (
                  <MaterialIcons
                    onPress={() => navigate('AddPatient')}
                    style={{
                      marginRight: 10,
                    }}
                    name="add-circle"
                    size={24}
                  />
                ),
                title: getHeaderTitle(route),
                headerShown: shouldHeaderBeShown(route),
              })}
              name="Home"
              component={HomeTabs}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return renderApp();
};

const mapStateToProps = ({authState}) => ({
  isSignedIn: authState.isSignedIn,
  token: authState.token,
});

export default connect(mapStateToProps, {TokenValidity})(Routes);

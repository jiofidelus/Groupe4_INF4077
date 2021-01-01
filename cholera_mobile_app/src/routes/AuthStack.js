import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
//Screens
import LoginScreen from '../components/auth/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = ({navigation, route}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="Login"
      headerMode="screen">
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

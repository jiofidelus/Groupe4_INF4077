import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import LoadingScreen from '../common/LoadingScreen';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';
  switch (routeName) {
    case 'Home':
      return 'Home';
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
    : 'Dashbaoard';
  switch (routeName) {
    case 'Dashbaoard':
      return false;
    case 'Statistiques':
      return false;
    case 'Maps':
      return false;
    case 'Notification':
      return false;
    case 'Plus':
      return false;
  }
}

const renderApp = () => {
  if (false) {
    return <LoadingScreen />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          aninmation="fade"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName="Auth">
          <Stack.Screen
            options={{headerShown: false}}
            name="Auth"
            component={AuthStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

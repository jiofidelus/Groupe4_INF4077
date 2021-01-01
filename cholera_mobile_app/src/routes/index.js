import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import LoadingScreen from '../common/LoadingScreen';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';

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
    : 'Dashboard';
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
            initialRouteName="Home">
            <Stack.Screen
              options={{headerShown: false}}
              name="Auth"
              component={AuthStack}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={HomeTabs}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  };

  return renderApp();
};

export default Routes;

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useState} from 'react';
import AddPatient from '../components/AddPatient';
// Screens
import Dashboard from '../components/Dashboard';

const Stack = createStackNavigator();

const HomeStack = ({navigation, route}) => {
  const [isVisibleFAB, setIsVisibleFAB] = useState(true);
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? false : true) : null,
  });

  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        headerMode="screen">
        <Stack.Screen
          name="Dashboard"
          options={{headerShown: false}}
          component={Dashboard}
        />
        <Stack.Screen
          name="AddPatient"
          options={{headerShown: false, title: 'Enregister patient'}}
          component={AddPatient}
        />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default HomeStack;

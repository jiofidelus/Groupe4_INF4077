import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useState} from 'react';
// Screens
import Dashboard from '../components/Dashboard';

const Stack = createStackNavigator();

const ProfileStack = ({navigation, route}) => {
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
          name="Profile"
          options={{headerShown: false}}
          component={Dashboard}
        />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default ProfileStack;

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useState} from 'react';
import Charts from '../components/Charts';
// Screens

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
          name="Maps"
          options={{headerShown: false}}
          component={Charts}
        />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default ProfileStack;

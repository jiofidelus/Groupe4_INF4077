import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../common/Colors';
import HomeStack from './HomeStack';
import MapStack from './MapStack';
import ProfileStack from './ProfileStack';
import StatistiqueStack from './StatistiqueStack';

const Tab = createBottomTabNavigator();

const HomeTabs = ({navigation, route}) => {
  // Get a name of current screen

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let icon = `${focused ? Colors.color0 : 'gray'}`;
          if (route.name === 'Dashboard') {
            return <MaterialIcons name="home" size={24} color={icon} />;
          } else if (route.name === 'Statistiques') {
            return <MaterialIcons name="analytics" size={24} color={icon} />;
          } else if (route.name === 'Maps') {
            iconName = 'location-on';
          } else if (route.name === 'Notification') {
            return <MaterialIcons name="add-alert" color={icon} size={24} />;
          } else if (route.name === 'Profile') {
            iconName = 'account-circle';
          }
          return <MaterialIcons name={iconName} color={icon} size={24} />;
        },
      })}
      activeColor={Colors.color0}
      initialRouteName="Home">
      <Tab.Screen
        name="Dashboard"
        options={{title: 'Tableau de Bord'}}
        component={HomeStack}
      />
      <Tab.Screen name="Statistiques" component={StatistiqueStack} />
      <Tab.Screen
        name="Maps"
        options={{title: 'Cartes'}}
        component={MapStack}
      />

      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default HomeTabs;

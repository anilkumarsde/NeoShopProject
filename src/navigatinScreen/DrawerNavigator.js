import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screen/ProfileScreen';
import Dashboard from '../screen/Dashboard';
import HomeScreen from '../screen/HomeScreen';
import {Dimensions} from 'react-native';
import Categoryscreen from '../screen/Categoryscreen';
import Searchscreenproduct from '../screen/Searchscreenproduct';
const {height, width} = Dimensions.get('window');

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          width: width * 0.6,
        },
        sceneContainerStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Drawer.Screen name="Homescreen" component={HomeScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="DashBoardScreen" component={Dashboard} />
      <Drawer.Screen name="Category" component={Categoryscreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

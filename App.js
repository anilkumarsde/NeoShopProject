import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './src/navigatinScreen/DrawerNavigator';
import LoginScreen from './src/screen/LoginScreen';
import {enableScreens} from 'react-native-screens';
import SplashScreen from './src/screen/SplashScreen';
import Swipescreen1 from './src/screen/Swipescreen1';
import productdetalsscreen from './src/screen/Productdetail';
import Searchscreenproduct from './src/screen/Searchscreenproduct';
import Commonscreen from './src/screen/Commonscreen';
import Productdetail from './src/screen/Productdetail';

const App = () => {
  enableScreens();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Swipescreen1" component={Swipescreen1} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="Searchscreen" component={Searchscreenproduct} />
        <Stack.Screen name="Commonscreen" component={Commonscreen} />
        <Stack.Screen
          name="Productdetalsscreen"
          component={Productdetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

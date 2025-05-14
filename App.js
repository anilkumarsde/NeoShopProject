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
import Retunpolicyscreen from './src/screen/Retunpolicyscreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Cartscreen from './src/screen/Cartscreen';
import ProfileScreen from './src/screen/ProfileScreen';

const App = () => {
  enableScreens();

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>f
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Swipescreen1" component={Swipescreen1} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen name="Searchscreen" component={Searchscreenproduct} />
          <Stack.Screen name="Commonscreen" component={Commonscreen} />
          <Stack.Screen name="Productdetalsscreen" component={Productdetail} />
          <Stack.Screen
            name="Returnpolicyscreen"
            component={Retunpolicyscreen}
          />
          <Stack.Screen name="Cartscreen" component={Cartscreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

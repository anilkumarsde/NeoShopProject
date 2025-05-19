// App.js
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './src/navigatinScreen/DrawerNavigator';
import LoginScreen from './src/screen/LoginScreen';
import SplashScreen from './src/screen/SplashScreen';
import Swipescreen1 from './src/screen/Swipescreen1';
import Productdetail from './src/screen/Productdetail';
import Searchscreenproduct from './src/screen/Searchscreenproduct';
import Commonscreen from './src/screen/Commonscreen';
import Retunpolicyscreen from './src/screen/Retunpolicyscreen';
import Cartscreen from './src/screen/Cartscreen';
import ProfileScreen from './src/screen/ProfileScreen';
import AddressScreen from './src/screen/AddressScreen';
import {Provider, useDispatch} from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setCartItems} from './src/redux/cartSlice';
import Paymentscreen from './src/screen/Paymentscreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  // Load cart from AsyncStorage when the app starts
  useEffect(() => {
    const loadCartFromStorage = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItems');
        if (storedCartItems) {
          store.dispatch(setCartItems(JSON.parse(storedCartItems)));
        }
      } catch (error) {
        console.error('Error loading cart items from storage:', error);
      }
    };

    loadCartFromStorage();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
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
          <Stack.Screen name="Address" component={AddressScreen} />
          <Stack.Screen name="Payment" component={Paymentscreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;

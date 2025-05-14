// DrawerNavigator.js
import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import Order from '../screen/Order';
import Shopbycategory from '../screen/Shopbycategory';
import Newarival from '../screen/Newarival';
import CustomDrawer from './CustomDrawer';
import {colors} from '../utils/colors';
import {Dimensions, View, Text, TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Customerspport from '../screen/Customerspport';
import About from '../screen/About';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Servie from '../screen/Servie';

const {height, width} = Dimensions.get('window');
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isNewArrivalOpen, setIsNewArrivalOpen] = useState(false); // New State

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerActiveTintColor: 'white',
        drawerInactiveBackgroundColor: 'white',
        drawerStyle: {
          backgroundColor: colors.white,
          width: '78%',
          padding: 0,
          margin: 0,
        },
        drawerLabelStyle: {
          fontSize: height * 0.016,
          fontFamily: 'Montserrat-SemiBold',
          color: colors.black,
          padding: 0,
          margin: 0,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="home"
              size={width * 0.06}
              color={colors.headerIconColor}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Order"
        component={Order}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="microsoft-onenote"
              size={width * 0.06}
              color={colors.headerIconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Shop By Category"
        component={Shopbycategory}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="widgets-outline"
              size={width * 0.06}
              color={colors.headerIconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="New Arrivals"
        component={Newarival}
        options={{
          drawerIcon: () => (
            <Entypo
              name="new"
              size={width * 0.06}
              color={colors.headerIconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Customer Support"
        component={Customerspport}
        options={{
          drawerIcon: () => (
            <AntDesign
              name="customerservice"
              size={width * 0.06}
              color={colors.headerIconColor}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Services"
        component={Servie}
        options={{
          drawerIcon: () => (
            <AntDesign
              name="setting"
              size={width * 0.06}
              color={colors.headerIconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About NeoShop"
        component={About}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="scan-helper"
              size={width * 0.06}
              color={colors.headerIconColor}
            />
          ),
        }}
      />

      {/* Order Screen */}
      {/* <Drawer.Screen
        name="Order"
        component={Order}
        options={{
          drawerLabel: () => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 5,
              }}>
              <MaterialCommunityIcons
                name="widgets-outline"
                size={width * 0.06}
                color={colors.headerIconColor}
              />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: height * 0.016,
                  color: colors.black,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Order
              </Text>
            </TouchableOpacity>
          ),
        }}
      /> */}

      {/* Shop by Category (Collapsible) */}
      {/* <Drawer.Screen
        name="Shopbycategory"
        component={Shopbycategory}
        options={{
          drawerLabel: () => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 5,
              }}
              onPress={() => setIsCategoryOpen(!isCategoryOpen)}>
              <MaterialCommunityIcons
                name="widgets-outline"
                size={width * 0.06}
                color={colors.headerIconColor}
              />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: height * 0.016,
                  color: colors.black,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Shop by Category
              </Text>
            </TouchableOpacity>
          ),
        }}
      /> */}

      {/* New Arrival (Collapsible) */}
      {/* <Drawer.Screen
        name="Newarival"
        component={Hometab}
        options={{
          drawerLabel: () => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 5,
              }}
              onPress={() => setIsNewArrivalOpen(!isNewArrivalOpen)}>
              <Entypo
                name="new"
                size={width * 0.06}
                color={colors.headerIconColor}
              />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: height * 0.016,
                  color: colors.black,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                New Arrival
              </Text>
            </TouchableOpacity>
          ),
        }}
      /> */}

      {/* Collapsible Subcategories for New Arrival */}
      {/* {isNewArrivalOpen && (
        <>
          <Drawer.Screen
            name="Men's Wear"
            component={Newarival}
            options={{
              drawerLabel: () => (
                <Text
                  style={{
                    marginLeft: width * 0.15,
                    fontSize: height * 0.015,
                    color: colors.black,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Men's Wear
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            onPress={Alert.alert('go to new screen')}
            name="Women's Wear"
            component={Newarival}
            options={{
              drawerLabel: () => (
                <Text
                  style={{
                    marginLeft: width * 0.15,
                    fontSize: height * 0.015,
                    color: colors.black,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Women's Wear
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            name="Accessories"
            component={Newarival}
            options={{
              drawerLabel: () => (
                <Text
                  style={{
                    marginLeft: width * 0.15,
                    fontSize: height * 0.015,
                    color: colors.black,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Accessories
                </Text>
              ),
            }}
          />
        </>
      )} */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

// CustomDrawer.js
import React, {use, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {fonts} from '../utils/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');

const CustomDrawer = props => {
  const navigation = useNavigation();
  const [userName, setuserName] = useState('');
  const [email, setemail] = useState('');
  const [image, setImage] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    console.log('username', userName);
    console.log('Email', email);
    console.log('image', image);
  }, []);

  useEffect(() => {
    const getInfo = async () => {
      console.log('usename fetched');
      try {
        const usernamedata = await AsyncStorage.getItem('Username');
        const userEmailData = await AsyncStorage.getItem('Email');
        const userImage = await AsyncStorage.getItem('Image');
        const Token = await AsyncStorage.getItem('authToken');

        if (usernamedata) {
          setuserName(usernamedata);
        }
        if (userEmailData) {
          setemail(userEmailData);
        }
        if (userImage) {
          setImage(userImage);
        }
        if (Token) {
          setToken(Token);
        }
      } catch (error) {}
    };
    getInfo();
  }, []);

  function loginOrprofilescreenHandler() {
    if (token) {
      navigation.navigate('Profile');
    } else {
      navigation.navigate('LoginScreen');
    }
  }

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={loginOrprofilescreenHandler}>
        <Image
          source={require('../utils/images/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </TouchableOpacity>

      {/* Drawer Menu Items */}
      <DrawerItemList {...props} />

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => alert('Logging out...')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f8f9fa',
  },
  profileContainer: {
    padding: height * 0.03,
    backgroundColor: colors.headerIconColor,
    alignItems: 'center',
    marginBottom: height * 0.03,
    borderRadius: width * 0.03,
  },
  profileImage: {
    width: width * 0.25,
    height: height * 0.12,
    borderRadius: width / 2,
    marginBottom: height * 0.02,
  },
  userName: {
    color: colors.white,
    fontSize: width * 0.039,
    fontFamily: fonts.MontserratMedium,
  },
  userEmail: {
    fontFamily: fonts.MontserratRegular,
    color: colors.white,
    fontSize: width * 0.037,
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#dc3545',
    alignItems: 'center',
    marginHorizontal: 15,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomDrawer;

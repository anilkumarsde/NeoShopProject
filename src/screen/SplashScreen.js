import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import StatusBarCom from '../components/StatusBarCom';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');

        setTimeout(() => {
          if (token) {
            navigation.replace('Drawer');
          } else {
            navigation.replace('Swipescreen1');
          }
        }, 3000);
      } catch (error) {
        console.log('Error reading token', error);
        navigation.replace('Swipescreen1');
      }
    };

    checkAuth();
  }, []);
  return (
    <View style={styles.container}>
      {/* custom statusBar  */}
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />

      {/* Logo and title Wrapper*/}
      <View style={styles.logoTitleContainer}>
        <Image
          source={require('../utils/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>NeoShop</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  logoTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: width * 0.04,
  },
  logo: {
    width: width * 0.22,
    resizeMode: 'contain',
  },
  title: {
    fontSize: height * 0.04,
    fontFamily: fonts.MontserratBold,
    color: colors.btnColor,
  },
});

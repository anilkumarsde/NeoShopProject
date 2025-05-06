import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import StatusBarCom from '../components/StatusBarCom';
import {colors} from '../utils/colors';
import Checkoutheader from '../components/Checkoutheader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {fonts} from '../utils/fonts';
import Profileinput from '../components/Profileinput';

const {height, width} = Dimensions.get('window');

const ProfileScreen = () => {
  const [email, setemail] = useState('');
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      navigation.reset({
        index: 0,
        routes: [{name: 'SplashScreen'}],
      });
    } catch (error) {
      console.log('Error during sign out:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* status bar */}
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />

      {/* header */}
      <Checkoutheader
        icon={<AntDesign name={'left'} size={width * 0.046} />}
        title={'Checkout'}
      />

      {/* profile img */}

      <View style={styles.profileImgwrapper}>
        <Image
          source={require('../utils/images/profile.png')}
          style={styles.profileImg}
        />
        <View style={styles.imgEditWrapper}>
          <Feather name={'edit-2'} size={17} color={colors.white} />
        </View>
      </View>

      {/* personal details */}

      <Text style={styles.personalDetails}>Personal Details</Text>

      {/* input for personal details */}

      <Profileinput
        label={'Email Address'}
        placeholdertxt={'aashifa@gmail.com'}
        value={email}
        setemail={setemail}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: width * 0.04,
  },
  profileImg: {
    height: height * 0.1,
    width: width * 0.2,
    resizeMode: 'contain',
    // alignSelf: 'center',
    marginTop: height * 0.02,
  },
  profileImgwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgEditWrapper: {
    height: height * 0.05,
    width: width * 0.1,
    borderRadius: width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4392F9',
    position: 'absolute',
    bottom: -10,
    // alignSelf: 'center',
    left: width * 0.5,
    borderWidth: 5,
    borderColor: colors.white,
  },
  personalDetails: {
    fontSize: width * 0.044,
    color: colors.black,
    fontFamily: fonts.MontserratSemiBold,
    marginTop: height * 0.03,
  },
});

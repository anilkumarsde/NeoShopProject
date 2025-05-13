import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import StatusBarCom from '../components/StatusBarCom';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import InputFieldCom from '../components/InputFieldCom';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import CustomeBtn from '../components/CustomeBtn';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('window');

const LoginScreen = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigaiton = useNavigation();

  const handleSignin = async (username, password) => {
    try {
      const respone = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      const token = respone.data.accessToken;
      const userName = respone.data.username;
      const email = respone.data.email;
      const image = respone.data.image;
      await AsyncStorage.setItem('authToken', token);
      await AsyncStorage.setItem('Username', userName);
      await AsyncStorage.setItem('Email', email);
      await AsyncStorage.setItem('Image', image);
      console.log('user logedin', token);
      setpassword('');
      setusername('');
      navigaiton.replace('Drawer');
    } catch (error) {
      console.log('failed', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      <Text style={styles.title}>Welcome Back!</Text>

      {/*input field for email  */}
      <InputFieldCom
        placeholder={'Username or Email'}
        value={username}
        onChangeText={e => setusername(e)}
        icon1={
          <FontAwesome
            name={'user'}
            size={width * 0.07}
            color={colors.placeholderIconColor}
          />
        }
      />
      {/* input field for password */}
      <InputFieldCom
        placeholder={'Password'}
        value={password}
        isSecure={false}
        onChangeText={p => setpassword(p)}
        icon1={
          <Fontisto
            name={'locked'}
            size={width * 0.07}
            color={colors.placeholderIconColor}
          />
        }
        icon2={
          <Feather
            name={'eye'}
            size={width * 0.07}
            color={colors.placeholderIconColor}
          />
        }
      />

      {/* forget password btn */}

      <TouchableOpacity style={styles.forgetpasswordBtn}>
        <Text style={styles.forgetTxt}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* login btn */}
      <CustomeBtn
        btnTitle={'Login'}
        onPress={() => handleSignin(username, password)}
      />

      {/* other login option container */}

      <View style={styles.otherLoginOptionWrapper}>
        {/* header */}
        <View style={styles.otherLoginHeader}>
          <Text style={styles.headerTxt}>- OR Continue with -</Text>
        </View>
        {/* other login wrapper */}
        <View style={styles.otherLoginWrapper}>
          <TouchableOpacity style={styles.logoWrapper}>
            <Image
              source={require('../utils/images/google.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoWrapper}>
            <Image
              source={require('../utils/images/apple1.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoWrapper}>
            <Image
              source={require('../utils/images/facebook.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
        {/* footer */}
        <View style={styles.footerwrapper}>
          <Text style={styles.createAccountTxt}>Create An Account</Text>
          <TouchableOpacity style={styles.signUpbtn}>
            <Text style={styles.signUptxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    fontSize: width * 0.1,
    width: width * 0.6,
    marginTop: height * 0.02,
    lineHeight: height * 0.06,
  },
  forgetpasswordBtn: {
    alignSelf: 'flex-end',
    marginTop: height * 0.02,
  },
  forgetTxt: {
    color: colors.btnColor,
    fontFamily: fonts.MontserratRegular,
    fontSize: width * 0.038,
  },
  otherLoginOptionWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.07,
  },
  otherLoginHeader: {},
  headerTxt: {
    fontSize: width * 0.039,
    fontFamily: fonts.MontserratMedium,
    color: colors.createAcountTxtColor,
  },
  otherLoginWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.05,
    marginVertical: height * 0.03,
    // backgroundColor:'red'
  },
  logoWrapper: {
    height: height * 0.08,
    width: width * 0.16,
    borderRadius: width / 2,
    borderWidth: 1,
    borderColor: colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.iconbackcolor,
  },

  logo: {
    height: height * 0.04,
    width: width * 0.08,
    resizeMode: 'contain',
  },

  footerwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
  },
  createAccountTxt: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratRegular,
    color: colors.createAcountTxtColor,
  },
  signUpbtn: {},
  signUptxt: {
    color: colors.btnColor,
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratSemiBold,
    textDecorationLine: 'underline',
  },
});

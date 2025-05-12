import {
  Dimensions,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');

const Watch = () => {
  const navigation = useNavigation();

  function gotoCommonscreen() {
    navigation.navigate('Commonscreen', {searchQuery: 'mobile-accessories'});
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={gotoCommonscreen}>
      <ImageBackground
        source={require('../utils/images/earphone.jpg')}
        style={styles.bannerimg}>
        <View style={styles.btnWrapper}>
          <Text style={styles.btnTxt}>Explore more</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Watch;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.04,
    width: '100%',
    marginTop: height * 0.04,
  },
  bannerimg: {
    height: height * 0.2,
    width: '100%',
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  btnWrapper: {
    backgroundColor: colors.headerIconColor,
    width: '32%',
    alignSelf: 'flex-end',
    // position: 'absolute',
    // right: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.02,
    borderRadius: width * 0.05,
    paddingVertical: height * 0.01,
    marginTop: width * 0.22,
  },
  btnTxt: {
    color: colors.white,
    fontFamily: fonts.MontserratRegular,
    fontSize: width * 0.03,
  },
});

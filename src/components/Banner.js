import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const Banner = () => {
  const navigation = useNavigation();

  const gotoCommonscreen = () => {
    console.log('moved to common screen ');
    navigation.navigate('Commonscreen', {searchQuery: 'womens-shoes'});
  };
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={styles.container}
      onPress={gotoCommonscreen}>
      <Image
        source={require('../utils/images/mac.png')}
        style={styles.bannerimg}
      />
      {/*  */}
    </TouchableOpacity>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.04,
    marginTop: height * 0.03,
    // backgroundColor:'red',
    // marginBottom: width * 0.03,
  },
  bannerimg: {
    height: height * 0.22,
    width: '100%',
    resizeMode: 'stretch',
  },
});

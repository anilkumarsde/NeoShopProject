import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const SaleBanner = () => {
  const navigation = useNavigation();
  function gotoCommonscreen() {
    navigation.navigate('Commonscreen', {searchQuery: "kitchen-accessories"});
  }
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={gotoCommonscreen}>
      <Image
        source={require('../utils/images/bigsale1.png')}
        style={styles.bannerimg}
      />
    </TouchableOpacity>
  );
};

export default SaleBanner;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.04,
    // height: height * 0.25,
    width: '100%',
    marginTop: height * 0.04,
    // backgroundColor: 'red',
    // marginBottom:height*0.04
  },
  bannerimg: {
    // height: height * 0.25,
    height: height * 0.2,
    width: '100%',
    resizeMode: 'stretch',
    // backgroundColor: 'green',
  },
});

import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import MarqueeView from 'react-native-marquee-view';
import {fonts} from '../utils/fonts';
const {height, width} = Dimensions.get('window');

const ScrollingOffer = () => {
  return (
    <View style={styles.container}>
      <MarqueeView
        speed={0.1}
        delay={0}
        autoPlay
        loop
        direction="left"
        style={styles.marqueeContainer}>
        <Text style={styles.marqueeText}>
          🎉 50% OFF on Watches! 🕶️ 60% OFF on Sunglasses! 🛍️ 40% OFF on Other
          Items! 🎉
        </Text>
        {/*  */}
      </MarqueeView>
    </View>
  );
};

export default ScrollingOffer;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // backgroundColor:'red'
  },
  marqueeContainer: {
    // height: height * 0.02,
    // backgroundColor: '#fdd835',
    marginTop:height*0.01
  },
  marqueeText: {
    fontSize: width * 0.032,
    fontFamily: fonts.MontserratRegular,
    color: '#000',
  },
});

import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';

const {height, width} = Dimensions.get('window');
const Specialoffer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../utils/images/specialoffer.png')}
        style={styles.specialofferimg}
      />
      <View style={styles.offerTxtwrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.offerTxt}>Special Offers</Text>
          <View style={styles.emogyWrapper}>
            <Image
              source={require('../utils/images/emogy.png')}
              style={styles.emogy}
            />
          </View>
        </View>
        <Text style={styles.messageTxt}>
          We make sure you get the offer you need at best prices
        </Text>
      </View>
    </View>
  );
};

export default Specialoffer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.032,
    backgroundColor: colors.white,
    paddingVertical: height * 0.015,
    gap: width * 0.04,
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.02,
  },
  specialofferimg: {
    height: height * 0.1,
    width: width * 0.2,
    resizeMode: 'contain',
  },
  offerTxtwrapper: {
    // flexDirection:'row',
    // alignItems:'center'
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
  },
  offerTxt: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
  },
  emogyWrapper: {
    height: height * 0.035,
    width: width * 0.07,
    borderWidth: 1,
    borderRadius: width / 2,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: colors.grey,
    // resizeMode:'contain'
  },
  emogy: {
    height: height * 0.02,
    width: width * 0.04,
    resizeMode: 'contain',
    marginLeft: width * 0.01,
  },
  messageTxt: {
    fontSize: width * 0.032,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    width: width / 2,
  },
});

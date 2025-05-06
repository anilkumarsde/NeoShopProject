import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {slidesData} from '../utils/sliderDara';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';

const {height, width} = Dimensions.get('window');

const OfferSlider = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination={true}
        dotColor="#ccc"
        // index={0}
        paginationStyle={{bottom: -20}}
        activeDotColor="#FE9EAC">
        {slidesData.map((item, id) => (
          <View key={id} style={styles.slide}>
            <View style={styles.imageWrapper}>
              <ImageBackground
                source={require('../utils/images/banner.png')}
                style={styles.image}
                resizeMode="cover">
                <View style={styles.offerDetailsWrapper}>
                  <Text style={styles.offTxt}>50-40% OFF</Text>
                  <Text style={styles.inProductTxt}>Now in (product)</Text>
                  <Text style={styles.allColorTxt}>All colours</Text>
                  <TouchableOpacity
                    style={styles.shopNowBtn}
                    activeOpacity={0.3}>
                    <Text style={styles.shopNowtxt}>Shop Now</Text>
                    <Image
                      source={require('../utils/images/arrowicon.png')}
                      style={styles.arrowicon}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.04,
    height: height * 0.25,
    width: '100%',
    marginTop:height*0.02
  },
  slide: {
    flex: 1,
    borderRadius: 10,
  },
  imageWrapper: {
    flex: 1,
    borderRadius: width * 0.03,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  percentageoffer: {
    alignSelf: 'flex-start',
  },
  offerDetailsWrapper: {
    alignItems: 'flex-start',
    // paddingVertical: height * 0.04,
    marginVertical: height * 0.04,
    paddingLeft: width * 0.029,
    // backgroundColor: 'red',
  },
  offTxt: {
    fontSize: width * 0.065,
    fontFamily: fonts.MontserratBold,
    color: colors.white,
    marginBottom: width * 0.01,
    // color:colors.white
  },
  inProductTxt: {
    fontSize: width * 0.036,
    fontFamily: fonts.MontserratRegular,
    color: colors.white,
    marginVertical: height * 0.004,
  },
  allColorTxt: {
    fontFamily: fonts.MontserratRegular,
    fontSize: width * 0.039,
    color: colors.white,
  },
  shopNowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.012,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: width * 0.014,
    paddingHorizontal: width * 0.015,
    paddingVertical: height * 0.005,
    marginTop: height * 0.01,
  },
  shopNowtxt: {
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.032,
    color: colors.white,
  },
  arrowicon: {
    height: height * 0.01,
    width: width * 0.02,
    resizeMode: 'contain',
  },
});

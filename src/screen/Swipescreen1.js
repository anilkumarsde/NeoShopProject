import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import StatusBarCom from '../components/StatusBarCom';
import Swiper from 'react-native-swiper';
import {slidesData} from '../utils/sliderDara';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const SlideItem = ({item}) => (
  <View style={styles.slide}>
    <Image source={item.image} style={styles.image} resizeMode="contain" />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subtitle}>{item.subtitle}</Text>
  </View>
);

const Swipescreen1 = () => {
  const [current, setCurrent] = useState(null);
  const navigation = useNavigation();

  const hanlerCurrentIndext = index => {
    setCurrent(index);
    if (slidesData.length - 1 === current) {
      GoToHomeScreen();
    }
  };

  const GoToHomeScreen = () => {
    navigation.replace('LoginScreen');
  };

  // slidercomponent

  return (
    <View style={styles.container}>
      {/* statusBar component */}
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />

      {/* header Wrapper */}
      <View style={styles.headerWrapper}>
        <View style={styles.leftBox}>
          <Text style={styles.currentIndex}>{current + 1}</Text>
          <Text style={styles.totalIndex}>/3</Text>
        </View>
        <TouchableOpacity
          style={styles.rightBox}
          onPress={() => GoToHomeScreen()}>
          <Text style={styles.skipbtnTxt}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Swiper */}
      <Swiper
        loop={true}
        showsPagination={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        onIndexChanged={hanlerCurrentIndext}
        index={0}
        showsButtons={true}
        nextButton={
          <Text style={styles.nextsButton}>
            {slidesData.length - 1 === current ? 'Get Started' : 'next'}
          </Text>
        }
        prevButton={<Text style={styles.presButton}>Prev</Text>}
        removeClippedSubviews={true}>
        {slidesData.map((item, id) => (
          <SlideItem key={id} item={item} />
        ))}
      </Swiper>
    </View>
  );
};

export default Swipescreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    // paddingHorizontal:width*0.05
  },
  slide: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: height * 0.01,
  },
  image: {
    width: width * 0.9,
    height: height * 0.5,
  },
  title: {
    fontSize: width * 0.08,
    fontFamily: fonts.MontserratBold,
    marginBottom: height * 0.01,
    textAlign: 'center',
    color: colors.black,
  },
  subtitle: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratMedium,
    color: colors.grey,
    textAlign: 'center',
    paddingHorizontal: width * 0.01,
    lineHeight: height * 0.03,
  },
  dotStyle: {
    height: height * 0.01,
    width: width * 0.02,
    borderRadius: width / 2,
  },
  activeDotStyle: {
    height: height * 0.01,
    width: width * 0.08,
    backgroundColor: colors.black,
  },
  nextsButton: {
    position: 'absolute',
    bottom: -height / 2.1,
    right: width * 0.025,
    color: colors.btnColor,
    paddingVertical: height * 0.008,
    paddingHorizontal: width * 0.01,
    overflow: 'hidden',
    zIndex: 10,
    fontSize: width * 0.042,
    fontFamily: fonts.MontserratSemiBold,
  },

  presButton: {
    display: 'none',
  },

  headerWrapper: {
    paddingHorizontal: width * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor:'red',
    zIndex: 999,
  },

  leftBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentIndex: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratBold,
    color: colors.black,
  },
  totalIndex: {
    fontSize: width * 0.039,
    fontFamily: fonts.MontserratBold,
    color: colors.grey,
  },
  rightBox: {},
  skipbtnTxt: {
    fontSize: height * 0.02,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
  },
});

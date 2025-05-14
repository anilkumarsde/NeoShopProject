import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import {OffersliderData} from '../utils/OffersliderData';
import {colors} from '../utils/colors';

const {height, width} = Dimensions.get('window');

const OfferSlider = () => {
  const navigation = useNavigation();

  // Function to handle navigation based on ID
  const goToCommonScreen = id => {
    let searchQuery = '';
    switch (id) {
      case 1:
        searchQuery = 'furniture';
        break;
      case 2:
        searchQuery = 'smartphones';
        break;
      case 3:
        searchQuery = 'groceries';
        break;
      case 4:
        searchQuery = 'fragrances';
        break;
      default:
        searchQuery = 'products';
    }
    navigation.navigate('Commonscreen', {searchQuery});
  };

  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={4}
        showsPagination={true}
        dotColor="#ccc"
        removeClippedSubviews={false}
        activeDotStyle={{width: width * 0.09}}
        paginationStyle={{bottom: -20}}
        activeDotColor={colors.headerIconColor}>
        {OffersliderData.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.slide}
            onPress={() => goToCommonScreen(item.id)}
            activeOpacity={0.7}>
            <View style={styles.imageWrapper}>
              <ImageBackground
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    width: '100%',
  },
  slide: {
    flex: 1,
  },
  imageWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

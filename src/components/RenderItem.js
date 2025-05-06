import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';
import {productsdetalsscreenHandler} from '../utils/ProductsDetailsScreenHandler';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const RenderItem = ({item}) => {
  const navigation = useNavigation();
  const originalPrice = (
    item.price /
    (1 - item.discountPercentage / 100)
  ).toFixed(2);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => productsdetalsscreenHandler(item, navigation)}>
      <Image source={{uri: item.images[0]}} style={styles.itemImg} />
      <View style={styles.infoWrapper}>
        <Text style={styles.itemTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.itemDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.realPriceWrapper}>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <Text style={styles.realPrice}>${originalPrice}</Text>
        </View>

        <Text style={styles.itemDescountPercentage}>
          {item.discountPercentage}% off
        </Text>
        <Rating
          type="star"
          startingValue={item.rating}
          readonly
          imageSize={12}
          ratingBackgroundColor="transparent"
          style={styles.ratingStyle}
          transparent
        />
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    width: '49%',
    backgroundColor: colors.white,
    marginRight: '2%',
    marginBottom: height * 0.02,
    borderRadius: width * 0.02,
  },
  itemImg: {
    height: height * 0.25,
    resizeMode: 'contain',
    width: width * 0.4,
  },
  itemTitle: {
    fontSize: width * 0.036,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    marginTop: height * 0.01,
  },
  itemDescription: {
    fontSize: width * 0.032,
    fontFamily: fonts.MontserratRegular,
    color: colors.black,
    marginTop: height * 0.01,
  },
  itemPrice: {
    fontSize: width * 0.0379,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
  },
  realPriceWrapper: {
    flexDirection: 'row',
    gap: width * 0.02,
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  realPrice: {
    fontSize: width * 0.032,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.grey,
    textDecorationLine: 'line-through',
  },
  itemDescountPercentage: {
    fontSize: width * 0.03,
    color: colors.btnColor,
    fontFamily: fonts.MontserratMedium,
    marginTop: width * 0.01,
  },
  infoWrapper: {
    paddingHorizontal: width * 0.03,
  },
  ratingStyle: {
    alignSelf: 'flex-start',
    paddingVertical: height * 0.01,
  },
});

import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';
import {Rating} from 'react-native-ratings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {productsdetalsscreenHandler} from '../utils/ProductsDetailsScreenHandler';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const ProductList = ({productdata, title}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  // scroll to next index function

  const scrollToNextItem = ({seth}) => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= productdata.length) {
      nextIndex = 0;
    }

    flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    setCurrentIndex(nextIndex);
  };

  // function productsdetalsscreenHandler(item) {
  //   console.log('djfaslfja', item);
  // }

  const gotoproductdetal = (item, searchData) => {
    // Example of navigating to Productdetail screen
    navigation.replace('Productdetalsscreen', {
      item: item,
      searchData: productdata, // Make sure this is an array
    });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.productlistWrapper}
        onPress={() => gotoproductdetal(item, productdata)}>
        <Image source={{uri: item?.images[0]}} style={styles.itemImage} />

        <Text style={styles.itemTitle} numberOfLines={1}>
          {item?.title}
        </Text>
        <Text numberOfLines={2} style={styles.itemDescription}>
          {item?.description}
        </Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.itemprice}>${item?.price}</Text>
          <Text style={styles.itempricediscountpercentage}>
            {item?.discountPercentage}% off
          </Text>
        </View>
        <Rating
          type="star"
          startingValue={item.rating}
          readonly
          imageSize={10}
          ratingBackgroundColor="transparent"
          style={styles.ratingStyle}
          transparent
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.scrollBtn} onPress={scrollToNextItem}>
        <AntDesign name="right" size={15} />
      </TouchableOpacity>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTxt}>{title}</Text>
      </View>
      <FlatList
        data={productdata}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.04,
    // marginTop: height * 0.05,
    // backgroundColor:'red',
    marginBottom:width*0.01

    // width:'100%'
  },
  headerWrapper: {
    marginBottom: height * 0.02,
  },
  headerTxt: {
    fontSize: width * 0.04,
    color: colors.headerIconColor,
    fontFamily: fonts.MontserratBold,
  },
  productlistWrapper: {
    // backgroundColor: 'red',
    marginRight: 10,
    width: width / 2.32,
    backgroundColor: colors.white,
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.02,
    // paddingVertical:10
  },
  itemImage: {
    height: height * 0.25,
    resizeMode: 'contain',
    // backgroundColor:'red'
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
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01,
    gap: 10,
  },
  itemprice: {
    fontSize: width * 0.0379,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
  },
  itempricediscountpercentage: {
    fontSize: width * 0.03,
    color: colors.btnColor,
    fontFamily: fonts.MontserratRegular,
  },
  itemrating: {
    fontSize: width * 0.03,
    fontFamily: fonts.MontserratRegular,
    color: colors.black,
  },
  ratingStyle: {
    paddingBottom: height * 0.01,
    alignItems: 'flex-start',
  },
  scrollBtn: {
    position: 'absolute',
    right: 1,
    zIndex: 1,
    bottom: height * 0.15,
    height: height * 0.06,
    width: width * 0.12,
    borderRadius: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBCACB',
  },
});

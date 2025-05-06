import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import StatusBarCom from '../components/StatusBarCom';
import {colors} from '../utils/colors';
import Detailproductheader from '../components/Detailproductheader';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {fonts} from '../utils/fonts';
const {height, width} = Dimensions.get('window');

const Productdetail = () => {
  const [itemNumber, setItemNumber] = useState(0);
  //   decrease item's number
  function decrement() {
    if (itemNumber > 0) {
      setItemNumber(pre => pre - 1);
    }
  }
  //  increase item's number
  function increment() {
    setItemNumber(pre => pre + 1);
  }

  const route = useRoute();
  const {item} = route.params;
  return (
    <View style={styles.container}>
      {/* status bar */}
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      {/* header */}
      <Detailproductheader />
      {/* <Text>{item.title}</Text> */}
      <Image source={{uri: item.images[0]}} style={styles.itemImage} />
      <View style={styles.productInfoWrapper}>
        <View style={styles.titelWrapper}>
          <View style={styles.leftBoxWrapper}>
            <Text style={styles.titel} numberOfLines={1}>
              {item.title}
            </Text>
            <View style={styles.reviewWrapper}>
              <Entypo name={'star'} size={width * 0.05} color={'#FEBA0D'} />
              <Text style={styles.itemRating}>{Math.ceil(item.rating)}.0</Text>
            </View>
          </View>
          <View style={styles.rightBoxWrapper}>
            <View style={styles.stockWrapper}>
              <TouchableOpacity
                style={styles.decrimentWrapper}
                onPress={decrement}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{itemNumber}</Text>
              <TouchableOpacity
                style={styles.decrimentWrapper}
                onPress={increment}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.stcokTxt}>
              {item.stock ? 'Avalibale in Stock' : 'Not Avalibale in Stock'}
            </Text>
          </View>
        </View>
        <Text style={styles.DescriptionTitle}>Description</Text>
        <Text style={styles.descriptionSubTitle}>{item.description}</Text>

        <View style={styles.footerWrapper}>
          <View style={styles.priceWrapper}>
            <Text style={[styles.itemPrice, {color: '#514EB5'}]}>$</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.cartWrapper}>
            <EvilIcons name="cart" color={colors.white} size={width * 0.09} />
            <Text style={styles.addToCartTxt}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Productdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  itemImage: {
    height: height * 0.4,
    width: '100%',
    resizeMode: 'contain',
    marginTop: height * 0.02,

    // backgroundColor: 'red',
  },
  productInfoWrapper: {
    marginTop: height * 0.04,
    backgroundColor: colors.white,
    paddingHorizontal: width * 0.04,
    height: '100%',
    paddingTop: height * 0.02,
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
  },
  titelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: '100%',
    // paddingHorizontal: width * 0.02,
    paddingVertical: 5,
  },
  leftBoxWrapper: {
    // paddingHorizontal: width * 0.02,
    width: '50%',
    // backgroundColor: 'blue',
  },
  titel: {
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    fontSize: width * 0.042,
    marginBottom: height * 0.01,
  },
  reviewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
  },
  itemRating: {
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    fontSize: width * 0.04,
  },
  rightBoxWrapper: {
    width: '39%',
    // flexDirection: 'row',
    // backgroundColor: 'red',s
  },
  stockWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // gap:10,
    backgroundColor: '#F3F3F3',
    borderRadius: width * 0.045,
    paddingVertical: height * 0.01,
    marginBottom: height * 0.009,
  },
  decrimentWrapper: {
    height: height * 0.04,
    width: width * 0.08,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width / 2,
  },
  DescriptionTitle: {
    marginVertical: height * 0.01,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
    fontSize: width * 0.039,
  },
  descriptionSubTitle: {
    fontFamily: fonts.MontserratRegular,
    color: colors.black,
    fontSize: width * 0.035,
  },
  stcokTxt: {
    fontSize: width * 0.037,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
  },
  footerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.07,
    justifyContent: 'space-between',
  },
  currencyType: {},
  itemPrice: {
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    fontSize: width * 0.08,
  },
  cartWrapper: {
    backgroundColor: '#514EB7',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.014,
    paddingHorizontal: width * 0.035,
    borderRadius: width * 0.07,
    gap: width * 0.02,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCartTxt: {
    color: colors.white,
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratSemiBold,
    marginTop: height * 0.01,
  },
});

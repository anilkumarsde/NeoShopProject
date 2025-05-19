// src/components/CartData.js
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/cartSlice';
import {colors} from '../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const CartData = () => {
  const cartData = useSelector(state => state.cart.items);
  console.log('cartDAta', cartData);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [specificItem, setspecificItem] = useState(null);
  const [itemNumber, setItemNumber] = useState(1);
  const [couponTxt, setCoupontxt] = useState('');
  console.log('quantity number ', itemNumber, specificItem);
  function modalHandler(item) {
    setVisible(true);
    console.log('modal open');
    console.log('item in the modal', item);
    setItemNumber(item.quantity);
    setspecificItem(item);
  }
  function closeModalHandler() {
    setVisible(false);
    setItemNumber(1);
  }
  const calculateTotalPrice = cartData => {
    return cartData
      .reduce((initial, item) => initial + item.quantity * item.price, 0)
      .toFixed(2);
  };

  const findAmount = useMemo(() => calculateTotalPrice(cartData), [cartData]);

  const handleRemove = id => {
    dispatch(removeFromCart(id));
  };

  const handleMoveToWishlist = id => {
    console.log('Move to wishlist:', id);
  };

  const navigation = useNavigation();
  function gotoProduductdetailHandler(item, cartData) {
    navigation.navigate('Productdetalsscreen', {
      item: item,
      searchData: cartData,
    });
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        backdropColor={'#0000004d'}
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.modalWrapper}>
          <View style={styles.selectQuantWrapper}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={closeModalHandler}>
              <Entypo name="circle-with-cross" size={width * 0.07} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Select Quantity</Text>
            <View style={styles.quantityControlWrapper}>
              <TouchableOpacity
                style={styles.controlBtn}
                onPress={() => setItemNumber(pre => pre - 1)}>
                <AntDesign
                  name="minus"
                  size={width * 0.04}
                  color={colors.black}
                />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{itemNumber}</Text>
              <TouchableOpacity
                style={styles.controlBtn}
                onPress={() => setItemNumber(pre => pre + 1)}>
                <AntDesign
                  name="plus"
                  size={width * 0.04}
                  color={colors.black}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.updateBtn}
              onPress={closeModalHandler}>
              <Text style={styles.updateBtnText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.flatListWrapper}>
        <FlatList
          data={cartData}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.itemWrapper}>
              {/*  */}
              <View activeOpacity={0.7} style={styles.itemcontainer}>
                <TouchableOpacity>
                  <Image
                    source={{uri: item.thumbnail}}
                    style={styles.itemImg}
                  />
                </TouchableOpacity>

                <View style={styles.detailsContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.brand}>{item.brand}</Text>
                  <View style={styles.quantityWrapper}>
                    <TouchableOpacity
                      style={styles.quantyBtn}
                      onPress={() => modalHandler(item)}>
                      <Text style={styles.quntText}>QTY</Text>
                    </TouchableOpacity>
                    <AntDesign
                      name="down"
                      size={width * 0.03}
                      color={colors.black}
                    />
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>${item.price}</Text>
                    <Text style={styles.discount}>
                      {item.discountPercentage}% OFF
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleRemove(item.id)}>
                  <AntDesign name="delete" size={16} color={colors.black} />
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.wishlistButton]}
                  onPress={() => handleMoveToWishlist(item.id)}>
                  <AntDesign name="hearto" size={16} color={colors.black} />
                  <Text style={styles.buttonText}>Wishlist</Text>
                </TouchableOpacity>
              </View>
              {/*  */}
            </View>
          )}
        />
      </View>

      <View style={styles.orderWrapper}>
        <View style={styles.couponWrapper}>
          <TextInput
            placeholder="Enter Coupon code"
            style={styles.inputBox}
            value={couponTxt}
            maxLength={6}
            onChangeText={text => setCoupontxt(text)}
          />
          <TouchableOpacity
            style={[
              styles.applyBtn,
              {
                backgroundColor:
                  couponTxt.length > 0 ? colors.headerIconColor : colors.grey,
              },
            ]}>
            <Text style={styles.btnTxt}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orderSummaryContainer}>
          <Text style={styles.orderSummaryTxt}>Order Summary</Text>
        </View>
        <View style={styles.priceDetailWrapper}>
          <Text style={styles.totalProductTxt}>
            Price Detail ({`${cartData.length} items`}){' '}
          </Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.priceTxt}>Total MRP</Text>
            <Text style={styles.priceTxt}>${findAmount}</Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.priceTxt}>Delivery Charges</Text>
            <View style={styles.deliverypriceWrapper}>
              <Text style={styles.priceTxt1}>$15</Text>
              <Text style={styles.freeDeleveryTxt}>FREE</Text>
            </View>
          </View>
        </View>
        <View style={styles.totalAmountWrapper}>
          <Text style={styles.amountPaybleTxt}>Amount payable</Text>
          <Text style={styles.amountPaybleTxt}>${findAmount}</Text>
        </View>
        {/*  */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default CartData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.grey,
    paddingHorizontal: width * 0.04,
  },
  itemWrapper: {
    backgroundColor: colors.white,
    // borderRadius: width * 0.03,
    // marginVertical: 8,
    marginBottom: height * 0.02,
    paddingTop: height * 0.02,
    elevation: 1,
    // height:'50%'
    // flex: 1,
  },
  // flatListWrapper: {
  //   height: '40%',
  // },
  itemImg: {
    width: width * 0.3,
    height: width * 0.3,
  },
  detailsContainer: {
    marginLeft: width * 0.02,
    // flex: 1,
    // justifyContent: 'space-between',
    // justifyContent:'center',
    // alignItems:'center'
  },
  title: {
    fontSize: width * 0.037,
    // fontWeight: 'bold',
    fontFamily: fonts.MontserratMedium,
    // color: '#333',
    color: colors.black,
    marginBottom: height * 0.01,
    // marginBottom: 5,
  },
  brand: {
    fontSize: width * 0.035,
    fontFamily: fonts.MontserratRegular,
    color: colors.black,
    marginBottom: width * 0.01,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.014,
    gap: width * 0.04,
  },
  price: {
    fontSize: width * 0.04,
    // fontWeight: 'bold',
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    marginRight: width * 0.01,
  },
  discount: {
    fontSize: width * 0.032,
    color: 'green',
    fontFamily: fonts.MontserratRegular,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundColor,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: colors.primary,
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.04,
    // borderRadius: 8,
    // marginRight: 10,
    width: '50%',
    gap: 5,
    // backgroundColor: 'red',
  },
  wishlistButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.04,
    borderLeftWidth: 0.3,
    borderColor: colors.grey,
    gap: 5,
    width: '50%',
  },
  buttonText: {
    color: colors.black,
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.036,
  },
  itemcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: width * 0.04,
  },
  quantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    marginVertical: height * 0.01,
    width: width * 0.2,
    justifyContent: 'center',
    // alignItems:'center',
    borderRadius: width * 0.012,
    paddingVertical: height * 0.005,
    elevation: 0.3,
    gap: width * 0.013,
  },
  quantyBtn: {},
  quntText: {
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    fontSize: width * 0.03,
  },
  modalWrapper: {
    flex: 1,
  },
  selectQuantWrapper: {
    position: 'absolute',
    flex: 1,
    bottom: 0,
    height: height * 0.29,
    backgroundColor: colors.white,
    width: '100%',
    paddingTop: height * 0.01,
    paddingHorizontal: width * 0.04,
    borderTopRightRadius: width * 0.04,
    borderTopLeftRadius: width * 0.04,
    alignItems: 'center',
  },
  closeBtn: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  modalTitle: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratBold,
    marginBottom: height * 0.02,
    color: colors.black,
  },
  quantityControlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  controlBtn: {
    backgroundColor: colors.backgroundColor,
    padding: width * 0.03,
    borderRadius: width * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.05,
  },
  quantityText: {
    fontSize: width * 0.05,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
  },
  updateBtn: {
    backgroundColor: colors.headerIconColor,
    paddingVertical: height * 0.02,
    // paddingHorizontal: width * 0.2,
    borderRadius: width * 0.1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateBtnText: {
    color: colors.white,
    fontFamily: fonts.MontserratSemiBold,
    fontSize: width * 0.035,
  },
  orderWrapper: {
    backgroundColor: colors.white,
    marginTop: height * 0.01,
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.02,
    paddingVertical: height * 0.02,
  },
  couponWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    borderBottomColor: colors.grey,
  },
  inputBox: {},
  applyBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.1,
  },
  btnTxt: {
    fontFamily: fonts.MontserratMedium,
    color: colors.white,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.035,
  },
  orderSummaryContainer: {
    marginVertical: height * 0.015,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
    paddingBottom: height * 0.005,
  },
  orderSummaryTxt: {
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    fontSize: width * 0.037,
  },
  priceDetailWrapper: {
    borderBottomWidth: 0.5,
    paddingBottom: width * 0.01,
    borderBottomColor: colors.grey,
  },
  totalProductTxt: {
    fontSize: width * 0.036,
    color: colors.black,
    fontFamily: fonts.MontserratSemiBold,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceTxt: {
    fontSize: width * 0.037,
    color: colors.grey,
    paddingVertical: height * 0.005,
  },
  deliverypriceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.01,
  },
  priceTxt1: {
    fontSize: width * 0.037,
    color: colors.grey,
    paddingVertical: height * 0.005,
    textDecorationLine: 'line-through',
  },
  freeDeleveryTxt: {
    fontSize: width * 0.035,
    color: 'green',
    paddingVertical: height * 0.005,
  },
  totalAmountWrapper: {
    paddingTop: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountPaybleTxt: {
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    fontSize: width * 0.039,
  },
});

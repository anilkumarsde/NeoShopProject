import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import StatusBarCom from '../components/StatusBarCom';
import {colors} from '../utils/colors';
import Detailproductheader from '../components/Detailproductheader';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fonts} from '../utils/fonts';
import Swiper from 'react-native-swiper';
import Commonscreen from './Commonscreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Collapsible from '../components/Colapsible';
import {Colapsible2} from '../components/Colapsible2';
import {addToCart} from '../redux/cartSlice';
import {useDispatch} from 'react-redux';
import TrendingProducts from '../components/TrendingProducts';
import ProductList from '../components/ProductList';

const {height, width} = Dimensions.get('window');

const Productdetail = () => {
  const [itemNumber, setItemNumber] = useState(1);
  const [isvisible, setisvisible] = useState(false);
  const [pincode, setPincode] = useState('12345');
  const [openModal, setOpenModal] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function retunpolicyscreenHandler() {
    navigation.navigate('Returnpolicyscreen');
  }

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
  const {item, searchData} = route.params;
  console.log('Received search data:', searchData);

  return (
    <View style={styles.container}>
      <View>
        <Modal
          visible={isvisible}
          // transparent={true}
          animationType="slide"
          onRequestClose={() => setisvisible(false)}>
          <TouchableOpacity
            onPress={() => setisvisible(false)}
            style={styles.closeModalWrapper}>
            <Text style={styles.closemodelTxt}>X</Text>
          </TouchableOpacity>
          {item.images.length > 1 ? (
            <View style={[styles.modalswiperWrapper]}>
              <Swiper
                dotColor="#ccc"
                removeClippedSubviews={false}
                paginationStyle={{bottom: -1}}
                activeDotColor="#FE9EAC">
                {item.images.map((img, index) => (
                  <TouchableOpacity key={index} activeOpacity={0.6}>
                    <Image source={{uri: img}} style={styles.modalitemImage} />
                  </TouchableOpacity>
                ))}
              </Swiper>
            </View>
          ) : (
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={{uri: item.images[0]}} style={styles.itemImage} />
            </TouchableOpacity>
          )}
        </Modal>
      </View>
      <Modal
        visible={openModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setOpenModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Enter an Indian Pincode</Text>
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                <Ionicons name="close" size={24} color={colors.black} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Enter Pincode"
                value={pincode}
                onChangeText={text => setPincode(text)}
                keyboardType="number-pad"
                maxLength={6}
                style={styles.inputBox}
              />
              <TouchableOpacity
                style={[
                  styles.applyButton,
                  pincode.length === 6 && styles.disabledButton,
                ]}
                disabled={pincode.length < 6}
                onPress={() => setOpenModal(false)}>
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      {/* header */}
      <Detailproductheader title={'Product Detail'} />

      <ScrollView>
        {/* item images */}

        {item.images.length > 1 ? (
          <View style={styles.swiperWrapper}>
            <Swiper
              dotColor="#ccc"
              removeClippedSubviews={false}
              paginationStyle={{bottom: 0}}
              activeDotColor="#FE9EAC">
              {item.images.map((img, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.6}
                  onPress={() => setisvisible(true)}>
                  <Image source={{uri: img}} style={styles.itemImage} />
                </TouchableOpacity>
              ))}
            </Swiper>
          </View>
        ) : (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setisvisible(true)}>
            <Image source={{uri: item.images[0]}} style={styles.itemImage} />
          </TouchableOpacity>
        )}

        {/* item detail */}
        <View style={styles.itemDetailsWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemBrand}>Brand : {item.brand}</Text>
          <Text style={styles.itemPrice}>M.R.P : ${item.price}</Text>
          <Text style={styles.taxtxt}>(incl. of all taxes)</Text>
        </View>
        <Text style={styles.quantityTxt}>QUANTITY</Text>
        <View style={styles.quantityWrapper}>
          <TouchableOpacity style={styles.commonBox} onPress={decrement}>
            <Text>-</Text>
          </TouchableOpacity>
          <View style={styles.commonBox}>
            <Text>{itemNumber}</Text>
          </View>
          <TouchableOpacity style={styles.commonBox} onPress={increment}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deliveryWrapper}>
          <Text style={styles.deliverOptionTxt}>DELIVERY OPTIONS</Text>
          <View style={styles.locationWrapper}>
            <Ionicons name={'location-sharp'} size={width * 0.039} />
            <Text style={styles.deliverydate}>Get it by 12 May - </Text>

            <TouchableOpacity onPress={() => setOpenModal(true)}>
              <Text
                style={[
                  styles.deliverydate,
                  {textDecorationLine: 'underline'},
                ]}>
                {pincode}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.deliveryOfferWrapper}>
          <View style={styles.deliveryOfferHeader}>
            <MaterialCommunityIcons
              name={'truck-delivery-outline'}
              size={width * 0.037}
            />
            <Text style={styles.deliverOfferTxt}>
              Free Shipping For All Orders Above $20
            </Text>
          </View>
          <View style={styles.deliveryOfferHeader}>
            <MaterialCommunityIcons
              name={'find-replace'}
              size={width * 0.036}
            />
            <Text style={styles.deliverOfferTxt}>Easy 15 Days Returns</Text>
            <TouchableOpacity onPress={retunpolicyscreenHandler}>
              <Text
                style={[
                  styles.deliverOfferTxt,
                  {color: colors.headerIconColor},
                ]}>
                Read More...
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Collapsible title={'Specification'} item={item} />
        <Colapsible2 title={'Description'} item={item} />

        <Text style={styles.similarProductText}>Similar Products</Text>

        <ProductList productdata={searchData} />

        {/* <ProductList productdata={item}/> */}
      </ScrollView>
      <View style={styles.addcartWrapper}>
        <TouchableOpacity style={styles.wishListWrapper}>
          <EvilIcons name={'heart'} size={width * 0.079} />
          <Text style={styles.wihslisttxt}>Add to whishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.wishListWrapper,
            {backgroundColor: colors.headerIconColor},
          ]}
          activeOpacity={0.6}
          onPress={() => {
            if (itemNumber > 0) {
              dispatch(addToCart({...item, quantity: itemNumber}));
              setItemNumber(0); // Reset quantity after adding to cart
              console.log('Item added to cart');
            } else {
              console.log('Please select at least 1 item');
            }
          }}>
          <EvilIcons name={'cart'} size={width * 0.079} color={colors.white} />
          <Text style={[styles.addtocartText, {color: colors.white}]}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Productdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,

    // marginBottom: width * 0.1,
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
  swiperWrapper: {
    width: '100%',
    height: height * 0.8,
    // backgroundColor: 'red',
  },
  itemImage: {
    height: height * 0.75,
    width: '100%',
    resizeMode: 'contain',
    marginTop: height * 0.02,
    // backgroundColor:'red'

    // backgroundColor: 'red',
  },
  modalswiperWrapper: {
    width: '100%',
    height: height * 0.79,
    // borderRadius:10,
    // backgroundColor:'red'
  },
  modalitemImage: {
    height: height * 0.7,
    width: '100%',
    resizeMode: 'contain',
  },
  modalItemWrapper: {
    flex: 1,
    // backgroundColor: 'red',
  },
  closeModalWrapper: {
    marginTop: 10,
    width: width * 0.1,
    height: height * 0.05,
    backgroundColor: colors.grey,
    borderRadius: width / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closemodelTxt: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratSemiBold,
  },
  itemDetailsWrapper: {
    backgroundColor: '#f4f2f7',
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.04,
    paddingTop: height * 0.01,
  },
  itemTitle: {
    fontSize: width * 0.045,
    fontFamily: fonts.MontserratSemiBold,
  },
  itemBrand: {
    fontSize: width * 0.042,
    color: colors.grey,
    marginVertical: height * 0.01,
    fontFamily: fonts.MontserratRegular,
  },
  itemPrice: {
    // color:colors.black,
    fontSize: width * 0.039,
    fontFamily: fonts.MontserratRegular,
  },
  taxtxt: {
    fontSize: width * 0.036,
    fontFamily: fonts.MontserratRegular,
    color: colors.grey,
  },
  quantityWrapper: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    // marginBottom: 100,
    gap: width * 0.02,
  },
  commonBox: {
    height: height * 0.04,
    width: width * 0.08,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.01,
  },
  quantityTxt: {
    fontFamily: fonts.MontserratRegular,
    color: colors.black,
    fontSize: width * 0.036,
    paddingLeft: width * 0.04,
    marginVertical: height * 0.02,
  },
  deliveryWrapper: {
    paddingHorizontal: width * 0.04,
    marginBottom: width * 0.02,
    marginTop: width * 0.036,
  },
  deliverOptionTxt: {
    fontSize: width * 0.036,
    color: colors.black,
    fontFamily: fonts.MontserratRegular,
    marginBottom: height * 0.015,
    marginTop: height * 0.01,
  },
  deliverydate: {},
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.01,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.9,
    backgroundColor: colors.white,
    padding: width * 0.02,
    borderRadius: width * 0.02,
    marginBottom: height * 0.02,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.03,
    paddingHorizontal: width * 0.01,
    paddingTop: height * 0.01,
  },
  modalTitle: {
    fontSize: width * 0.045,
    color: colors.black,
    fontFamily: fonts.MontserratSemiBold,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
    paddingHorizontal: width * 0.01,
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
    marginRight: width * 0.02,
    fontSize: width * 0.034,
    fontFamily: fonts.MontserratMedium,
  },
  applyButton: {
    backgroundColor: 'black',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.02,
  },
  disabledButton: {
    backgroundColor: colors.btnColor,
  },
  applyButtonText: {
    color: colors.white,
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.034,
  },
  deliveryOfferWrapper: {
    paddingHorizontal: width * 0.04,
  },
  deliveryOfferHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.01,
    paddingVertical: height * 0.01,
  },
  deliverOfferTxt: {
    fontFamily: fonts.MontserratRegular,
    color: colors.black,
    fontSize: width * 0.036,
  },
  addtocartWrapper: {},
  addcartWrapper: {
    paddingHorizontal: width * 0.02,
    // width:1,
    // backgroundColor:'red',
    borderWidth: 1,
    paddingVertical: height * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wishListWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.1,
    borderColor: colors.headerIconColor,
    width: '47%',
  },
  wihslisttxt: {
    fontFamily: fonts.MontserratRegular,
    fontSize: width * 0.037,
    marginTop: height * 0.01,
  },
  addtocartText: {
    fontSize: width * 0.037,
    fontFamily: fonts.MontserratRegular,
    marginTop: width * 0.01,
  },
  similarProductText: {
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.03,
    fontSize: width * 0.042,
    color: colors.black,
    fontFamily: fonts.MontserratMedium,
  },
});

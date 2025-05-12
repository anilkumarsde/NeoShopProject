import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Headercomponent from '../components/Headercomponent';
import {colors} from '../utils/colors';
import StatusBarCom from '../components/StatusBarCom';
import OfferSlider from '../components/OfferSlider';
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';
import axios from 'axios';
import TrendingProducts from '../components/TrendingProducts';
import Summerspecial from '../components/Summerspecial';
import ScrollingOffer from '../components/ScrollingOffer';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import SaleBanner from '../components/SaleBanner';
import Dealoftheday from '../components/Dealoftheday';
import Watch from '../components/Watch';
import Smartphone from '../components/Smartphone';
import Gadget from '../components/Gadget';
import Bike from '../components/Bike';
import Car from '../components/Car';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const [productdata, setproductdata] = useState([]);
  const [smartPhonedata, setsmartPhonedata] = useState([]);
  const [watchData, setwatchData] = useState([]);
  const [womenbag, setwomenbag] = useState([]);
  const [summerData, setSummerData] = useState([]);
  const [loding, setLoding] = useState(false);
  const navigation = useNavigation();

  const OpenDrawer = () => {
    console.log('dhdhfs');
    navigation.openDrawer();
  };

  //   api call for product data
  // useEffect(() => {
  //   const getAllData = async () => {
  //     try {
  //       setLoding(true);
  //       // Fetch all data in parallel
  //       const [smartphoneRes, watchRes, bagRes] = await Promise.all([
  //         axios.get('https://dummyjson.com/products/category/smartphones'),
  //         axios.get('https://dummyjson.com/products/category/mens-watches'),
  //         axios.get('https://dummyjson.com/products/category/womens-bags'),
  //       ]);

  //       // Update individual categories
  //       setsmartPhonedata(smartphoneRes.data.products);
  //       setwatchData(watchRes.data.products);
  //       setwomenbag(bagRes.data.products);

  //       // Merge them into summerData
  //       const combined = [
  //         ...smartphoneRes.data.products,
  //         ...watchRes.data.products,
  //         ...bagRes.data.products,
  //       ];
  //       setSummerData(combined);

  //       // console.log('summerData:', combined);
  //     } catch (error) {
  //       console.log('something went wrong in summer data fetch', error);
  //     } finally {
  //       setLoding(false);
  //     }
  //   };

  //   const getProductData = async () => {
  //     try {
  //       setLoding(true);
  //       const response = await axios.get('https://dummyjson.com/products');
  //       setproductdata(response.data.products);
  //       // console.log('all product data fetched');
  //     } catch (error) {
  //       console.log('something went wrong in product data fetch', error);
  //     } finally {
  //       setLoding(true);
  //     }
  //   };

  //   getProductData();
  //   getAllData();
  // }, []);

  return (
    <View style={styles.container}>
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      <ScrollingOffer />

      {/* header */}
      <Headercomponent
        onpress={OpenDrawer}
        menu={
          <Entypo
            name="menu"
            size={width * 0.09}
            color={colors.headerIconColor}
          />
        }
        title={'NewShop'}
        search={
          <EvilIcons
            name={'search'}
            size={width * 0.09}
            color={colors.headerIconColor}
          />
        }
        cart={
          <EvilIcons
            name="cart"
            size={width * 0.09}
            color={colors.headerIconColor}
          />
        }
        profile={require('../utils/images/profile.png')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <OfferSlider />

        <SaleBanner />

        <Dealoftheday />

        <Watch />


        <Gadget/>

        {/*Top  Women shoes  */}

        {/* <Banner /> */}

        <Smartphone/>

        <Bike/>

        <Car/>


        {/*summer special banner*/}

        <Summerspecial />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingBottom: height * 0.02,
    // paddingHorizontal: width * 0.05,
  },
  loderWrapper: {
    height: height * 0.4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red',
    marginTop: height * 0.03,
  },
});

import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import StatusBarCom from '../components/StatusBarCom';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Retunpolicyscreen = () => {
  const navigation = useNavigation();
  function movetoprescreenHandler() {
    navigation.goBack();
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      {/* header  */}
      <TouchableOpacity
        style={styles.headerWrapper}
        onPress={movetoprescreenHandler}>
        <Ionicons name="chevron-back-outline" size={width * 0.06} />
      </TouchableOpacity>
      {/* TitleWrapper */}
      <View style={styles.TitleWrapper}>
        <Text style={styles.title}>Return & Exchange Policy</Text>
        <Text style={styles.titleDescription}>
          At NewShop, we are committed to providing high-quality products and
          exceptional customer service. If you are not completely satisfied with
          your purchase, we offer a simple and hassle-free return process.
        </Text>
      </View>

      {/* main Wrapper */}
      <View style={styles.mainWrapper}>
        <Text style={styles.commantitle}>Eligibility for Returns</Text>
        <View style={styles.commonwrapper}>
          <Text style={styles.commonTxt}>
            Items must be returned within 15 days of the purchase date.
          </Text>
          <Text style={styles.commonTxt}>
            The product must be unused, unwashed, and in the same condition as
            received.
          </Text>
          <Text style={styles.commonTxt}>
            The product must be unused, unwashed, and in the same condition as
            received.
          </Text>
          <Text style={styles.commonTxt}>
            Certain items, such as personal care products, perishable goods, and
            customized items, may not be eligible for return.
          </Text>
        </View>
        <Text style={styles.commantitle}>Return Process</Text>
        <View style={styles.commonwrapper}>
          <Text style={styles.commonTxt}>
            1. Initiate a Return: Contact our support team or use the Return
            Request option in the app.
          </Text>
          <Text style={styles.commonTxt}>
            2.Pack Your Item: Securely pack the item in its original packaging.
          </Text>
          <Text style={styles.commonTxt}>
            3. Ship the Item: Use the provided return label or arrange for
            pickup if available.
          </Text>
          <Text style={styles.commonTxt}>
            4.Receive Your Refund: Once we receive and inspect the item, your
            refund will be processed within 5-7 business days
          </Text>
        </View>
        <Text style={styles.commantitle}>Refund Options</Text>
        <Text style={styles.commonsubtitle}>
          You can choose to receive your refund as:
        </Text>
        <View style={styles.commonwrapper}>
          <Text style={styles.commonTxt}>
            1. Store Credit for future purchases.
          </Text>
          <Text style={styles.commonTxt}>
            2. Original payment method (credit card, debit card, or digital
            wallet).
          </Text>
        </View>
        <Text style={styles.commantitle}>Exchanges</Text>
        <View style={styles.commonwrapper}>
          <Text style={styles.commonTxt}>
            If you wish to exchange an item, please follow the same return
            process and place a new order for the desired product.
          </Text>
        </View>
        <Text style={styles.commantitle}>Damaged or Defective Items</Text>
        <View style={styles.commonwrapper}>
          <Text style={styles.commonTxt}>
            If your item arrives damaged or defective, please reach out to us
            within 48 hours of delivery for a replacement or full refund.
          </Text>
        </View>
        <Text style={styles.commantitle}>Contact Us</Text>
        <View style={styles.commonwrapper}>
          <Text style={styles.commonTxt}>
            For any return-related queries, you can reach us at
            support@newshop.com or through the Help Center in the app.
          </Text>
          <Text style={styles.commonTxt}>
            Thank you for shopping with NewShop!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Retunpolicyscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    backgroundColor: colors.backgroundColor,
  },
  TitleWrapper: {
    marginTop: height * 0.01,
    //  backgroundColor:'red'
  },
  title: {
    fontSize: width * 0.045,
    color: colors.black,
    fontFamily: fonts.MontserratBold,
    marginBottom: height * 0.02,
  },
  titleDescription: {
    fontSize: width * 0.036,
    color: colors.black,
    fontFamily: fonts.MontserratRegular,
  },
  commantitle: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
  },
  mainWrapper: {
    marginTop: height * 0.01,
  },
  commonwrapper: {
    paddingLeft: width * 0.02,
    marginTop: height * 0.01,
    width: '100%',
  },
  commonTxt: {
    fontSize: width * 0.036,
    color: colors.black,
    fontFamily: fonts.MontserratRegular,
    marginBottom: height * 0.01,
  },
  messageWrapper: {
    flexDirection: 'row',
    width: '100%',
    //  alignItems: 'center',
  },
  commonsubtitle: {
    fontSize: width * 0.039,
    color: colors.black,
    fontFamily: fonts.MontserratMedium,
  },
  headerWrapper: {
    // flexDirection:'row',
    // alignItems:'center',
    // width:'70%',
    // justifyContent:'space-between',
    marginVertical: height * 0.001,
    // backgroundColor:'red',
  },
});

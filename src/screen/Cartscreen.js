import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import StatusBarCom from '../components/StatusBarCom';
import Detailproductheader from '../components/Detailproductheader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Orderstatus from '../components/Orderstatus';
import {useSelector} from 'react-redux';
import CartData from '../components/CartData';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const Cartscreen = ({setItemNumber, itemNumber}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const cartItems = useSelector(state => state.cart.items);

  const navigation = useNavigation();

  function addressScreenHandler() {
    if (currentStep === 0) {
      setCurrentStep(1);
      setMaxStep(1);
      navigation.navigate('Address');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      <Detailproductheader
        title={'Shopping Cart'}
        icon={
          <AntDesign
            name="hearto"
            color={colors.headerIconColor}
            size={width * 0.065}
          />
        }
      />
      <ScrollView>
        <Orderstatus
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          maxStep={maxStep}
        />
        <CartData setItemNumber={setItemNumber} itemNumber={itemNumber} />
      </ScrollView>
      <View style={styles.placeholderbtnWrapper}>
        <TouchableOpacity
          style={styles.placeOrderBtn}
          activeOpacity={0.7}
          onPress={addressScreenHandler}>
          <Text style={styles.placeOrderTxt}>Place Order</Text>
        </TouchableOpacity>
      </View>

      {/* <Text>Cartscreen</Text> */}
    </View>
  );
};

export default Cartscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  placeOrderBtn: {
    backgroundColor: colors.headerIconColor,
    marginHorizontal: width * 0.04,
    marginTop: height * 0.02,
    // marginVertical: height * 0.01,
    paddingVertical: height * 0.02,
    alignItems: 'center',
    borderRadius: width * 0.1,
    justifyContent: 'center',
    // alignItems:'center'
  },
  placeOrderTxt: {
    color: colors.white,
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.037,
  },
  placeholderbtnWrapper: {
    height: height * 0.1,
    backgroundColor: colors.white,
    // justifyContent:'center',
    // alignItems:'center'
  },
});

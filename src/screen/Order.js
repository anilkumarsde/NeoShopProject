import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import StatusBarCom from '../components/StatusBarCom';
import Detailproductheader from '../components/Detailproductheader';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';

const {heigh, width} = Dimensions.get('window');

const Order = () => {
  const navigation = useNavigation();
  function homescreenHandler() {
    navigation.navigate('Home');
    console.log('moved to homescreen');
  }
  return (
    <View style={styles.container}>
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />

      {/* header */}
      <Detailproductheader title={'My Order'} />

      <View style={styles.mainContainer}>
        <Text style={styles.messageTitle}>No Orders Found</Text>
        <Text
          style={[
            styles.messagesubTitle,
            {fontFamily: fonts.MontserratRegular},
          ]}>
          we have no order records for this account
        </Text>
        <TouchableOpacity
          style={styles.startshopinBtn}
          activeOpacity={0.7}
          onPress={homescreenHandler}>
          <Text style={styles.btntext}>Start Shoping</Text>
        </TouchableOpacity>
      </View>

      {/*  */}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: width * 0.04,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startshopinBtn: {
    backgroundColor: colors.headerIconColor,
    borderRadius: width * 0.1,
    marginTop: '7%',
  },
  btntext: {
    color: colors.white,
    fontFamily: fonts.MontserratRegular,
    paddingVertical: '3%',
    paddingHorizontal: width * 0.25,
  },
  messageTitle: {
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    fontSize: width * 0.036,
  },
  messagesubTitle: {},
});

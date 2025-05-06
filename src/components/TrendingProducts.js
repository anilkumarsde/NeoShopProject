import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const TrendingProducts = () => {
  const navigation = useNavigation();

  const gotocommonScreen = () => {
    // console.log('moved to common screen');
    navigation.navigate('Commonscreen', {searchQuery: 'sports-accessories'});
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftBox}>
        <Text style={styles.Title}>Deal's of the day</Text>
        <Text style={[styles.Title, {fontSize: width * 0.032}]}>
          Sports-accessories{' '}
        </Text>
      </View>
      <TouchableOpacity style={styles.viewAllbtn} onPress={gotocommonScreen}>
        <Text style={styles.viewAllTxt}>View all</Text>
        <FontAwesome name={'long-arrow-right'} color={colors.white} size={16} />
      </TouchableOpacity>

      {/*  */}
    </View>
  );
};

export default TrendingProducts;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.04,
    backgroundColor: colors.trendingbanner,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.024,
    borderRadius: width * 0.02,
    // marginTop: width * 0.02,
    marginTop: height * 0.032,
  },
  leftBox: {
    paddingLeft: width * 0.02,
  },
  Title: {
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.04,
    color: colors.white,
    marginBottom: height * 0.0012,
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
  },
  date: {
    color: colors.white,
    fontSize: width * 0.039,
    fontFamily: fonts.MontserratRegular,
  },
  viewAllbtn: {
    borderWidth: width * 0.0014,
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.white,
    borderRadius: width * 0.012,
    gap: width * 0.014,
  },
  viewAllTxt: {
    fontSize: width * 0.03,
    color: colors.white,
    fontFamily: fonts.MontserratRegular,
    paddingHorizontal: width * 0.01,
  },
});

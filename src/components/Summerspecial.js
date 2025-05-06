import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

const Summerspecial = () => {
  const [showSummersale, setshowsummersale] = useState(true);
  const navigation = useNavigation();
  const gotoCommonscreen = () => {
    console.log('moved to common screen', showSummersale);
    navigation.navigate('Commonscreen', {
      searchQuery: "motorcycle"
    });
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../utils/images/summerbanner.png')}
        style={styles.bannerimg}
      />
      <View style={styles.infowrapper}>
        <View style={styles.leftWrapper}>
          <Text style={styles.title}>New Arrivals </Text>
          <Text style={styles.subtite}>Summer’ 25 Collections</Text>
        </View>
        <TouchableOpacity style={styles.righWrapper} onPress={gotoCommonscreen}>
          <Text style={styles.viewAlltxt}>View all</Text>
          <FontAwesome name="long-arrow-right" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>
      {/*  */}
    </View>
  );
};

export default Summerspecial;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.04,
    marginTop: height * 0.03,
    backgroundColor: colors.white,
    // marginBottom: height * 0.02,
    borderBottomEndRadius: width * 0.02,
  },
  bannerimg: {
    width: '100%',
    height: height * 0.25,
    resizeMode: 'stretch',
    borderTopLeftRadius: width * 0.02,
    borderTopRightRadius: width * 0.02,
    marginBottom: height * 0.01,
  },
  infowrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.02,
    paddingBottom: height * 0.02,
  },
  leftWrapper: {},
  title: {
    fontSize: width * 0.044,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    // marginBottom:height*0.01
  },
  subtite: {
    fontFamily: fonts.MontserratRegular,
    color: colors.black,
    fontSize: width * 0.039,
  },
  righWrapper: {
    backgroundColor: colors.btnColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.02,
    paddingVertical: height * 0.004,
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.01,
  },
  viewAlltxt: {
    fontFamily: fonts.MontserratBold,
    color: colors.white,
    fontSize: width * 0.03,
  },
});

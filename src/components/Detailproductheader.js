import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const Detailproductheader = () => {
  const navigation = useNavigation();
  function gobackScreenHandler() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={gobackScreenHandler}>
        <MaterialIcons name="arrow-back-ios" size={width * 0.05} />
      </TouchableOpacity>
      <Text style={styles.title}>Detail Product</Text>
      <TouchableOpacity>
        <EvilIcons name="cart" size={width * 0.065} />
      </TouchableOpacity>
      {/*  */}
    </View>
  );
};

export default Detailproductheader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height * 0.01,
    paddingHorizontal: width * 0.04,

  },
  title: {
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    fontSize: width * 0.039,
  },
});

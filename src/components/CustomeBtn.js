import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
const {height, width} = Dimensions.get('window');

const CustomeBtn = ({btnTitle,onPress
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.commonBtn} activeOpacity={0.4} onPress={onPress}>
        <Text style={styles.btnTitleTxt}>{btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomeBtn;

const styles = StyleSheet.create({
  container: {
    marginTop: width * 0.14,
  },
  commonBtn: {
    backgroundColor: colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderRadius: width * 0.02,
  },
  btnTitleTxt: {
    fontSize: width * 0.05,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.backgroundColor,
  },
});

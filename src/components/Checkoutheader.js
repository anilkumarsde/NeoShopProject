import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';

const {height, width} = Dimensions.get('window');

const Checkoutheader = ({icon, title}) => {
  return (
    <View style={styles.container}>
      <Text>{icon}</Text>
      <Text style={styles.titleTxt}>{title}</Text>
    </View>
  );
};

export default Checkoutheader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
    // width:'50%',
    // justifyContent:'space-between'
  },
  titleTxt: {
    textAlign: 'center',
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
    width: '90%',
    // backgroundColor: 'red',
  },
});

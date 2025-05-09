// Colapsible.js

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import ColapsibleData from './ColapsibleData';

const {height, width} = Dimensions.get('window');

export const Colapsible2 = ({title, item}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  console.log('tirhd', title);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapsed} style={styles.header2}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
          <Icon
            name={isCollapsed ? 'chevron-down' : 'chevron-up'}
            size={width * 0.045}
            color={colors.black}
          />
        </View>
        <Collapsible collapsed={isCollapsed}>
          <View style={styles.content}>
            <Text style={styles.commonTxtstyle}>{item.description}</Text>
          </View>
        </Collapsible>
        {/*  */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.03,
    // padding: 20,
    justifyContent: 'center',
    marginBottom: height * 0.03,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 5,
  },
  header2: {
    // backgroundColor: '#007bff',
    borderWidth: 1,
    paddingVertical: height * 0.02,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.035,
  },
  headerText: {
    color: colors.black,
    fontFamily: fonts.MontserratSemiBold,
    fontSize: width * 0.04,
    marginBottom: height * 0.001,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: width * 0.038,
    color: colors.black,
  },
  commonTxtstyle: {
    fontSize: width * 0.036,
    color: colors.black,
    fontFamily: fonts.MontserratRegular,
    paddingBottom: height * 0.003,
  },
});

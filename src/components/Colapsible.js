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

export default function CustomCollapsible({title, item}) {
  //   console.log(item, 'item recevied');

  const [isCollapsed, setIsCollapsed] = useState(true);

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
            <Text style={[styles.commonTxtstyle, {width: '30%'}]}>
              Category
            </Text>
            <Text style={[styles.commonTxtstyle, {width: '70%'}]}>
              {' '}
              :- {item?.category}
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.commonTxtstyle, {width: '30%'}]}>Brand</Text>
            <Text style={[styles.commonTxtstyle, {width: '70%'}]}>
              :- {item?.brand}
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.commonTxtstyle, {width: '30%'}]}>Modal</Text>
            <Text style={[styles.commonTxtstyle, {width: '70%'}]}>
              :- {item?.sku}
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.commonTxtstyle, {width: '30%'}]}>Weight</Text>
            <Text style={[styles.commonTxtstyle, {width: '70%'}]}>
              :- {item?.weight} gm
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.commonTxtstyle, {width: '30%'}]}>Width</Text>
            <Text style={[styles.commonTxtstyle, {width: '70%'}]}>
              :- {item?.dimensions?.width}cm
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.commonTxtstyle, {width: '30%'}]}>Height</Text>
            <Text style={[styles.commonTxtstyle, {width: '70%'}]}>
              :- {item?.dimensions?.height}cm
            </Text>
          </View>
        </Collapsible>
        {/*  */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.03,
    // padding: 20,
    justifyContent: 'center',
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
  },
});

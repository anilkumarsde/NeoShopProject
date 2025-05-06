import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import StatusBarCom from '../components/StatusBarCom';
import {colors} from '../utils/colors';
import Searchcomponent from '../components/Searchcomponent';
import Headercomponent from '../components/Headercomponent';
import {FlatList} from 'react-native-gesture-handler';
import {Rating} from 'react-native-ratings';
import {fonts} from '../utils/fonts';
import CategoryCom from '../components/CategoryCom';

const {height, width} = Dimensions.get('window');

const Searchscreenproduct = () => {
  // const [searchQuery, setSeachQuery] = useState([]);

  return (
    <View style={styles.container}>
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      <Searchcomponent />
    </View>
  );
};

export default Searchscreenproduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  searchedDataWrapper: {
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.02,
    // marginBottom:height*0.2
    // height:'100%'
  },
  itemListWraperr: {
    width: width * 0.44,
    marginRight: width * 0.04,
    backgroundColor: colors.white,
    borderRadius: width * 0.02,
    marginBottom: height * 0.02,
  },
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  itemImg: {
    height: height * 0.21,
    width: width * 0.46,
    resizeMode: 'contain',
    // backgroundColor: 'blue',
  },
  itemTitle: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
    // marginBottom: height * 0.01,
  },
  description: {
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.034,
    color: colors.black,
    paddingVertical: height * 0.01,
  },
  price: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
  },
  infoContainer: {
    paddingHorizontal: width * 0.022,
  },
  ratingStyle: {
    alignSelf: 'flex-start',
    paddingVertical: height * 0.004,
  },
});

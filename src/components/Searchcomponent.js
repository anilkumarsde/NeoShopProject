import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const Searchcomponent = () => {
  const [searchQuery, setSeachQuery] = useState('');
  const navigation = useNavigation();

  const handleSeachdata = searchQuery => {
    console.log('function call and moved to search product screen ');
    navigation.replace('Commonscreen', {searchQuery});
    // navigation.navigate('Searchscreen', {searchQuery});
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity>
          <Image
            source={require('../utils/images/searchicon.png')}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search any Product.."
          style={styles.textiput}
          placeholderTextColor={colors.search}
          value={searchQuery}
          onChangeText={text => setSeachQuery(text)}
          onSubmitEditing={() => handleSeachdata(searchQuery)}
        />
      </View>
      <TouchableOpacity TouchableOpacity style={styles.rightWrapper}>
        <Image
          source={require('../utils/images/voiceicon.png')}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Searchcomponent;

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.001,
    elevation: 0.2,
    backgroundColor: colors.white,
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.02,
    marginHorizontal: width * 0.04,
  },
  iconStyle: {
    height: height * 0.024,
    width: width * 0.07,
    resizeMode: 'contain',
    color: colors.search,
  },
  textiput: {
    width: '83%',
    color: colors.search,
    fontFamily: fonts.MontserratMedium,
    paddingTop: height * 0.02,
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'center'
    // gap: 10,
    // backgroundColor: 'red',
  },
  rightWrapper: {},
});

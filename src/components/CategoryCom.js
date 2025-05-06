import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import categoryImages from '../utils/categoryImage';
const {height, width} = Dimensions.get('window');

const CategoryCom = () => {
  const navigation = useNavigation();
  const [categoryData, setCategoryData] = useState([]);

  const getAllcategory = () => {
    console.log('all product got');
    navigation.navigate('Category');
  };

  // api call for category data
  useEffect(() => {
    const getCategoryData = async () => {
      try {
        const response = await axios.get(
          'https://dummyjson.com/products/categories',
        );
        setCategoryData(response.data);
        console.log('data fetched');
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    };
    getCategoryData();
  }, []);

  // rendering function for list

  const renderItem = ({item}) => {
    const image = categoryImages[item.slug];
    return (
      <View style={styles.listitem}>
        <Image source={image} style={styles.categoryImg} />
        <Text style={styles.categoryName}>{item?.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* headerWrapper */}
      <View style={styles.headerWrapper}>
        {/* leftWraper */}
        <TouchableOpacity style={styles.leftWrapper} onPress={getAllcategory}>
          <Text style={styles.shopeBytxt}>Shope by</Text>
          <Text style={styles.categoryTxt}>Category</Text>
        </TouchableOpacity>
        {/* RightWrapper */}
        <View style={styles.rightWrapper}>
          {/* sortWrapper */}
          <View style={styles.sortWrapper}>
            <Text style={styles.sortorfilterTxt}>Sort</Text>
            <TouchableOpacity>
              <Image
                source={require('../utils/images/sorticon.png')}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
          {/* Filter wrapper */}
          <View style={styles.filterWrapper}>
            <Text style={styles.sortorfilterTxt}>Filter</Text>
            <TouchableOpacity>
              <Image
                source={require('../utils/images/filtericon.png')}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* categoryData */}

      <View style={styles.categoryDataWrapper}>
        <FlatList
          data={categoryData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default CategoryCom;

const styles = StyleSheet.create({
  container: {
    marginVertical: height * 0.01,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftWrapper: {},
  allFeaturedTitle: {
    fontSize: width * 0.055,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: width * 0.04,
  },
  sortWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.01,
    backgroundColor: colors.white,
    paddingVertical: height * 0.003,
    paddingHorizontal: width * 0.024,
    borderRadius: width * 0.012,
    elevation: 0.3,
  },
  sortorfilterTxt: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratRegular,
    color: colors.black,
  },
  iconStyle: {
    height: height * 0.023,
    width: width * 0.045,
    resizeMode: 'contain',
  },
  filterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.01,
    backgroundColor: colors.white,
    paddingVertical: height * 0.003,
    paddingHorizontal: width * 0.024,
    borderRadius: width * 0.012,
    elevation: 0.3,
  },
  categoryDataWrapper: {
    marginVertical: height * 0.02,
    backgroundColor: colors.white,
    borderBottomLeftRadius: width * 0.02,
    borderTopLeftRadius: width * 0.02,
    // marginLeft: width * 0.04,
  },
  listitem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.01,
    paddingRight: width * 0.02,
  },
  categoryImg: {
    height: height * 0.1,
    width: width * 0.2,
    borderRadius: width / 2,
  },
  categoryName: {
    fontSize: width * 0.036,
    fontFamily: fonts.MontserratRegular,
    color: colors.categoryNameColor,
    marginTop: width * 0.015,
  },
  imgTitlewrapper: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  shopeBytxt: {
    fontSize: width * 0.03,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
  },
  categoryTxt: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: width * 0.034,
    color: colors.black,
  },
});

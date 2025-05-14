import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {colors} from '../utils/colors';
import StatusBarCom from '../components/StatusBarCom';
import Headercomponent from '../components/Headercomponent';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import categoriesData from '../utils/categoriesData';
import {fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');

const Shopbycategory = () => {
  const navigation = useNavigation();
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = id => {
    setExpandedCategory(prev => (prev === id ? null : id));
  };

  const handleSubcategoryPress = subcategory => {
    navigation.navigate('Commonscreen', {searchQuery: subcategory});
  };

  const goback = () => {
    navigation.goBack();
  };

  const renderCategoryItem = ({item}) => (
    <View style={styles.categoryContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.categoryHeader}
        onPress={() => toggleCategory(item.id)}>
        <ImageBackground
          source={item.imageUrl}
          style={styles.categoryImage}
          imageStyle={styles.backgroundImage}>
          <View style={styles.categoryTitleWrapper}>
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Entypo
              name={
                expandedCategory === item.id ? 'chevron-up' : 'chevron-down'
              }
              size={width * 0.05}
              color={colors.headerIconColor}
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
      {expandedCategory === item.id && (
        <View style={styles.subcategoryContainer}>
          {item.subcategories.map((sub, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSubcategoryPress(sub)}>
              <Text style={styles.subcategoryText}>{sub}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      <Headercomponent
        onpress={goback}
        menu={
          <Entypo
            name="chevron-left"
            size={width * 0.08}
            color={colors.headerIconColor}
          />
        }
        title={'Category'}
        search={
          <EvilIcons
            name={'search'}
            size={width * 0.08}
            color={colors.headerIconColor}
          />
        }
        cart={
          <EvilIcons
            name="cart"
            size={width * 0.08}
            color={colors.headerIconColor}
          />
        }
        profile={require('../utils/images/profile.png')}
      />
      <FlatList
        data={categoriesData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCategoryItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Shopbycategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  listContainer: {
    paddingHorizontal: width * 0.04,
  },
  categoryContainer: {
    marginBottom: height * 0.02,
    backgroundColor: colors.white,
    borderRadius: width * 0.03,
    // overflow: 'hidden',
  },
  categoryHeader: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingHorizontal: width * 0.04,
    // paddingVertical: height * 0.02,
  },
  categoryImage: {
    // width: width - width * 0.14,
    width: '100%',
    height: height * 0.25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backgroundImage: {
    borderRadius: width * 0.03,
  },
  categoryTitle: {
    fontSize: width * 0.05,
    fontFamily: fonts.MontserratBold,
    color: colors.white,
    textAlign: 'center',
  },
  subcategoryContainer: {
    paddingHorizontal: width * 0.07,
    paddingVertical: height * 0.01,
  },
  subcategoryText: {
    fontSize: width * 0.038,
    fontFamily: fonts.MontserratMedium,
    color: colors.subtextColor,
    marginVertical: height * 0.007,
  },
  categoryTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width * 0.1,
  },
});

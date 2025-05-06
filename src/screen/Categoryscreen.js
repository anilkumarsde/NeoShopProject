import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../utils/colors';
import StatusBarCom from '../components/StatusBarCom';
import axios from 'axios';
import categoryImages from '../utils/categoryImage';
import {fonts} from '../utils/fonts';
const {height, width} = Dimensions.get('window');

const Categoryscreen = () => {
  const [categoryData, setcategoryData] = useState([]);

  useEffect(() => {
    const fetchcategoryData = async () => {
      try {
        const response = await axios.get(
          'https://dummyjson.com/products/categories',
        );
        setcategoryData(response.data);
        console.log('Category data Fetched');
      } catch (error) {
        console.log('something went wrong', error);
      }
    };

    fetchcategoryData();
  }, []);

  const renderItem = ({item}) => {
    const image = categoryImages[item.slug];
    const name = item.name.replace(/\s/g, '');

    const verticalLimit = 8;

    const verticalChars = name.slice(0, verticalLimit).trim().split('');
    const remainingChars =
      name.length > verticalLimit
        ? name.slice(verticalLimit).trim().split('')
        : [];

    return (
      <View style={styles.categorylistWrapper}>
        <TouchableOpacity activeOpacity={0.6}>
          <ImageBackground source={image} style={styles.backgroundImg}>
            <View style={styles.textWrapper}>
              {/* Stack vertically first 6 characters */}
              {verticalChars.map((char, index) => (
                <Text key={`v-${index}`} style={styles.verticalChar}>
                  {char.toUpperCase()}
                </Text>
              ))}

              {/* Horizontally align remaining characters under the vertical text */}
              {remainingChars.length > 0 && (
                <View style={styles.horizontalWrapper}>
                  {remainingChars.map((char, index) => (
                    <Text key={`h-${index}`} style={styles.horizontalChar}>
                      {char.toUpperCase()}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* statusBar component */}
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      <FlatList
        data={categoryData}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default Categoryscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: width * 0.04,
  },
  categorylistWrapper: {
    width: width * 0.42,
    height: height * 0.3,
    margin: width * 0.02,
    borderRadius: 10,
    overflow: 'hidden',
  },
  backgroundImg: {
    height: '100%',
    width: '100%',
  },
  categoryName: {
    width: 10,
    color: 'red',
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  verticalChar: {
    color: colors.btnColor,
    fontSize: width * 0.032,
    fontWeight: 'bold',
    lineHeight: 24,
    alignSelf: 'flex-start',
  },

  horizontalWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  horizontalChar: {
    color: colors.btnColor, // Text color
    fontSize: width * 0.032,
    fontWeight: 'bold',
    paddingRight: width * 0.022,
    // paddingHorizontal: width * 0.012,
  },
});

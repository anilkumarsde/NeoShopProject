import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FantasticFind} from '../utils/FantasticFind';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const {width, height} = Dimensions.get('window');

const FantasticFindComponent = () => {
  const navigation = useNavigation();

  // Function to navigate based on ID
  const goToCommonScreen = id => {
    let searchQuery = '';
    switch (id) {
      case 1:
        searchQuery = 'mens-shirts';
        break;
      case 2:
        searchQuery = 'mens-shoes';
        break;
      case 3:
        searchQuery = 'sunglasses';
        break;
      case 4:
        searchQuery = 'womens-dresses';
        break;
      case 5:
        searchQuery = 'womens-watches';
        break;
      default:
        searchQuery = 'products';
    }
    navigation.navigate('Commonscreen', {searchQuery});
  };

  return (
    <View style={styles.container}>
      {/* Section Title */}
      <Text style={styles.title}>Fantastic Finds</Text>

      {/* Horizontal FlatList */}
      <FlatList
        data={FantasticFind}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.card}
            onPress={() => goToCommonScreen(item.id)}>
            <ImageBackground source={item.image} style={styles.image}>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FantasticFindComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: height * 0.02,
    paddingHorizontal: width * 0.04,
  },
  title: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratBold,
    color: colors.headerIconColor,
    marginBottom: height * 0.01,
  },
  card: {
    width: width * 0.4,
    height: height * 0.3,
    marginRight: width * 0.03,
    borderRadius: width * 0.02,
    overflow: 'hidden',
    // elevation: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // justifyContent:'flex-end',
    // paddingBottom:10
  },
  itemTitle: {
    // alignSelf:'baseline's
    paddingTop: height * 0.01,
    paddingLeft: width * 0.03,
    color: colors.headerIconColor,
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.034,
  },
});

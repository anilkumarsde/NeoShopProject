import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ElectronicsData} from '../utils/ElectronicsData';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const {width, height} = Dimensions.get('window');

const ElectronicsList = () => {
  const navigation = useNavigation();

  // Function to navigate based on ID
  const goToCommonScreen = id => {
    let searchQuery = '';
    switch (id) {
      case 1:
        searchQuery = 'laptops';
        break;
      case 2:
        searchQuery = 'mobile-accessories';
        break;
      case 3:
        searchQuery = 'tablets';
        break;
      case 4:
        searchQuery = 'smartphones';
        break;
      case 5:
        searchQuery = 'televisions';
        break;
      case 6:
        searchQuery = 'speakers';
        break;
      default:
        searchQuery = 'electronics';
    }
    navigation.navigate('Commonscreen', {searchQuery});
  };

  return (
    <View style={styles.container}>
      {/* Section Title */}
      <Text style={styles.title}>Electronics</Text>

      {/* Horizontal FlatList */}
      <FlatList
        data={ElectronicsData}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => goToCommonScreen(item.id)}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ElectronicsList;

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
  },
});

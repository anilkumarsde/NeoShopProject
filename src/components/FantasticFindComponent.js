import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FantasticFind} from '../utils/FantasticFind';
import {colors} from '../utils/colors';

const {width, height} = Dimensions.get('window');

const FantasticFindComponent = () => {
  const navigation = useNavigation();

  // Function to navigate based on ID
  const goToCommonScreen = (id) => {
    let searchQuery = '';
    switch (id) {
      case 1:
        searchQuery = 'mens-shirts';
        break;
      case 2:
        searchQuery = 'men-shoes';
        break;
      case 3:
        searchQuery = 'sunglasses';
        break;
      case 4:
        searchQuery = 'women-dress';
        break;
      case 5:
        searchQuery = 'ipad';
        break;
      default:
        searchQuery = 'products';
    }
    navigation.navigate('Commonscreen', {searchQuery});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={FantasticFind}
        keyExtractor={(item) => item.id.toString()}
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

export default FantasticFindComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: height * 0.02,
  },
  card: {
    width: width * 0.4,
    height: height * 0.25,
    marginHorizontal: width * 0.02,
    borderRadius: width * 0.02,
    overflow: 'hidden',
    elevation: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

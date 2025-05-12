import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StatusBarCom from '../components/StatusBarCom';
import {colors} from '../utils/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import RenderItem from '../components/RenderItem';
import Headercomponent from '../components/Headercomponent';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScrollingOffer from '../components/ScrollingOffer';
import {fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');

const Commonscreen = () => {
  const route = useRoute();
  const {searchQuery} = route.params;
  const navigation = useNavigation();

  const [searchData, setsearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const sortOptions = ['Price: Low to High', 'Price: High to Low'];

  // function for sorting data
  useEffect(() => {
    const getSortdata = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://dummyjson.com/products/category/${searchQuery}`,
        );
        let products = response.data.products;

        if (selectedOption === 'asc') {
          products.sort((a, b) => a.price - b.price);
        } else if (selectedOption === 'desc') {
          products.sort((a, b) => b.price - a.price);
        }

        setsearchData(products);
        console.log('data sorted manually by price');
      } catch (error) {
        console.log('some went wrong', error);
      } finally {
        setLoading(false);
      }
    };

    getSortdata();
  }, [selectedOption]);

  const handleSortOption = index => {
    const o = index === 0 ? 'asc' : 'desc';
    setSelectedOption(o);
    setModalVisible(false);

    // console.log(selectedOption);
  };

  // serch data
  useEffect(() => {
    const getSearchedData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://dummyjson.com/products/category/${searchQuery}`,
        );
        setsearchData(response.data.products);
      } catch (error) {
        console.log('something went wrong', error);
      } finally {
        setLoading(false);
      }
    };

    getSearchedData();
  }, []);

  const previousScreenHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(true)}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Sort By</Text>
            {sortOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.option}
                onPress={() => handleSortOption(index)}>
                <Text style={styles.optionTxt}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
      {/* status bar */}
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />

      {/* scroling offer */}
      <ScrollingOffer />

      {/* header component */}
      <Headercomponent
        onpress={previousScreenHandler}
        menu={
          <Entypo
            name="chevron-left"
            size={width * 0.09}
            color={colors.headerIconColor}
          />
        }
        title={'NewShop'}
        search={
          <EvilIcons
            name={'search'}
            size={width * 0.09}
            color={colors.headerIconColor}
          />
        }
        cart={
          <EvilIcons
            name="cart"
            size={width * 0.09}
            color={colors.headerIconColor}
          />
        }
        profile={require('../utils/images/profile.png')}
      />

      {loading ? (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" color={colors.black} />
        </View>
      ) : (
        <View style={styles.serachProductWrapper}>
          <FlatList
            data={searchData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <RenderItem item={item} searchData={searchData} />}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      <View style={styles.shortFilterWrapper}>
        <TouchableOpacity
          style={styles.sortWrapper}
          onPress={() => setModalVisible(true)}>
          <Fontisto
            name="arrow-swap"
            size={width * 0.034}
            color={colors.black}
          />
          <Text style={styles.shortTxt}>SORT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterWrapper}>
          <FontAwesome
            name="filter"
            size={width * 0.034}
            color={colors.black}
          />
          <Text style={styles.filterTxt}>FILTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Commonscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  serachProductWrapper: {
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.17,
    marginTop: height * 0.02,
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shortFilterWrapper: {
    position: 'absolute',
    bottom: width * 0.025,
    backgroundColor: colors.white,
    // marginHorizontal:width*0.1,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: height * 0.02,
  },
  sortWrapper: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: width * 0.02,
  },
  shortTxt: {},
  filterWrapper: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: width * 0.02,
  },
  filterTxt: {},
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: width * 0.039,
    fontFamily: fonts.MontserratSemiBold,
    marginBottom: height * 0.02,
  },
  option: {
    paddingVertical: 10,
  },
  optionTxt: {
    fontFamily: fonts.MontserratRegular,
    fontSize: width * 0.034,
    color: colors.black,
  },
});

import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart, clearCart} from '../redux/cartSlice';
import {colors} from '../utils/colors';
import StatusBarCom from '../components/StatusBarCom';
import {fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems, 'ddddd');

  // Calculate the total amount
  const getTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Render each cart item
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item?.thumbnail}} style={styles.itemImages} />

      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(removeFromCart(item.id))}
        style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
      <Text style={styles.header}>🛒 Your Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListFooterComponent={() =>
          cartItems.length > 0 && (
            <View style={styles.footer}>
              <Text style={styles.totalAmount}>Total: ${getTotalAmount()}</Text>
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => dispatch(clearCart())}>
                <Text style={styles.clearButtonText}>Clear Cart</Text>
              </TouchableOpacity>
              {/*  */}
            </View>
          )
        }
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: width * 0.032,
    paddingHorizontal: width * 0.04,
  },
  header: {
    fontSize: width * 0.06,
    fontFamily: fonts.MontserratSemiBold,
    marginBottom: height * 0.02,
    color: colors.black,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginBottom: height * 0.01,
    padding: width * 0.05,
    borderRadius: width * 0.03,
    elevation: 0.5,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: width * 0.042,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    paddingBottom: width * 0.01,
  },
  itemPrice: {
    fontSize: width * 0.037,
    fontFamily: fonts.MontserratRegular,
    color: colors.grey,
    paddingBottom: width * 0.01,
  },
  itemQuantity: {
    fontSize: width * 0.036,
    fontFamily: fonts.MontserratRegular,
    color: colors.grey,
  },
  removeButton: {
    backgroundColor: colors.btnColor,
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.02,
    // justifyContent:'center',
    // alignItems:'center'
  },
  removeButtonText: {
    color: colors.white,
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.024,
  },
  footer: {
    marginTop: height * 0.04,
    backgroundColor: colors.white,

    padding: width * 0.05,
    borderRadius: width * 0.03,
    elevation: 0.3,
  },
  totalAmount: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratSemiBold,
    marginBottom: height * 0.02,
    color: colors.black,
    textAlign: 'center',
  },
  clearButton: {
    backgroundColor: '#ff6347',
    paddingVertical: height * 0.015,
    borderRadius: width * 0.02,
  },
  clearButtonText: {
    color: colors.white,
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.04,
    textAlign: 'center',
  },
  itemImages: {
    resizeMode: 'contain',
    height: width * 0.2,
    width: '20%',
    marginRight: width * 0.04,
  },
});

// src/redux/cartSlice.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

// Helper function to save cart items to AsyncStorage
const saveCartToStorage = async cartItems => {
  try {
    await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
  } catch (error) {
    console.error('Error saving cart items to storage:', error);
  }
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push({...item, quantity: item.quantity || 1});
      }

      saveCartToStorage(state.items);
    },

    // Remove item from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      saveCartToStorage(state.items);
    },

    // Clear the cart
    clearCart: state => {
      state.items = [];
      saveCartToStorage(state.items);
    },

    // Set entire cart (used when loading from storage)
    setCartItems: (state, action) => {
      state.items = action.payload;
      saveCartToStorage(state.items);
    },
  },
});

// Export actions and reducer
export const {addToCart, removeFromCart, clearCart, setCartItems} =
  cartSlice.actions;
export default cartSlice.reducer;

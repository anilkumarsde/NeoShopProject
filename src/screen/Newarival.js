import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const Newarival = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />
    </View>
  );
};

export default Newarival;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

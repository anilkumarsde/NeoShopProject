import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StatusBarCom = ({backgraoundcolor, barStyle}) => {
  return (
    <View>
      <StatusBar backgroundColor={backgraoundcolor} barStyle={barStyle} />
    </View>
  );
};

export default StatusBarCom;

const styles = StyleSheet.create({});

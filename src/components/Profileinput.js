import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Profileinput = ({label,placeholdertxt,value,setemail}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput placeholder={placeholdertxt}  value={value} onChangeText={setemail}/>
    </View>
  );
};

export default Profileinput;

const styles = StyleSheet.create({});

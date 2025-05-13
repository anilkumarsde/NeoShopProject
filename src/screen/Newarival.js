import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';



const Newarival = () => {
  const navigation=useNavigation();
  useEffect(()=>{

    navigation.navigate('Commonscreen',{searchQuery:'smartphones'})

  },[])
  return (
    <View>
      <Text>Newarival</Text>
    </View>
  );
};

export default Newarival;

const styles = StyleSheet.create({});

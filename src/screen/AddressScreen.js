import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import OrderStatus from '../components/Orderstatus';
import {colors} from '../utils/colors';
import StatusBarCom from '../components/StatusBarCom';
import {useNavigation} from '@react-navigation/native';

const AddressScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStep, setMaxStep] = useState(1);
  const navigation = useNavigation();

 function handler() {
    setCurrentStep(0);
    setMaxStep(0);
   navigation.navigate('Cartscreen');
  }

  return (
    <View style={styles.container}>
      <StatusBarCom
        backgraoundcolor={colors.backgroundColor}
        barStyle={'dark-content'}
      />

      <OrderStatus
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        maxStep={maxStep}
      />
      <Button title="Press to go back" onPress={handler} />
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

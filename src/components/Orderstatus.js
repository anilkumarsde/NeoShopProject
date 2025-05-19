import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {colors} from '../utils/colors';

const {width, height} = Dimensions.get('window');

const labels = ['Cart', 'Address', 'Payment'];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  stepStrokeWidth: 2,
  stepStrokeCurrentColor: '#4aae4f',
  stepStrokeFinishedColor: '#4aae4f',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: colors.grey,
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: colors.headerIconColor,
  stepStrokeCurrentColor: colors.headerIconColor,
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: colors.white,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: colors.headerIconColor,
  labelSize: width * 0.035,
  currentStepLabelColor: colors.headerIconColor,
};

const OrderStatus = ({currentStep, setCurrentStep, maxStep}) => {
  console.log('curentstep', currentStep);
  console.log('setcurentstep', setCurrentStep);
  console.log('maxstep', maxStep);
  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentStep}
        labels={labels}
        stepCount={labels.length}
        onPress={stepIndex => {
          if (stepIndex <= maxStep) {
            setCurrentStep(stepIndex);
          }
        }}
      />
      {/*  */}
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: height * 0.027,
    backgroundColor: colors.backgroundColor,
  },
});

import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');

const InputFieldCom = ({
  placeholder,
  value,
  onChangeText,
  icon1,
  icon2,
  isSecure = false,
}) => {
  const [secure, setsecure] = useState(isSecure);
  return (
    <View style={styles.inputcontainer}>
      <Text>{icon1}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputFieldbox}
        placeholderTextColor={colors.placeholderColor}
        secureTextEntry={secure}
      />
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => setsecure(!secure)}>
        <Text>{icon2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputFieldCom;

const styles = StyleSheet.create({
  inputcontainer: {
    marginTop: height * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.035,
    paddingVertical: height * 0.009,
    borderRadius: width * 0.03,
    borderWidth: 1,
    justifyContent: 'flex-start',
    borderColor: colors.grey,
    elevation: 2,
    backgroundColor: '#F3F3F3',
  },
  inputFieldbox: {
    color: colors.placeholderColor,
    fontFamily: fonts.MontserratSemiBold,
    fontSize: width * 0.035,
    marginLeft: width * 0.035,
  },
  eyeIcon: {
    position: 'absolute',
    right: width * 0.045,
    color: colors.placeholderIconColor,
  },
});

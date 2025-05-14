import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const Headercomponent = ({menu, title, search, cart, profile, onpress}) => {
  const navigation = useNavigation();
  const searchscreenhandler = () => {
    console.log('navigate to serach screen');
    navigation.navigate('Searchscreen');
  };

  const gotocartscreen = () => {
    navigation.navigate('Cartscreen');
  };
  return (
    <View style={styles.container}>
      {/* left wrapper */}
      <View style={styles.leftWrpper}>
        <TouchableOpacity onPress={onpress}>
          <Text>{menu}</Text>
        </TouchableOpacity>
        <Text style={styles.tilte}>{title}</Text>
      </View>
      {/* right wrapper */}
      <View style={styles.rightWrapper}>
        <TouchableOpacity onPress={searchscreenhandler}>
          <Text>{search}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotocartscreen}>
          <Text>{cart}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={profile} style={styles.profileImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headercomponent;

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    // backgroundColor:'red'
  },
  leftWrpper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.03,
  },
  tilte: {
    fontFamily: fonts.MontserratBold,
    fontSize: width * 0.04,
    color: colors.headerIconColor,
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
    justifyContent: 'center',
  },
  profileImg: {
    height: height * 0.05,
    width: width * 0.1,
  },
});

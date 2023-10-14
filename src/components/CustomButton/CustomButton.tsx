import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {palette} from '../../utils/helpers/theme/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButton = ({btnText, onPress}: {btnText: string; onPress: any}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={style.container}
        onPress={onPress}>
        <Text style={style.text}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const style = StyleSheet.create({
  container: {
    backgroundColor: palette.primary,
    alignItems: 'center',
    width: wp(80),
    borderRadius: wp(0.8),
  },
  text: {
    color: palette.white,
    fontSize: hp(1.8),
    paddingVertical: hp(1.6),
    fontWeight: 'bold',
  },
});

import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {palette} from '../../utils/helpers/theme/color';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomInput = ({
  placeholder,
  text,
  onChangeText,
  secureText,
}: {
  placeholder: string;
  text: any;
  onChangeText: any;
  secureText: boolean;
}) => {
  return (
    <View style={style.textInputContainer}>
      <TextInput
        style={style.textInput}
        placeholder={placeholder}
        placeholderTextColor={palette.gary600}
        value={text}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
      />
    </View>
  );
};

export default CustomInput;

const style = StyleSheet.create({
  textInputContainer: {
    alignItems: 'center',
    marginTop: hp(0.5),
  },
  textInput: {
    borderWidth: wp(0.1),
    marginTop: hp(2),
    paddingHorizontal: wp(5),
    paddingVertical: wp(2),
    borderRadius: wp(1),
    borderColor: palette.gary600,
    color: palette.primary,
    fontSize: hp(1.7),
    width: wp(85),
  },
});

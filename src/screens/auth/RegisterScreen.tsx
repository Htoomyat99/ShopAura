import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {palette} from '../../utils/helpers/theme/color';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Auth from '../services/auth';

const RegisterScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);

  const onChangeName = (val: string) => {
    setName(val);
  };

  const onChangeEmail = (val: string) => {
    setEmail(val);
  };

  const onChangePassword = (val: any) => {
    setPassword(val);
  };

  const hideAction = () => {
    setHide(!hide);
  };

  const SignUpAction = () => {
    Auth.signUp(name, email, password);
  };

  const goLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <StatusBar backgroundColor={palette.primary} barStyle={'light-content'} />
      <Text style={style.headerText}>Sign Up</Text>

      <CustomInput
        placeholder="Name"
        text={name}
        onChangeText={onChangeName}
        secureText={false}
      />
      <CustomInput
        placeholder="Email..."
        text={email}
        onChangeText={onChangeEmail}
        secureText={false}
      />
      <CustomInput
        placeholder="Password"
        text={password}
        onChangeText={onChangePassword}
        secureText={hide ? true : false}
      />

      <TouchableOpacity
        onPress={hideAction}
        activeOpacity={0.8}
        style={style.hide}>
        <Text>{hide ? 'show' : 'hide'}</Text>
      </TouchableOpacity>

      <View style={{marginTop: hp(5)}}>
        <CustomButton btnText="Sign Up" onPress={SignUpAction} />
      </View>

      <TouchableOpacity
        style={style.footerContainer}
        activeOpacity={0.7}
        onPress={goLogin}>
        <Text style={style.footerText}>Already have an account? LogIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  headerText: {
    textAlign: 'center',
    fontSize: hp(1.9),
    paddingTop: hp(5),
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  hide: {
    position: 'absolute',
    top: hp(30),
    right: wp(15),
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: hp(1.5),
  },
  footerText: {
    width: wp(80),
    textAlign: 'right',
    fontSize: hp(1.7),
  },
});

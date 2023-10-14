import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);

  const onChangeEmail = (val: string) => {
    setEmail(val);
  };

  const onChangePassword = (val: any) => {
    setPassword(val);
  };

  const hideAction = () => {
    setHide(!hide);
  };

  const SignInAction = () => {
    Auth.singIn(email, password);
  };

  const goRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <StatusBar backgroundColor={palette.primary} barStyle={'light-content'} />
      <Text style={style.headerText}>Sign In</Text>

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
        <CustomButton btnText="Sign In" onPress={SignInAction} />
      </View>

      <TouchableOpacity
        style={style.footerContainer}
        activeOpacity={0.7}
        onPress={goRegister}>
        <Text style={style.footerText}>Don't have an account? Register</Text>
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
    top: hp(21.8),
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

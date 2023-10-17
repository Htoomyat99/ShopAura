import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {palette} from '../../utils/helpers/theme/color';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
// import Auth from '../services/auth';
import FaceBook from '../../../assets/icons/FaceBook';
import Google from '../../../assets/icons/Google';
import EyeClose from '../../../assets/icons/EyeClose';
import EyeOpen from '../../../assets/icons/EyeOpen';
import {AuthContext} from '../../context/context';

const RegisterScreen = ({navigation}: any) => {
  const {getAuth, getInitializing} = useContext(AuthContext);

  const [name, setName] = useState<String | null>(null);
  const [email, setEmail] = useState<String | null>(null);
  const [password, setPassword] = useState<String | null>(null);
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
    // Auth.signUp({name, email, password});
    if (email && name && password) {
      getInitializing(true);
      setTimeout(() => {
        getInitializing(false);
      }, 1000);
      getAuth(true);
    } else {
      navigation.navigate('InvalidAlertModal', {
        alertText: 'Fill the information completely.',
      });
    }
  };

  const goLogin = () => {
    navigation.navigate('Login');
  };

  const faceBookHandler = () => {
    navigation.navigate('InvalidAlertModal', {
      alertText: `Cant't connect with Facebook at the moment`,
    });
  };

  const googleHandler = () => {
    navigation.navigate('InvalidAlertModal', {
      alertText: `Cant't connect with Google at the moment`,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={palette.primary} barStyle={'light-content'} />

      <View style={style.logoContainer}>
        <Image
          source={require('../../../assets/images/shopAura.png')}
          style={{width: hp(25), height: hp(20)}}
        />
        <Text style={style.logoName}>Shop Aura</Text>
      </View>

      <View style={style.signUpContainer}>
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

        {!hide ? (
          <TouchableOpacity
            onPress={hideAction}
            activeOpacity={0.8}
            style={[style.hide, {top: hp(27.2), right: wp(9.5)}]}>
            <EyeOpen />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={hideAction}
            activeOpacity={0.8}
            style={[style.hide, {top: hp(27.5), right: wp(10)}]}>
            <EyeClose />
          </TouchableOpacity>
        )}

        <View style={{marginTop: hp(5)}}>
          <CustomButton btnText="Sign Up" onPress={SignUpAction} />
        </View>

        <View style={{alignItems: 'center', marginTop: hp(3)}}>
          <View style={style.lineContainer}>
            <View style={style.line}></View>
            <Text style={style.signUpWith}>Or SignUp With</Text>
            <View style={style.line}></View>
          </View>
        </View>

        <View style={style.iconContainer}>
          <TouchableOpacity
            style={style.icon}
            activeOpacity={0.7}
            onPress={faceBookHandler}>
            <FaceBook />
          </TouchableOpacity>

          <TouchableOpacity
            style={style.icon}
            activeOpacity={0.7}
            onPress={googleHandler}>
            <Google />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={style.footerContainer}
          activeOpacity={0.7}
          onPress={goLogin}>
          <Text style={style.footerText}>Already have an account? LogIn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  logoContainer: {
    alignItems: 'center',
    paddingBottom: hp(10),
    paddingTop: hp(4),
    backgroundColor: palette.primary,
  },
  logoName: {
    color: palette.white,
    marginTop: -hp(5.5),
    fontSize: hp(3),
    fontWeight: 'bold',
  },
  signUpContainer: {
    backgroundColor: palette.white,
    borderTopLeftRadius: hp(3),
    borderTopRightRadius: hp(3),
    marginTop: -hp(5),
    paddingBottom: hp(5),
  },
  headerText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    marginBottom: hp(1),
    color: palette.primary,
    marginTop: hp(4),
    marginLeft: wp(8),
  },
  hide: {
    position: 'absolute',
    color: palette.gray900,
    padding: wp(2),
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: wp(90),
  },
  line: {
    width: wp(28),
    height: wp(0.3),
    backgroundColor: palette.gray200,
  },
  signUpWith: {
    color: palette.black,
    fontSize: hp(1.7),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(4),
  },
  icon: {
    paddingVertical: wp(4),
    paddingHorizontal: wp(4.5),
    borderColor: palette.gary600,
    borderWidth: wp(0.1),
    borderRadius: wp(1),
    marginHorizontal: wp(5),
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: hp(6),
    paddingVertical: wp(2),
  },
  footerText: {
    textAlign: 'right',
    fontSize: hp(1.7),
    color: palette.gary600,
    letterSpacing: wp(0.2),
  },
});

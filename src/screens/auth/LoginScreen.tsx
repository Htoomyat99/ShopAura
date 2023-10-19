import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
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
import EyeOpen from '../../../assets/icons/EyeOpen';
import EyeClose from '../../../assets/icons/EyeClose';
import {AuthContext} from '../../context/context';
import {palette} from '../../helpers/theme/color';
import {useLocale} from '../../hooks/useLocale';

const RegisterScreen = ({navigation}: any) => {
  const locale = useLocale();
  const {getAuth, getInitializing, userInfo} = useContext(AuthContext);

  const [signInEmail, setSignInEmail] = useState<string | null>(null);
  const [signInPass, setSignInPass] = useState<string | null>(null);
  const [hide, setHide] = useState(true);

  const onChangeEmail = (val: string) => {
    setSignInEmail(val);
  };

  const onChangePassword = (val: any) => {
    setSignInPass(val);
  };

  const hideAction = () => {
    setHide(!hide);
  };

  useEffect(() => {
    console.log('userInfo in login >>>', userInfo);
  }, []);

  const SignUpAction = () => {
    // Auth.signUp({name, email, password});
    if (signInEmail && signInPass) {
      if (userInfo) {
        if (
          signInEmail === userInfo.email &&
          signInPass === userInfo.password
        ) {
          getInitializing(true);
          setTimeout(() => {
            getInitializing(false);
          }, 1000);
          getAuth(true);
        } else {
          navigation.navigate('InvalidAlertModal', {
            alertText: locale.incorrectEmailOrPass,
          });
        }
      } else {
        navigation.navigate('InvalidAlertModal', {
          alertText: locale.signUpFirst,
        });
      }
    } else {
      navigation.navigate('InvalidAlertModal', {
        alertText: locale.fillInfoCompletely,
      });
    }
  };

  const goLogin = () => {
    navigation.navigate('Register');
  };

  const faceBookHandler = () => {
    navigation.navigate('InvalidAlertModal', {
      alertText: locale.cantConnectWithFb,
    });
  };

  const googleHandler = () => {
    navigation.navigate('InvalidAlertModal', {
      alertText: locale.cangConnectWithGoogle,
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
        <Text style={style.logoName}>{locale.title}</Text>
      </View>

      <View style={style.signUpContainer}>
        <Text style={style.headerText}>{locale.singIn}</Text>

        <CustomInput
          placeholder={locale.email}
          text={signInEmail}
          onChangeText={onChangeEmail}
          secureText={false}
        />
        <CustomInput
          placeholder={locale.password}
          text={signInPass}
          onChangeText={onChangePassword}
          secureText={hide ? true : false}
        />

        {!hide ? (
          <TouchableOpacity
            onPress={hideAction}
            activeOpacity={0.8}
            style={[style.hide, {top: hp(20.2), right: wp(11)}]}>
            <EyeOpen />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={hideAction}
            activeOpacity={0.8}
            style={[style.hide, {top: hp(20.5), right: wp(11.5)}]}>
            <EyeClose />
          </TouchableOpacity>
        )}

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={style.forgotPass}>{locale.forgotPass}</Text>
        </TouchableOpacity>

        <View style={{marginTop: hp(5)}}>
          <CustomButton btnText={locale.singIn} onPress={SignUpAction} />
        </View>

        <View style={{alignItems: 'center', marginTop: hp(3)}}>
          <View style={style.lineContainer}>
            <View style={style.line}></View>
            <Text style={style.signUpWith}>{locale.loginWith}</Text>
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
          <Text style={style.footerText}>{locale.noAccount}</Text>
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
    top: hp(30),
    right: wp(15),
    color: palette.gray900,
  },
  forgotPass: {
    color: palette.gary600,
    fontSize: hp(1.6),
    marginTop: hp(1.5),
    marginLeft: wp(65),
    letterSpacing: wp(0.1),
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
    marginTop: hp(10),
    paddingVertical: wp(2),
  },
  footerText: {
    textAlign: 'right',
    fontSize: hp(1.7),
    color: palette.gary600,
    letterSpacing: wp(0.2),
  },
});

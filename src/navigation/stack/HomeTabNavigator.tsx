import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Auth from '../../screens/services/auth';
import {palette} from '../../helpers/theme/color';
import {AuthContext} from '../../context/context';
import appStorage from '../../utils/appStorage';
import {useLocale} from '../../hooks/useLocale';

const HomeTabNavigator = () => {
  const {getAuth, userInfo, getLang} = useContext(AuthContext);
  const locale = useLocale();

  const logOutAction = () => {
    // Auth.signOut();
    appStorage.deleteItem('@token');
    getAuth(false);
  };

  return (
    <View style={{backgroundColor: palette.white, flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: hp(40),
          marginBottom: hp(3),
          color: palette.primary,
        }}>
        {userInfo?.name}
      </Text>
      <CustomButton btnText={locale.logOut} onPress={logOutAction} />
      <TouchableOpacity onPress={() => getLang('mm')}>
        <Text>Myanmar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getLang('en')}>
        <Text>English</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeTabNavigator;

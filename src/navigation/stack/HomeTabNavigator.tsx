import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Auth from '../../screens/services/auth';
import {palette} from '../../helpers/theme/color';
import {AuthContext} from '../../context/context';

const HomeTabNavigator = () => {
  const {getAuth, userInfo} = useContext(AuthContext);

  const logOutAction = () => {
    // Auth.signOut();
    getAuth(false);
  };

  useEffect(() => {
    console.log('userInfo in homeTab>>>', userInfo);
  }, []);

  return (
    <View style={{backgroundColor: palette.white, flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: hp(40),
          marginBottom: hp(3),
          color: palette.primary,
        }}>
        {userInfo?.email}
      </Text>
      <CustomButton btnText="Log Out" onPress={logOutAction} />
    </View>
  );
};

export default HomeTabNavigator;

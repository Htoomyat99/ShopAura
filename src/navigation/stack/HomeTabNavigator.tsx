import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Auth from '../../screens/services/auth';

const HomeTabNavigator = () => {
  const logOutAction = () => {
    Auth.signOut();
  };

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: hp(40),
          marginBottom: hp(3),
        }}>
        HomeTabNavigator
      </Text>
      <CustomButton btnText="Log Out" onPress={logOutAction} />
    </View>
  );
};

export default HomeTabNavigator;

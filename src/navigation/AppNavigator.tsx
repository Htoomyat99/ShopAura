import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './stack/AuthNavigator';
import HomeTabNavigator from './stack/HomeTabNavigator';
// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {palette} from '../utils/helpers/theme/color';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AuthContext} from '../context/context';

const AppNavigator = () => {
  const [initializing, setInitializing] = useState(false);
  const [auth, setAuth] = useState(false);

  const context = {
    auth,

    getAuth: (val: boolean) => {
      setAuth(val);
    },
  };

  // function onAuthStateChange(user: any) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChange);
  //   return subscriber;
  // }, []);

  if (initializing) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: palette.white,
        }}>
        <View style={{marginTop: hp(35)}}>
          <ActivityIndicator size={'large'} color={palette.primary} />
        </View>
        <Text style={{color: palette.primary, marginTop: hp(3)}}>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={context}>
      <NavigationContainer>
        {auth ? <HomeTabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppNavigator;

import {View, Text, ActivityIndicator, Modal, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './stack/AuthNavigator';
import HomeTabNavigator from './stack/HomeTabNavigator';
// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AuthContext} from '../context/context';
import LoadingModal from '../modals/LoadingModal';
import InvalidAlertModal from '../modals/InvalidAlertModal';
import appStorage from '../utils/appStorage';

const AppNavigator = () => {
  const [initializing, setInitializing] = useState(false);
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState<Object | null>(null);

  const context = {
    auth,
    initializing,
    userInfo,

    getAuth: (val: boolean) => {
      setAuth(val);
    },
    getInitializing: (val: boolean) => {
      setInitializing(val);
    },
    getUserInfo: (val: object) => {
      setUserInfo(val);
    },
  };

  useEffect(() => {
    const userData = appStorage.getItem('@userInfo');
    // setUserInfo(userData);
    console.log('userData in appNavigator is >>>', userData);
  }, []);

  // function onAuthStateChange(user: any) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChange);
  //   return subscriber;
  // }, []);

  if (initializing) {
    return <LoadingModal />;
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

import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './stack/AuthNavigator';
import HomeTabNavigator from './stack/HomeTabNavigator';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {palette} from '../utils/helpers/theme/color';

const AppNavigator = () => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(false);

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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={palette.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!user ? <HomeTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

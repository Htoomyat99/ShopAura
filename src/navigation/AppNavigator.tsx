import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './stack/AuthNavigator';
import UnAuthNavigator from './stack/UnAuthNavigator';

const AppNavigator = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <NavigationContainer>
      {isAuth ? <AuthNavigator /> : <UnAuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

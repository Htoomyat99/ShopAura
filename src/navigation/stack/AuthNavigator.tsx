import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../../screens/auth/RegisterScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import InvalidAlertModal from '../../modals/InvalidAlertModal';
import LanguageModal from '../../modals/LanguageModal';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{headerShown: false, presentation: 'transparentModal'}}>
        <Stack.Screen name="InvalidAlertModal" component={InvalidAlertModal} />
        <Stack.Screen name="LanguageModal" component={LanguageModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthNavigator;

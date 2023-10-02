import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {palette} from './src/utils/helpers/theme/color';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;

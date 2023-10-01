import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {palette} from './helpers/theme/color';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={palette.primary} />
      <Text>App</Text>
    </SafeAreaView>
  );
};

export default App;

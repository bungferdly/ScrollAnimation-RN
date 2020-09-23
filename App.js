import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './src/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
};

export default App;

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './src/screens/Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;

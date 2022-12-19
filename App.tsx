/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import AppNavigation from './src/navigation';

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  </Provider>
);

export default App;

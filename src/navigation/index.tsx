import {Characters} from '@app/screens';
import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '@app/redux/store';
import {routes} from '@app/helpers';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const {theme} = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.characters} component={Characters} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}

export default AppNavigation;

import {Characters, Locations} from '@app/screens';
import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '@app/redux/store';
import {useSavedData} from '@app/hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  const {theme} = useSelector((state: RootState) => state.theme.selected);

  useSavedData();

  return (
    <ThemeProvider theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Location" component={Locations} />
        <Stack.Screen name="Character" component={Characters} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}

export default AppNavigation;

/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppDrawer from './AppDrawer';
import {HeaderLeft} from '../components/Kit';
import {Splash} from '../screens';
import {IMAGE_SCREEN, SPLASH_SCREEN} from '../constants/pages';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SPLASH_SCREEN}>
        <Stack.Screen
          options={{
            headerLeft: ({}) => <HeaderLeft />,
            headerTitleAlign: 'center',
          }}
          component={AppDrawer}
          name={IMAGE_SCREEN}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={Splash}
          name={SPLASH_SCREEN}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

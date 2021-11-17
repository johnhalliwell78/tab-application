import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import authNavigation from './auth.router';
import authorizedNavigation from './authorized.router';
import {get} from 'lodash';

const Stack = createStackNavigator();

function RootStack() {
  const isSignIn = useSelector(state => get(state, 'authReducers.auth.data'));

  return (
    <Stack.Navigator
      initialRouteName="SignedOut"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      {isSignIn ? (
        <Stack.Screen name="SignedIn" component={authorizedNavigation} />
      ) : (
        <Stack.Screen name="SignedOut" component={authNavigation} />
      )}
    </Stack.Navigator>
  );
}

export default RootStack;

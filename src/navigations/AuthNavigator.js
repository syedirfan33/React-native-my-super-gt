/**
 * @format
 * @flow
 */
import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {View} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import {commonStyles} from '../components/styles/Styles';
import i18n from '../locale/i18n';
import Colors from '../util/Colors';
import CreateAccountScreen from '../screens/CreateAccountScreen';

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      headerTitleStyle: commonStyles.navBarHeaderTitleStyle,
      headerRight: <View />,
    },
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      title: 'Reset Password',
      headerTintColor: Colors.WHITE,
      headerTitleStyle: commonStyles.navBarHeaderTitleStyle,
      headerRight: <View />,
    },
  },
  Create: {
    screen: CreateAccountScreen,
    navigationOptions: {
      title: 'Create Account',
      headerTintColor: Colors.WHITE,
      headerTitleStyle: commonStyles.navBarHeaderTitleStyle,
      headerRight: <View />,
    },
  },
});

export default AuthNavigator;

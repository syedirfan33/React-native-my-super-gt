/**
 * @format
 * @flow
 */
import React from 'react';
import {View, Image} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './redux/ReduxStore';
import AuthNavigator from './navigations/AuthNavigator';
import NavigationService from './services/NavigationService';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';

import Colors from './util/Colors';
import {commonStyles} from './components/styles/Styles';
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: (
          <View style={commonStyles.navBarHeaderContainerStyle}>
            <Image
              style={commonStyles.navBarRightIconStyle}
              source={require('./assets/images/Rednwhitelogo.png')}
            />
          </View>
        ),

        headerTintColor: Colors.WHITE,
        headerLeft: (
          <View style={{padding: 15}}>
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color={Colors.MONZA_RED}
            />
          </View>
        ),
        headerRight: (
          <View>
            <EvilIcon
              name="user"
              size={40}
              color={Colors.MONZA_RED}
              onPress={() => {
                NavigationService.navigate('Login');
              }}
            />
          </View>
        ),
      },
    },
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
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerBackImage: (
        <Ionicons name={'ios-arrow-back'} size={30} color={Colors.MONZA_RED} />
      ),
      headerStyle: {
        backgroundColor: Colors.SHARK_GREY,
        borderBottomWidth: 2,
        borderColor: Colors.MONZA_RED,
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component<*> {
  render = () => {
    return (
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setAppNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  };
}

export default App;

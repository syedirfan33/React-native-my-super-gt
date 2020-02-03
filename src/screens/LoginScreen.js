/* eslint-disable react-native/no-inline-styles */
/**
 * @format
 * @flow
 */
import React from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-navigation';
import {connect} from 'react-redux';
import Colors from '../util/Colors';
import Constants from '../util/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import Field from '../components/Field';
import {commonStyles} from '../components/styles/Styles';
import {
  emailBlur,
  passwordBlur,
  emailChange,
  passwordChange,
  resetLogin,
} from '../redux/actions';
import WrapperView from '../components/WrapperView';
import NavigationService from '../services/NavigationService';

class LoginScreen extends React.Component {
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  componentWillUnMount() {
    this.props.resetLogin();
  }

  componentDidMount() {
    this.props.resetLogin();
  }

  render() {
    const {
      emailBlur,
      passwordBlur,
      emailChange,
      passwordChange,
      emailRequired,
      passwordRequired,
      email,
      password,
    } = this.props;
    return (
      <WrapperView containerStyle={styles.container}>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>Login to existing Account</Text>
        </View>

        <View style={styles.fbButtonContainer}>
          <Button
            icon={
              <Icon
                name="facebook-f"
                style={{marginHorizontal: 20}}
                size={20}
                color="white"
              />
            }
            title="Login With Facebook"
          />
          <Text style={styles.bodyTextStyle}>Or</Text>
        </View>
        <View style={styles.inputContainer}>
          <Field
            placeholder="Email"
            onBlur={emailBlur}
            onChangeText={emailChange}
            errorMessage="Email is badly formatted"
            error={emailRequired && (!email || !this.validateEmail(email))}
            validate={emailRequired}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <Field
            placeholder="Password"
            onBlur={passwordBlur}
            onChangeText={passwordChange}
            errorMessage="Password should contain atlease 6 digits"
            error={passwordRequired && (!password || password.length < 6)}
            validate={passwordRequired}
            secureTextEntry
            autoCorrect={false}
            returnKeyType="done"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={[
              commonStyles.buttonStyle,
              {width: 90, backgroundColor: Colors.MONZA_RED},
            ]}
            title={'Login'}
            onPress={this.onRefreshCaptcha}
            titleStyle={commonStyles.buttonTitleStyle}
          />

          <Button
            buttonStyle={[commonStyles.buttonStyle, {width: 150}]}
            title={'Create Account'}
            onPress={() => {
              NavigationService.navigate('Create');
            }}
            titleStyle={commonStyles.buttonTitleStyle}
          />
        </View>
      </WrapperView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BUNKER_BLACK,
  },
  headerTextStyle: {
    fontSize: 24,
    color: Colors.WHITE,
    margin: 30,
  },
  fbButtonContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  bodyTextStyle: {color: Colors.WHITE, fontSize: 22, alignSelf: 'center'},
  buttonContainer: {
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 250,
  },
});

const mapStateToProps = state => {
  const {email, emailRequired, password, passwordRequired} = state.auth;
  return {email, emailRequired, password, passwordRequired};
};

export default connect(
  mapStateToProps,

  {emailBlur, passwordBlur, emailChange, passwordChange, resetLogin},
)(LoginScreen);

/* eslint-disable react-native/no-inline-styles */
/**
 * @format
 * @flow
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import Colors from '../util/Colors';
import Constants from '../util/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import Field from '../components/Field';
import {commonStyles} from '../components/styles/Styles';
import {
  createAcNameBlur,
  createAcNameChange,
  createAcEmailBlur,
  createAcEmailChange,
  createAcPasswordBlur,
  createAcPasswordChange,
  createAcCfPasswordBlur,
  createAcCfPasswordChange,
  createAcPhoneBlur,
  createAcPhoneChange,
  resetCreateAc,
} from '../redux/actions';
import WrapperView from '../components/WrapperView';
import NavigationService from '../services/NavigationService';

class LoginScreen extends React.Component {
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  componentWillUnMount() {
    this.props.resetCreateAc();
  }

  componentDidMount() {
    this.props.resetCreateAc();
  }

  render() {
    const {
      email,
      emailRequired,
      password,
      passwordRequired,
      name,
      nameRequired,
      confirmPassword,
      confirmPasswordRequired,
      phone,
      phoneRequired,
      createAcNameBlur,
      createAcNameChange,
      createAcEmailBlur,
      createAcEmailChange,
      createAcPasswordBlur,
      createAcPasswordChange,
      createAcCfPasswordBlur,
      createAcCfPasswordChange,
      createAcPhoneBlur,
      createAcPhoneChange,
      resetCreateAc,
    } = this.props;
    return (
      <WrapperView containerStyle={styles.container}>
        <View>
          <View style={styles.headerStyle}>
            <Text style={styles.headerTextStyle}>
              We're glad to see you here!
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Field
              placeholder="Full Name"
              onBlur={createAcNameBlur}
              onChangeText={createAcNameChange}
              errorMessage="Name is too short"
              error={nameRequired && (!name || name.length < 4)}
              validate={emailRequired}
              autoCorrect={false}
              returnKeyType="next"
            />
            <Field
              placeholder="Email"
              onBlur={createAcEmailBlur}
              onChangeText={createAcEmailChange}
              errorMessage="Email is badly formatted"
              error={emailRequired && (!email || !this.validateEmail(email))}
              validate={emailRequired}
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
            />
            <Field
              placeholder="Password"
              onBlur={createAcPasswordBlur}
              onChangeText={createAcPasswordChange}
              errorMessage="Password should contain atlease 6 digits"
              error={passwordRequired && (!password || password.length < 6)}
              validate={passwordRequired}
              secureTextEntry
              returnKeyType="next"
            />
            <Field
              placeholder="Confirm Password"
              onBlur={createAcCfPasswordBlur}
              onChangeText={createAcCfPasswordChange}
              errorMessage="Passwords do not match"
              error={
                confirmPasswordRequired &&
                (!confirmPassword || confirmPassword !== password)
              }
              validate={confirmPasswordRequired}
              secureTextEntry
              returnKeyType="next"
            />

            <View style={styles.phoneContainer}>
              <View style={{flex: 2}}>
                <Field value=" +60" disabled />
              </View>
              <View style={{flex: 6}}>
                <Field
                  placeholder="1234567890"
                  onBlur={createAcPhoneBlur}
                  onChangeText={createAcPhoneChange}
                  errorMessage="Incorrect Number"
                  error={phoneRequired && (!phone || phone.length < 10)}
                  validate={phoneRequired}
                  returnKeyType="done"
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              buttonStyle={[
                commonStyles.buttonStyle,
                {width: 100, backgroundColor: Colors.MONZA_RED},
              ]}
              title={'Register'}
              onPress={this.onRefreshCaptcha}
              titleStyle={commonStyles.buttonTitleStyle}
            />

            <Button
              buttonStyle={[commonStyles.buttonStyle, {width: 100}]}
              title={'Cancel'}
              onPress={() => NavigationService.navigate('Home')}
              titleStyle={commonStyles.buttonTitleStyle}
            />
          </View>
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
    width: 220,
  },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  const {
    email,
    emailRequired,
    password,
    passwordRequired,
    name,
    nameRequired,
    confirmPassword,
    confirmPasswordRequired,
    phone,
    phoneRequired,
  } = state.createAccount;
  console.log(state.createAccount);
  return {
    email,
    emailRequired,
    password,
    passwordRequired,
    name,
    nameRequired,
    confirmPassword,
    confirmPasswordRequired,
    phone,
    phoneRequired,
  };
};

export default connect(
  mapStateToProps,
  {
    createAcNameBlur,
    createAcNameChange,
    createAcEmailBlur,
    createAcEmailChange,
    createAcPasswordBlur,
    createAcPasswordChange,
    createAcCfPasswordBlur,
    createAcCfPasswordChange,
    createAcPhoneBlur,
    createAcPhoneChange,
    resetCreateAc,
  },
)(LoginScreen);

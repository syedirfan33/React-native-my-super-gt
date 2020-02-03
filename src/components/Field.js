import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Anticon from 'react-native-vector-icons/AntDesign';
import Colors from '../util/Colors';

class Field extends React.Component {
  renderIcon(error, validate) {
    if (validate && error) {
      return (
        <Anticon
          name="closecircleo"
          style={{right: 10}}
          color={Colors.MONZA_RED}
          size={20}
        />
      );
    } else if (validate && !error) {
      return (
        <Ionicon
          name="ios-checkmark-circle-outline"
          style={{right: 10}}
          color="green"
          size={20}
        />
      );
    } else {
      return null;
    }
  }
  render() {
    const {
      placeholder,
      onBlur,
      onChangeText,
      value,
      errorMessage,
      validate,
      error,
      secureTextEntry,
      disabled,
      additionalStyle,
      autocorrect,
      keyboardType,
      returnKeyType,
    } = this.props;
    return (
      <View>
        <Input
          placeholder={placeholder}
          placeholderTextColor={Colors.WHITE}
          containerStyle={[styles.fieldContainerStyle, additionalStyle]}
          inputContainerStyle={styles.fieldInputStyle}
          inputStyle={{color: Colors.WHITE}}
          rightIcon={this.renderIcon(error, validate)}
          onBlur={() => onBlur()}
          onChangeText={text => onChangeText(text)}
          value={value}
          errorMessage={error ? errorMessage : ''}
          secureTextEntry={secureTextEntry}
          disabled={disabled}
          autocorrect={autocorrect}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fieldContainerStyle: {marginBottom: 10},
  fieldInputStyle: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.CHARADE_GREY,
  },
});

export default Field;

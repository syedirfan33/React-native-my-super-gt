/**
 * @format
 * @flow
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Constants from '../util/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../util/Colors';
import WrapperView from '../components/WrapperView';

declare type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

class HomeScreen extends React.Component<Props> {
  render() {
    return (
      <WrapperView containerStyle={styles.container}>
        <View>
          <Text
            style={{
              color: 'white',
              fontFamily: Constants.FUTURA_BOLD_FONT,
              alignSelf: 'center',
              fontSize: 22,
            }}>
            Welcome to Home Screen
          </Text>
        </View>
      </WrapperView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.CHARADE_GREY,
  },
});

export default HomeScreen;

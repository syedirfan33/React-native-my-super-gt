/**
 * @format
 * @flow
 */
import React, {Fragment} from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Colors from '../util/Colors';

declare type Props = {
  children: any,
  containerStyle?: any,
};

class WrapperView extends React.Component<Props> {
  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor={Colors.SHARK_GREY} translucent={false} />
        <SafeAreaView
          style={
            this.props.containerStyle
              ? [styles.container, this.props.containerStyle]
              : styles.container
          }>
          {this.props.children}
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default WrapperView;

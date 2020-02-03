/**
 * @format
 * @flow
 */
import {NavigationActions} from 'react-navigation';

var _navigator;

function setAppNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

export default {
  navigate,
  setAppNavigator,
};

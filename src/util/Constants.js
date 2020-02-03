/**
 * @format
 * @flow
 */
import {Platform} from 'react-native';

const Constants = {
  IS_ENV_DEVELOPMENT: __DEV__,
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
  DEV_SETTING_PHRASE: 'QXcwczBtZVNlbGxlcjE1VVM=',
  FONT_FORMULA_BOLD: 'Formula1-Bold',
  FONT_FORMULA_REGULAR: 'Formula1-Regular',
  FONT_FORMULA_Wide: 'Formula1-Wide',
  FUTUR: 'futur',
  FUTURA_BOLD_FONT: 'Futura Bold font',
};

export default Constants;

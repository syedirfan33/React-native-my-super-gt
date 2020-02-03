import {
  LOGIN_EMAIL_REQUIRED,
  LOGIN_PASSWORD_REQUIRED,
  LOGIN_EMAIL,
  LOGIN_PASSWORD,
  LOGIN_RESET,
} from '../ReduxTypes';

export const emailBlur = () => {
  return {type: LOGIN_EMAIL_REQUIRED};
};

export const passwordBlur = () => {
  return {type: LOGIN_PASSWORD_REQUIRED};
};

export const emailChange = text => {
  return {type: LOGIN_EMAIL, payload: text};
};

export const passwordChange = text => {
  return {type: LOGIN_PASSWORD, payload: text};
};

export const resetLogin = () => {
  return {type: LOGIN_RESET};
};

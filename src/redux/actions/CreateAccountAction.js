import {
  CREATE_AC_CF_PASSWORD,
  CREATE_AC_CF_PASSWORD_REQUIRED,
  CREATE_AC_EMAIL,
  CREATE_AC_EMAIL_REQUIRED,
  CREATE_AC_NAME,
  CREATE_AC_NAME_REQUIRED,
  CREATE_AC_PASSWORD,
  CREATE_AC_PASSWORD_REQUIRED,
  CREATE_AC_PHONE,
  CREATE_AC_PHONE_REQUIRED,
  CREATE_AC_RESET,
} from '../ReduxTypes';

export const createAcNameBlur = () => {
  return {type: CREATE_AC_NAME_REQUIRED};
};

export const createAcEmailBlur = () => {
  return {type: CREATE_AC_EMAIL_REQUIRED};
};

export const createAcPasswordBlur = () => {
  return {type: CREATE_AC_PASSWORD_REQUIRED};
};

export const createAcCfPasswordBlur = () => {
  return {type: CREATE_AC_CF_PASSWORD_REQUIRED};
};

export const createAcPhoneBlur = () => {
  return {type: CREATE_AC_PHONE_REQUIRED};
};

export const createAcNameChange = text => {
  return {type: CREATE_AC_NAME, payload: text};
};

export const createAcEmailChange = text => {
  return {type: CREATE_AC_EMAIL, payload: text};
};

export const createAcPasswordChange = text => {
  return {type: CREATE_AC_PASSWORD, payload: text};
};

export const createAcCfPasswordChange = text => {
  return {type: CREATE_AC_CF_PASSWORD, payload: text};
};

export const createAcPhoneChange = text => {
  return {type: CREATE_AC_PHONE, payload: text};
};

export const resetCreateAc = () => {
  return {type: CREATE_AC_RESET};
};

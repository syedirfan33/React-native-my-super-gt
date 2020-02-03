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
declare type State = {
  name: String,
  nameRequired: String,
  email: String,
  emailRequired: Boolean,
  passwordRequired: Boolean,
  password: String,
  phone: String,
  phoneRequired: Boolean,
  confirmPassword: String,
  confirmPasswordRequired: Boolean,
  spinner: Boolean,
};

const INITIAL_STATE = {
  email: '',
  password: '',
  spinner: false,
  emailRequired: false,
  passwordRequired: false,
  name: '',
  nameRequired: false,
  phone: '',
  phoneRequired: false,
  confirmPassword: '',
  confirmPasswordRequired: false,
};

export default (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case CREATE_AC_RESET:
      return INITIAL_STATE;
    case CREATE_AC_NAME_REQUIRED:
      return {...state, nameRequired: true};
    case CREATE_AC_PASSWORD_REQUIRED:
      return {...state, passwordRequired: true};
    case CREATE_AC_EMAIL_REQUIRED:
      return {...state, emailRequired: true};
    case CREATE_AC_CF_PASSWORD_REQUIRED:
      return {...state, confirmPasswordRequired: true};
    case CREATE_AC_PHONE_REQUIRED:
      return {...state, phoneRequired: true};
    case CREATE_AC_NAME:
      return {...state, name: action.payload};
    case CREATE_AC_EMAIL:
      return {...state, email: action.payload};
    case CREATE_AC_PASSWORD:
      return {...state, password: action.payload};
    case CREATE_AC_CF_PASSWORD:
      return {...state, confirmPassword: action.payload};
    case CREATE_AC_PHONE:
      return {...state, phone: action.payload};

    default:
      return state;
  }
};

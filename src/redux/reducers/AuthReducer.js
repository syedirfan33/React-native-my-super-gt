import {
  LOGIN_EMAIL_REQUIRED,
  LOGIN_PASSWORD_REQUIRED,
  LOGIN_EMAIL,
  LOGIN_PASSWORD,
  LOGIN_RESET,
} from '../ReduxTypes';
declare type State = {
  email: String,
  emailRequired: Boolean,
  passwordRequired: Boolean,
  password: String,
  spinner: Boolean,
};

const INITIAL_STATE = {
  email: '',
  password: '',
  spinner: false,
  emailRequired: false,
  passwordRequired: false,
};

export default (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case LOGIN_EMAIL_REQUIRED:
      return {
        ...state,
        emailRequired: true,
      };
    case LOGIN_PASSWORD_REQUIRED:
      return {
        ...state,
        passwordRequired: true,
      };
    case LOGIN_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case LOGIN_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case LOGIN_RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};

import * as ActionTypes from '../actions/ActionTypes';
export const defaultState = {
  auth: {
    loading: false,
    data: null,
    success: false,
  },
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
        },
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          data: action.auth,
          loading: false,
          success: true,
        },
      };

    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          success: false,
        },
      };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        auth: {
          ...state.auth,
          data: null,
          loading: false,
          success: false,
        },
      };

    default:
      return state;
  }
}

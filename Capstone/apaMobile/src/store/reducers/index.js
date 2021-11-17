import {persistCombineReducers} from 'redux-persist';
import {createWhitelistFilter} from 'redux-persist-transform-filter';
import storage from '@react-native-community/async-storage';
import userReducers from './user.reducer';
import authReducers from './auth.reducer';

import {defaultState as defaultUserReducers} from '@/store/reducers/user.reducer';

const config = {
  key: 'root',
  storage,
  whitelist: ['authReducers', 'userReducers'],
  transforms: [
    createWhitelistFilter('authReducers', ['auth']),
    createWhitelistFilter('userReducers', ['profile']),
  ],
};

const appReducer = persistCombineReducers(config, {
  authReducers,
  userReducers,
});

export default (reducers = (state, action) => {
  if (action.type === 'RESET_STORE') {
    const {_persist} = state;
    state = {
      _persist,
      userReducers: {
        ...defaultUserReducers,
      },
    };
  }
  return appReducer(state, action);
});

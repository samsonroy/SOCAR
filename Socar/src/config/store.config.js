import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {settingsData} from '../redux/reducers/settings-data.reducers';

import thunk from 'redux-thunk';

const middleware = [thunk];
if (__DEV__) {
  middleware.push(createLogger());
}
const defaultState = {};

const appReducer = combineReducers({
  settingsData: settingsData,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(...middleware),
);

export default function getStore() {
  return store;
}

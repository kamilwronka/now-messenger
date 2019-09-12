import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import storage from '@react-native-community/async-storage';

import {persistStore, persistReducer} from 'redux-persist';
import reducers from './combineReducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data'], //temp to be changed
};

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  pReducer,
  compose(applyMiddleware(thunk, promiseMiddleware)),
);

export const persistor = persistStore(store);

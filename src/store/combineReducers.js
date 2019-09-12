import {combineReducers} from 'redux';

const appReducer = combineReducers({
  data: () => {
    return {dupa: 'red'};
  },
});

export default (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
};

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { app } from './reducers';

export default combineReducers({
  app,
  routing,
});

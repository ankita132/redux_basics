import { createStore, combineReducers, applyMiddleware} from 'redux';
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import logger from 'redux-logger';
export default createStore(
  combineReducers({mathReducer, userReducer}),
  {},
  applyMiddleware(logger)
);

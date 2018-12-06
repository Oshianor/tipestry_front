import { combineReducers } from 'redux';
import conditionsReducer from "./conditionsReducer";

const appReducer = combineReducers({
  condition: conditionsReducer,
});

export default appReducer;
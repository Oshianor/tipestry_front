import { combineReducers } from 'redux';
import dataReducers from "./dataReducers";
import gift from "./giftReducers";

const appReducer = combineReducers({
  data: dataReducers,
  gift
});

export default appReducer;
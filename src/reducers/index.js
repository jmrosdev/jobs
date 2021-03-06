import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import companies from './companies'
import user from './user';

export const reducers = combineReducers({
  form: formReducer,
  data: companies,
  userInfo: user,
  routing: routerReducer
});

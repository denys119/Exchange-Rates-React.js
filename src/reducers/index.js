import { combineReducers } from "redux";

import currenciesReducer from "./currencyReducer";

const rootReducer = combineReducers({
  currencies: currenciesReducer,
});

export default rootReducer;

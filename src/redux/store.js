import { createStore, combineReducers } from "redux";
import currencyReducer from "./reducer";

const rootReducer = combineReducers({
  currencyReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

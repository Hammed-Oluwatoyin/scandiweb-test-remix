import { combineReducers } from "redux";

const INITIAL_STATE = {
  currentCurrency: "USD",
  showCartModal: false,
  showCurrencyModal: false,
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_CURRENCY":
      return {
        ...state,
        currentCurrency: action.payload,
      };

    default:
      return state;
  }
};

const currencyModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_HIDDEN_CURRENCY_MODAL":
      return {
        ...state,
        showCurrencyModal: !state.showCurrencyModal,
      };
    case "CLOSE_CURRENCY_MODAL":
      return {
        ...state,
        showCurrencyModal: action.payload,
      };

    default:
      return state;
  }
};

const cartModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_HIDDEN_CART_MODAL":
      return {
        ...state,
        showCartModal: !state.showCartModal,
      };

    case "CLOSE_CART_MODAL":
      return {
        ...state,
        showCartModal: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currencyReducer,
  cartModalReducer,
  currencyModalReducer,
});

export default rootReducer;

import CartActionTypes from "./constant";

export const changeCurrency = (selectedCurrency) => ({
  type: CartActionTypes.CHANGE_CURRENCY,
  payload: selectedCurrency,
});

export const toggleHiddenCartModal = () => ({
  type: CartActionTypes.TOGGLE_HIDDEN_CART_MODAL,
});

export const toggleHiddenCurrencyModal = () => ({
  type: CartActionTypes.TOGGLE_HIDDEN_CURRENCY_MODAL,
});

export const closeCurrencyModal = () => ({
  type: CartActionTypes.CLOSE_CURRENCY_MODAL,
  payload: false,
});

export const closeCartModal = () => ({
  type: CartActionTypes.CLOSE_CART_MODAL,
  payload: false,
});

export const addProduct = (product) => ({
  type: CartActionTypes.ADD_PRODUCT_TO_CART,
  payload: product,
});

export const removeProduct = (product) => ({
  type: CartActionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: product,
});

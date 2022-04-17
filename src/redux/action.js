import CartActionTypes from "./constant";

export const changeCurrency = (selectedCurrency) => ({
  type: CartActionTypes.CHANGE_CURRENCY,
  payload: selectedCurrency,
});

const INITIAL_STATE = {
  currentCurrency: "$",
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

export default currencyReducer;

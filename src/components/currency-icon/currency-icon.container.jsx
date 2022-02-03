import {  graphql } from "react-apollo";
import { gql } from "apollo-boost";
import compose from "lodash.flowright";

import CurrencyIcon from "./currency-icon.component.jsx";

const TOGGLE_CURRENCY_DROPDOWN = gql`
  mutation ToggleCurrencyDropdown {
    toggleCurrencyDropdown @client
  }
`;


const GET_CURRENCY_DROPDOWN_HIDDEN = gql`
  {
    currencyDropdownHidden @client
  }
`;






const CurrencyIconContainer = ({data : {currencyDropdownHidden}, toggleCurrencyDropdown, selectedCurrency}) => (
      
      <CurrencyIcon currencyDropdownHidden={currencyDropdownHidden}  selectedCurrency={selectedCurrency} toggleCurrencyDropdown={toggleCurrencyDropdown} />

  
);

export default compose(
                        graphql(TOGGLE_CURRENCY_DROPDOWN , {name : 'toggleCurrencyDropdown'}),
                        graphql(GET_CURRENCY_DROPDOWN_HIDDEN))(CurrencyIconContainer);
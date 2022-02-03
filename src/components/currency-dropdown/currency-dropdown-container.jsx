 import React from "react";
  import {Mutation} from 'react-apollo';
  import { gql } from "apollo-boost";
import CurrencyDropdown from "./currency-dropdown.component.jsx";

const TOGGLE_CURRENCY_DROPDOWN = gql`
  mutation ToggleCurrencyDropdown {
    toggleCurrencyDropdown @client
  }
`;










const CurrencyDropdownContainer = (props) => (
    <Mutation mutation={TOGGLE_CURRENCY_DROPDOWN}>
        {toggleCurrencyDropdown => (
            <CurrencyDropdown {...props} toggleCurrencyDropdown={toggleCurrencyDropdown} />
        )}
    </Mutation>
)



export default CurrencyDropdownContainer;
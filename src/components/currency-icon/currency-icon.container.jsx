import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CurrencyIcon from "./currency-icon.component.jsx";

const TOGGLE_CURRENCY_DROPDOWN = gql`
  mutation ToggleCurrencyDropdown {
    toggleCurrencyDropdown @client
  }
`;

const CurrencyIconContainer = (props) => (
  <Mutation mutation={TOGGLE_CURRENCY_DROPDOWN}>
    {(toggleCurrencyDropdown) => (
      <CurrencyIcon {...props} toggleCurrencyDropdown={toggleCurrencyDropdown} />
    )}
  </Mutation>
);

export default CurrencyIconContainer;
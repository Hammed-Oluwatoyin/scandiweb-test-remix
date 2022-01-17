import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CartIcon from "./cart-icon.component.jsx";

const TOGGLE_CART_DROPDOWN = gql`
  mutation ToggleCartDropdown {
    toggleCartDropdown @client
  }
`;

const CartIconContainer = (props) => (
  <Mutation mutation={TOGGLE_CART_DROPDOWN}>
    {(toggleCartDropdown) => (
      <CartIcon {...props} toggleCartDropdown={toggleCartDropdown} />
    )}
  </Mutation>
);

export default CartIconContainer;

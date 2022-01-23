import {  graphql } from "react-apollo";
import { gql } from "apollo-boost";
import compose from "lodash.flowright";

import CartIcon from "./cart-icon.component.jsx";

const TOGGLE_CART_DROPDOWN = gql`
  mutation ToggleCartDropdown {
    toggleCartDropdown @client
  }
`;

const GET_PRODUCT_COUNT = gql`
  {
    productCount @client
  }
`



const CartIconContainer = ({data: {productCount}, toggleCartDropdown}) => (
 
      <CartIcon productCount={productCount} toggleCartDropdown={toggleCartDropdown} />
    
  
);

export default compose(
  graphql(TOGGLE_CART_DROPDOWN, {name: 'toggleCartDropdown'}),
  graphql(GET_PRODUCT_COUNT)
)(CartIconContainer);

import {  graphql } from "react-apollo";
import { gql } from "apollo-boost";
import compose from "lodash.flowright";

import CartIcon from "./cart-icon.component.jsx";
import { Component } from "react";

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

class CartIconContainer extends Component {
  render() {
    
    const {toggleCartDropdown, data} = this.props;
    const {productCount} = data;
    return (
                <CartIcon productCount={productCount} toggleCartDropdown={toggleCartDropdown} />
    );
  }
}






export default compose(
  graphql(TOGGLE_CART_DROPDOWN, {name: 'toggleCartDropdown'}),
  graphql(GET_PRODUCT_COUNT)
)(CartIconContainer);

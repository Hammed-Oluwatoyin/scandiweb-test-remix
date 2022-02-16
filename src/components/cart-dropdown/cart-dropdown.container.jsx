import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './cart-dropdown.component';

const TOGGLE_CART_DROPDOWN = gql`
  mutation ToggleCartDropdown {
    toggleCartDropdown @client
  }
`;



const GET_CART_PRODUCTS_AND_TOTAL = gql`
  {
    cartProducts @client
    cartTotal @client
  }
`;


class CartDropdownContainer extends Component {
  render() {
    
    return (
  <Mutation mutation={TOGGLE_CART_DROPDOWN}>
    {(toggleCartDropdown) => (
       <Query query={GET_CART_PRODUCTS_AND_TOTAL}>
        {({ data: { cartProducts, cartTotal } }) => {
            console.log(cartProducts, cartTotal);
            
            return (
          <CartDropdown
            cartProducts={cartProducts}
            cartTotal={cartTotal}
            toggleCartDropdown={toggleCartDropdown}
            
          />
        )}}
      </Query>
    )}
  </Mutation>
    );
  }
}


export default CartDropdownContainer;
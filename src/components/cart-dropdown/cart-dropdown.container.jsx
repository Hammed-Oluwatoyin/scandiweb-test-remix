import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './cart-dropdown.component';



const GET_CART_PRODUCTS_AND_TOTAL = gql`
  {
    cartProducts @client
    cartTotal @client
  }
`;

const CartDropdownContainer = () => (
  
    
      <Query query={GET_CART_PRODUCTS_AND_TOTAL}>
        {({ data: { cartProducts, cartTotal } }) => {
            console.log(cartProducts, cartTotal);
            
            return (
          <CartDropdown
            cartProducts={cartProducts}
            cartTotal={cartTotal}
            
          />
        )}}
      </Query>
    
  
);

export default CartDropdownContainer;
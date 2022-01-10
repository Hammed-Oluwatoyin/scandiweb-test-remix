import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './cart-dropdown.component';



const GET_CART_ITEMS = gql`
  {
    cartProducts @client
  }
`;

const CartDropdownContainer = () => (
  
    
      <Query query={GET_CART_ITEMS}>
        {({ data: { cartProducts } }) => {
            console.log(cartProducts);
            
            return (
          <CartDropdown
            cartProducts={cartProducts}
            
          />
        )}}
      </Query>
    
  
);

export default CartDropdownContainer;
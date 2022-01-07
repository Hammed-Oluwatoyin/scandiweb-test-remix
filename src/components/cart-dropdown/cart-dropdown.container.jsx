import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './cart-dropdown.component';



const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = () => (
  
    
      <Query query={GET_CART_ITEMS}>
        {({ data: { cartItems } }) => {
            console.log(cartItems);
            
            return (
          <CartDropdown
            cartItems={cartItems}
            
          />
        )}}
      </Query>
    
  
);

export default CartDropdownContainer;
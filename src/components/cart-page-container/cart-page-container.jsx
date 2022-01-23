import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartPage from '../../pages/cart';



const GET_CART_PRODUCTS = gql`
  {
    cartProducts @client
    
  }
`;

const CartPageContainer = () => (


   
       <Query query={GET_CART_PRODUCTS}>
        {({ data: { cartProducts} }) => {
            
            
            return (
          <CartPage
            cartProducts={cartProducts} 
          />
        )}}
      </Query>
);

export default CartPageContainer;
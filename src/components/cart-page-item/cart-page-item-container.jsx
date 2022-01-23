import React from "react";
  import {  graphql } from 'react-apollo';
  import { gql } from "apollo-boost";
  import compose from "lodash.flowright";


import CartPageItem from "./cart-page-item-component";

  const ADD_PRODUCT_TO_CART  = gql`
      mutation AddProductToCart($product: Product!){
          addProductToCart(product: $product)  @client
      }
  `;
  const REMOVE_PRODUCT_FROM_CART = gql`
  mutation RemoveProductFromCart($product: Product!) {
    removeProductFromCart(product: $product) @client
  }
`;

const CLEAR_PRODUCT_FROM_CART = gql`
  mutation ClearProductFromCart($product: Product!) {
    clearProductFromCart(product: $product) @client
  }
`;

  

const CartPageItemContainer = ({
  addProductToCart,
  removeProductFromCart,
  clearProductFromCart,
  ...otherProps
}) => (
    
        
            <CartPageItem {...otherProps}
    addProduct={product => addProductToCart({ variables: { product } })}
    removeProduct={product => removeProductFromCart({ variables: { product } })}
    clearProduct={product => clearProductFromCart({ variables: { product } })} />
        
    
)



export default compose(
  graphql(ADD_PRODUCT_TO_CART, { name: 'addProductToCart' }),
  graphql(REMOVE_PRODUCT_FROM_CART, { name: 'removeProductFromCart' }),
  graphql(CLEAR_PRODUCT_FROM_CART, { name: 'clearProductFromCart' })
)(CartPageItemContainer);
import React from "react";
  import {  graphql } from 'react-apollo';
  import { gql } from "apollo-boost";
  import compose from "lodash.flowright";


import CartPageItem from "./cart-page-item-component";

  const ADD_PRODUCT_TO_CART  = gql`
      mutation AddProductToCart($product: Product!, $number: Int  ){
          addProductToCart(product: $product, number: $number)  @client
      }
  `;
  const REMOVE_PRODUCT_FROM_CART = gql`
  mutation RemoveProductFromCart($product: Product!, $number: Int) {
    removeProductFromCart(product: $product,  number: $number) @client
  }
`;

const CLEAR_PRODUCT_FROM_CART = gql`
  mutation ClearProductFromCart($product: Product!, $number:Int) {
    clearProductFromCart(product: $product, number: $number) @client
  }
`;

  

const CartPageItemContainer = ({
  addProductToCart,
  removeProductFromCart,
  clearProductFromCart,
  ...otherProps
}) => (
    
        
            <CartPageItem {...otherProps}
    addProduct={(product, number) => addProductToCart({ variables: { product, number } })}
    removeProduct={(product, number) => removeProductFromCart({ variables: { product, number } })}
    clearProduct={(product, number) => clearProductFromCart({ variables: { product, number } })} />
        
    
)



export default compose(
  graphql(ADD_PRODUCT_TO_CART, { name: 'addProductToCart' }),
  graphql(REMOVE_PRODUCT_FROM_CART, { name: 'removeProductFromCart' }),
  graphql(CLEAR_PRODUCT_FROM_CART, { name: 'clearProductFromCart' })
)(CartPageItemContainer);
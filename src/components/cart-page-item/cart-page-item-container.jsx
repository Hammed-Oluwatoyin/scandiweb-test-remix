import React, { Component } from "react";
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

class CartPageItemContainer extends Component {
   
  
  render() {
        
    const {addProductToCart, removeProductFromCart, ...otherProps} = this.props;
    return (
         <CartPageItem 
         {...otherProps}
    addProduct={(product, number) => addProductToCart({ variables: { product, number } })}
     removeProduct={(product, number) => removeProductFromCart({ variables: { product, number } })} />
    );
  }
}






  




export default compose(
  graphql(ADD_PRODUCT_TO_CART, { name: 'addProductToCart' }),
  graphql(REMOVE_PRODUCT_FROM_CART, { name: 'removeProductFromCart' }),
)(CartPageItemContainer);
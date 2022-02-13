  import React from "react";
  import {Mutation} from 'react-apollo';
  import { gql } from "apollo-boost";


import Product from "./product";

  const ADD_PRODUCT_TO_CART  = gql`
      mutation AddProductToCart($product: Product! ,$number: Int){
          addProductToCart(product: $product, number: $number)  @client
      }
  `;

  

const ProductContainer = (props) => (
    <Mutation mutation={ADD_PRODUCT_TO_CART}>
        {addProductToCart => (
            <Product {...props} addItem={(product, number) =>  addProductToCart({variables:{product , number} })} />
        )}
    </Mutation>
)

export default ProductContainer;
  import React from "react";
  import {Mutation} from 'react-apollo';
  import { gql } from "apollo-boost";


import Product from "./product";

  const ADD_PRODUCT_TO_CART  = gql`
      mutation AddProductToCart($product: Product!){
          addProductToCart(product: $product)  @client
      }
  `;

  

const ProductContainer = (props) => (
    <Mutation mutation={ADD_PRODUCT_TO_CART}>
        {addProductToCart => (
            <Product {...props} addItem={product =>  addProductToCart({variables:{product} })} />
        )}
    </Mutation>
)

export default ProductContainer;
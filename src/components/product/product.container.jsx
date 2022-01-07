  import React from "react";
  import {Mutation} from 'react-apollo';
  import { gql } from "apollo-boost";


import Product from "./product";

  const ADD_ITEM_TO_CART  = gql`
      mutation AddItemToCart($product: Product!){
          addItemToCart(product: $product)  @client
      }
  `;

  

const ProductContainer = (props) => (
    <Mutation mutation={ADD_ITEM_TO_CART}>
        {addItemToCart => (
            <Product {...props} addItem={product =>  addItemToCart({variables:{product} })} />
        )}
    </Mutation>
)

export default ProductContainer;
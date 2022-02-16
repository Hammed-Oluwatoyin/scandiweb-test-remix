import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartPage from '../../pages/cart';



const GET_CART_PRODUCTS = gql`
  {
    cartProducts @client
    
  }
`;


class CartPageContainer extends Component {
  render() {
    
    return (
  <Query query={GET_CART_PRODUCTS}>
            {({loading, data, error})  => {   
                if (loading) return <div>loading...</div>
                console.log(data)
                return <CartPage responseData = {{data}} />
            }}
    </Query>
    );
  }
}



// const CartPageContainer = () => (


   
//        <Query query={GET_CART_PRODUCTS}>
//         {({ data: { cartProducts} }) => {
            
            
//             return (
//           <CartPage
//             cartProducts={cartProducts} 
//           />
//         )}}
//       </Query>
// );

export default CartPageContainer;
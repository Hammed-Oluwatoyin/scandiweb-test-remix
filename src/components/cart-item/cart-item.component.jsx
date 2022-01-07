import React from 'react';
import styled from 'styled-components';


const  CartItemContainer =  styled.div`
                             width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
                            
                            `



const CartItem = (props) => {

    

    return (
  
    
    <CartItemContainer >
      <span>{props.cartItem.name}</span>
    
    </CartItemContainer>
  
);
}

export default CartItem;
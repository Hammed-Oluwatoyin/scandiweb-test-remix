import React, {Component} from "react";
import styled from "styled-components";

const CartItemContainer = styled.div`
      position: absolute;
    width: 325px;
    height: 540px;
    background-color:#ffffff ;
    padding: 20px;
    top: 80px;
    right: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
`




class CartItemDropdown extends Component  {
  
    render() {
        return (
            <CartItemContainer>
          
            </CartItemContainer>
        )
    }
}

export default  CartItemDropdown;
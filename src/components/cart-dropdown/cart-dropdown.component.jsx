import React, {Component} from "react";
import styled from "styled-components";
import CartItem from "../cart-item/cart-item.component";

const CartDropdownContainer = styled.div`
      position: absolute;
    width: 325px;
    height: 540px;
    background-color:#ffffff ;
    padding: 20px;
    top: 80px;
    right: 60px;
    display: flex;
    flex-direction: column;
    
    
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
`

const ItemsSummaryDescription = styled.div`
                    
                    
                    ` 
const CartItemsList =  styled.div`
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    
                    overflow-y: scroll ;
`
const TotalItemsDescription = styled.div`
                    
                    
` 
const ButtonsContainer = styled.div`
                    margin-top: auto;
                    `




class CartDropdown extends Component  {
  
    render() {
        
        const {cartItems} = this.props;
        console.log(cartItems);
        return (
            <CartDropdownContainer>
                <ItemsSummaryDescription>My Bag 2 items</ItemsSummaryDescription>
                <CartItemsList>
      {cartItems && (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) }
    </CartItemsList>
                <TotalItemsDescription>totalItems</TotalItemsDescription>
                <ButtonsContainer>Buttons</ButtonsContainer>
          
            </CartDropdownContainer>
        )
    }
}

export default  CartDropdown;
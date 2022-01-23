import React, {Component} from "react";
import styled, {css} from "styled-components";
import  CartItemContainer   from "../cart-dropdown-item/cart-item.container";
import { withRouter } from 'react-router-dom';

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

const ItemsSummaryDescriptionContainer = styled.div`
                    margin-bottom: 20px;
                   
                    
                    ` 
const CartItemsList =  styled.div`
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    
                    overflow-y: scroll ;
`
const TotalItemsDescription = styled.div`
                                margin-top: 50px;
                                display: flex;
                                flex-direction: row;
                                 justify-content: space-between;
                            

                    
` 
const ButtonsContainer = styled.div`
                    margin-top: 50px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    `
const CartTotalHeading = styled.div`
                          font-weight: bold;
                          font-size: 20px;
`
const CartTotalPrice = styled.div`
                        font-weight: bold;
                        `
                  

const Button = styled.button`
                height: 43px;
                width: 140px;
                ${p => p.green ? 
                                  css`
                                      background-color:#5ECE7B;
                                      color: white;
                                      border : 1px solid #5ECE7B;
                                       &:hover {
                                        background-color: white;
                                        color: #5ECE7B;
                                      }
                                     `:
                                      css`
                                          background-color: white;
                                          color: black;
                                           &:hover {
                                            background-color: black;
                                            color: white;
                                      }
                                          `
                                        
                                      }
                
                `
                





class CartDropdown extends Component  {
  
    render() {
        console.log(this.props);
        const {cartProducts, cartTotal} = this.props;
        console.log(cartProducts);
        return (
            <CartDropdownContainer>
                <ItemsSummaryDescriptionContainer><b>My Bag , </b>{cartProducts.length} items</ItemsSummaryDescriptionContainer>
                <CartItemsList>
      {cartProducts && (
        cartProducts.map(cartProduct => (
          <CartItemContainer key={cartProduct.id} cartProduct={cartProduct} />
        ))
      ) }
    </CartItemsList>
                <TotalItemsDescription>
                  <CartTotalHeading>Total</CartTotalHeading>
                <CartTotalPrice>$ {cartTotal}</CartTotalPrice>
                </TotalItemsDescription>
                <ButtonsContainer>
                  <Button  black>VIEWBAG</Button>
                  <Button    onClick={() => {
        this.props.history.push('/cart')
        this.props.toggleCartDropdown();
        
      }} green>CHECKOUT</Button>
                  </ButtonsContainer>
          
            </CartDropdownContainer>
        )
    }
}

export default withRouter(CartDropdown);
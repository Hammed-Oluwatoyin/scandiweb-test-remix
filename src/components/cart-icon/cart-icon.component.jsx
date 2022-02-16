import  React, {Component}  from "react";
 import {ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg'
 import styled from "styled-components";

    const StyledCartIcon = styled.div`
                                        padding-top: 8px;

                                        `
const CartBadge = styled.div`
  width: 20px;

  height: 20px;
  right: 55px;
  top: 23px;
  background-color: black;
  position: absolute;
  margin-bottom: 40px;
  border-radius: 50px;
  color: white;
`;

const CartBadgeNumber = styled.div`
  position: absolute;
  margin-left: 0px;
  color: white;
  font-weight: bold;
  right: 59px;
  top: 24px;
  font-size: 11.5px;
`;

const CartWrapper = styled.div`
            margin: 0;
`




 class CartIcon extends Component {

  
  render() {
              
    
    return (
      <CartWrapper onClick = {() => this.props.toggleCartDropdown()} >
      <StyledCartIcon>
        <ShoppingIcon />
      </StyledCartIcon>
       <CartBadge />
        <CartBadgeNumber>{this.props.productCount}</CartBadgeNumber>
      </CartWrapper>
      
    );
  }
}

export default CartIcon;
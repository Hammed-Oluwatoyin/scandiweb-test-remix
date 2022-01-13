import  React, {Component}  from "react";
 import {ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg'
 import styled from "styled-components";

    const StyledCartIcon = styled.div`
                                        padding-top: 8px;

                                        `
const CartBadge = styled.div`
  width: 20px;

  height: 20px;
  right: 54px;
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




 class CartIcon extends Component {

  
  render() {
    const {data} = this.props
    console.log(data);
    return (
      <>
      <StyledCartIcon>
        <ShoppingIcon />
      </StyledCartIcon>
       <CartBadge />
        <CartBadgeNumber>{data.data.productCount}</CartBadgeNumber>
      </>
      
    );
  }
}

export default CartIcon;
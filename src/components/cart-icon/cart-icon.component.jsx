import  React, {Component}  from "react";
 import {ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg'
 import styled from "styled-components";

    const StyledCartIcon = styled.div`
                                        padding-top: 8px;

                                        `





 class CartIcon extends Component {
  render() {
    return (
      <StyledCartIcon>
        <ShoppingIcon />
      </StyledCartIcon>
    );
  }
}

export default CartIcon;
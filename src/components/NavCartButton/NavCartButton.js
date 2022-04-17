import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";

const CartButton = styled.button`
  position: absolute;
  border: none;
  background-color: #fff;
  margin-left: 70px;
  margin-top: 5px;
  margin-bottom: 0px;
  cursor: pointer;
`;

const CartModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 325px;

  z-index: 20;
  height: 540px;
  background-color: #fff;
  right: 2px;

  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
`;

class NavCartButton extends Component {
  render() {
    const { showCartModal, toggleCartModal } = this.props;
    console.log(showCartModal);
    return (
      <>
        <CartButton onClick={() => toggleCartModal()}>
          <CartIcon />
          {showCartModal ? <CartModal /> : null}
        </CartButton>
      </>
    );
  }
}

export default NavCartButton;

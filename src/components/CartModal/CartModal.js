import React, { Component } from "react";

import styled from "styled-components";

const CartModalWrapper = styled.div`
  position: absolute;
  display: flex;

  width: 325px;

  z-index: 20;
  height: 540px;
  background-color: #fff;
  right: 2px;

  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
`;

class CartModal extends Component {
  render() {
    return (
      <>
        <CartModalWrapper />
      </>
    );
  }
}

export default CartModal;

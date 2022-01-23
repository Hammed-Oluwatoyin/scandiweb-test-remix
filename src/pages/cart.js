import React, { Component } from "react";
import PageLayout from "../components/PageLayout";
import styled from "styled-components";
import CartPageItemContainer from "../components/cart-page-item/cart-page-item-container";

const CartPageHeader = styled.div`
  font-weight: 700;
  font-size: 50px;
  font-family: Raleway;
  margin: 100px;
`;

class Cart extends Component {
  render() {
    const { cartProducts } = this.props;
    return (
      <PageLayout>
        <CartPageHeader>Cart</CartPageHeader>
        {cartProducts &&
          cartProducts.map((cartProduct) => (
            <CartPageItemContainer
              key={cartProduct.id}
              cartProduct={cartProduct}
            />
          ))}
      </PageLayout>
    );
  }
}

export default Cart;

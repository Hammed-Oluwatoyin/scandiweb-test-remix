import React, { Component } from "react";
import PageLayout from "../components/PageLayout";
import styled from "styled-components";
import CartPageItemContainer from "../components/cart-page-item/cart-page-item-container";
import { CurrencyContext } from "../Context/CurrencyContext";

const CartPageHeader = styled.div`
  font-weight: 700;
  font-size: 50px;
  font-family: Raleway;
  margin: 100px;
`;

class Cart extends Component {
  static contextType = CurrencyContext;
  render() {
    console.log(this.props);
    const { responseData } = this.props;
    const { cartProducts } = responseData.data;
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

import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import CartModalItem from "../CartModalItem/CartModalItem";
import { addProduct } from "../../redux/action";
import { getCartTotal, getCartProductCount } from "../../cart-utils";
import TotalCounter from "../TotalCounter/TotalCounter";

const CartModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  width: 400px;
  top: 80px;
  right: 100px;
  z-index: 20;
  height: 540px;
  background-color: #fff;

  font-family: Raleway;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.75);
`;

const ItemsSummaryDescriptionContainer = styled.div`
  margin-bottom: 20px;
  margin-left: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 25.6px;
  align-self: flex-start;
`;

const CartItemsList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 1px 5px;
  overflow-y: scroll;
`;

const TotalItemsDescription = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const CartTotalHeading = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const CartTotalPrice = styled.div`
  font-weight: bold;
`;

const Button = styled.button`
  height: 43px;
  width: 140px;
  margin-bottom: 20px;
  ${(p) =>
    p.green
      ? css`
          background-color: #5ece7b;
          color: white;
          border: 1px solid #5ece7b;
          &:hover {
            background-color: white;
            color: #5ece7b;
          }
        `
      : css`
          background-color: white;
          color: black;
          &:hover {
            background-color: black;
            color: white;
          }
        `}
`;

class CartModal extends Component {
  render() {
    const { currentCurrency, cartProducts, totalItemCount } = this.props;

    return (
      <>
        <CartModalWrapper>
          <ItemsSummaryDescriptionContainer>
            <b>My Bag , </b>
            {totalItemCount} items
          </ItemsSummaryDescriptionContainer>
          <CartItemsList>
            {this.props.cartProducts.map(
              (product) =>
                product && <CartModalItem product={product} key={product.id} />
            )}
          </CartItemsList>
          <TotalItemsDescription>
            <CartTotalHeading>Total</CartTotalHeading>
            <CartTotalPrice>
              <TotalCounter
                currentCurrency={currentCurrency}
                cartProducts={cartProducts}
              />
            </CartTotalPrice>
          </TotalItemsDescription>
          <ButtonsContainer>
            <Button black>VIEWBAG</Button>
            <Button green>CHECKOUT</Button>
          </ButtonsContainer>
        </CartModalWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cartProducts: state.cartProductsReducer.cartProducts,
    cartTotalPrice: getCartTotal(state.cartProductsReducer.cartProducts),
    currentCurrency: state.currencyReducer.currentCurrency,
    totalItemCount: getCartProductCount(state.cartProductsReducer.cartProducts),
  };
};
const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);

import React, { Component } from "react";

import styled, { css } from "styled-components";

import { ReactComponent as SmallIcon } from "../../assets/small-size-cart-icon.svg";
import { ReactComponent as MediumIcon } from "../../assets/medium-size-cart-icon.svg";
import { ReactComponent as PlusCartPageIcon } from "../../assets/plus-square-cart-icon.svg";
import { ReactComponent as MinusCartPageIcon } from "../../assets/minus-square-cart-icon.svg";
import Slider from "../../components/slider/slider";
import { connect } from "react-redux";
import { getCartProductCount, getCartTotal } from "../../cart-utils";
import { addProduct, removeProduct } from "../../redux/action";
import TotalCounter from "../../components/TotalCounter/TotalCounter";

const CartPageContainer = styled.div`
  height: 100vh;

  padding-top: 80px;
  padding-left: 100px;
  padding-right: 100px;
`;

const CartPageHeader = styled.div`
  margin-top: 80px;

  height: 40px;
  width: 84px;
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;
  margin-bottom: 55px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
`;

const CartItemContainer = styled.div`
  width: 85vw;
  height: 304px;
  margin-top: 25px;
  display: flex;
  margin-bottom: 25px;
  flex-direction: column;
`;

const CartItemBrand = styled.div`
  font-size: 30px;
  line-height: 27px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const CartItemName = styled.div`
  font-size: 30px;
  line-height: 27px;
  font-weight: regular;
`;

const CartItemCurrencyAndPrice = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TaxLabel = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
`;
const TaxValue = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
`;

const TaxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;
`;
const QuantityLabel = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
`;
const QuantityValue = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
`;

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70px;
  margin-top: 8px;
`;
const TotalLabel = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
`;
const TotalValue = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  margin-bottom: 60px;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;
  margin-top: 24px;
`;

const BrandNamePriceAttributes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Quantity = styled.div`
  font-size: 24px;
  line-height: 38.4px;
`;

const IncrementQuantityDecrementImageCarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
`;
const IncrementQuantityDecrement = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Item = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DisplayValueContainer = styled.div`
  display: flex;
`;

const DisplayOptions = styled.div`
  display: flex;
`;

const DisplayValue = styled.h5`
  margin-left: 5px;
  font-size: 20px;
`;

const ColorDisplayValue = styled.div`
  margin-left: 5px;
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
`;

const AttributeName = styled.h3`
  margin: 3px;
`;

class CartPage extends Component {
  render() {
    const { cartProducts, totalItemCount, addProduct, removeProduct } =
      this.props;
    return (
      <CartPageContainer>
        <CartPageHeader> CART</CartPageHeader>
        {cartProducts.map((product) => (
          <CartItemContainer key={product.name}>
            <HorizontalLine />
            <Item>
              <BrandNamePriceAttributes>
                <CartItemBrand>{product.brand}</CartItemBrand>
                <CartItemName>{product.name}</CartItemName>
                <CartItemCurrencyAndPrice>
                  {
                    product.prices.filter(
                      (price) =>
                        price.currency.symbol === this.props.currentCurrency
                    )[0].currency.symbol
                  }{" "}
                  {
                    product.prices.filter(
                      (price) =>
                        price.currency.symbol === this.props.currentCurrency
                    )[0].amount
                  }
                </CartItemCurrencyAndPrice>
                {product &&
                  product.attributes.map((attr) => (
                    <DisplayValueContainer key={attr.id}>
                      <AttributeName>{attr.name.toUpperCase()} :</AttributeName>
                      <DisplayOptions>
                        {attr.items.map((item) =>
                          item.value.includes("#") ? (
                            <ColorDisplayValue
                              color={item.value}
                              key={item.value}
                            />
                          ) : (
                            <DisplayValue key={item.value}>
                              {item.value}
                            </DisplayValue>
                          )
                        )}
                      </DisplayOptions>
                    </DisplayValueContainer>
                  ))}
              </BrandNamePriceAttributes>
              <IncrementQuantityDecrementImageCarouselWrapper>
                <IncrementQuantityDecrement>
                  <div onClick={() => addProduct(product)}>
                    <PlusCartPageIcon />
                  </div>

                  <Quantity>{product.quantity}</Quantity>
                  <MinusCartPageIcon onClick={() => removeProduct(product)} />
                </IncrementQuantityDecrement>

                <Slider gallery={product.gallery} />
              </IncrementQuantityDecrementImageCarouselWrapper>
            </Item>
          </CartItemContainer>
        ))}

        <HorizontalLine />
        <TaxWrapper>
          <TaxLabel> Tax: </TaxLabel>
          <TaxValue>{this.props.currentCurrency} 15.00</TaxValue>
        </TaxWrapper>
        <QuantityWrapper>
          <QuantityLabel> Qty: </QuantityLabel>
          <QuantityValue>{totalItemCount}</QuantityValue>
        </QuantityWrapper>
        <TotalWrapper>
          <TotalLabel> Total: </TotalLabel>
          <TotalValue>
            <TotalCounter
              currentCurrency={this.props.currentCurrency}
              cartProducts={cartProducts}
            />
          </TotalValue>
        </TotalWrapper>
      </CartPageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProductsReducer.cartProducts,
    cartTotalPrice: getCartTotal(state.cartProductsReducer.cartProducts),
    currentCurrency: state.currencyReducer.currentCurrency,
    totalItemCount: getCartProductCount(state.cartProductsReducer.cartProducts),
  };
};
const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
  removeProduct: (product) => dispatch(removeProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

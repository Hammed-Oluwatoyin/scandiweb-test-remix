import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addProduct } from "../../redux/action";
import { ReactComponent as SquareMinusIcon } from "../../assets/minus-square-dropdown-icon.svg";
import { ReactComponent as SquarePlusIcon } from "../../assets/plus-square-dropdown-icon.svg";

const CartItemContainer = styled.div`
  width: 95%;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  height: 300px;
  margin-bottom: 40px;
  font-weight: 500;
`;
const TitlePriceSizeContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 15px;
`;
const ImageContainer = styled.img`
  width: 40%;
  height: 190px;
  background-color: black;

  object-fit: cover;
`;

const PlusQuantityMinusContainer = styled.div`
  width: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const QuantityNumberContainer = styled.div`
  font-weight: bold;
  padding-left: 8px;
`;
const SqaurePlusIconWrapper = styled.div`
  padding: 0;
`;
const SquareMinusIconWrapper = styled.div`
  padding: 0;
`;

const Title = styled.h3`
  font-weight: 700;
`;

const Price = styled.div`
  margin-top: 15px;
  font-weight: 1000;
`;

const CurrencySymbol = styled.span``;

const AttributeName = styled.h3`
  margin: 3px;
`;

const DisplayValueContainer = styled.div`
  margin-top: 20px;
`;

const DisplayOptions = styled.div`
  display: flex;
`;

const DisplayValue = styled.h5`
  margin-left: 5px;
`;

const ColorDisplayValue = styled.div`
  margin-left: 5px;
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
`;

class CartModalItem extends Component {
  render() {
    const { addProduct, product } = this.props;

    return product ? (
      <CartItemContainer>
        <TitlePriceSizeContainer>
          <Title>
            {product.brand} {product.name}
          </Title>

          <Price>
            <CurrencySymbol></CurrencySymbol>{" "}
            {
              product.prices.filter(
                (price) => price.currency.symbol === this.props.currentCurrency
              )[0].currency.symbol
            }{" "}
            {
              product.prices.filter(
                (price) => price.currency.symbol === this.props.currentCurrency
              )[0].amount
            }
            {/* {product.prices.map(
              (cur) =>
                cur.currency === this.props.currentCurrency &&
                `${cur.currency.symbol} ${
                  Math.round(cur.amount * item.value * 100) / 100
                }`
            )} */}
          </Price>
          {product &&
            product.attributes.map((attr) => (
              <DisplayValueContainer key={attr.id}>
                <AttributeName>{attr.name} :</AttributeName>
                <DisplayOptions>
                  {attr.items.map((item) =>
                    item.value.includes("#") ? (
                      <ColorDisplayValue color={item.value} key={item.value} />
                    ) : (
                      <DisplayValue key={item.value}>{item.value}</DisplayValue>
                    )
                  )}
                </DisplayOptions>
              </DisplayValueContainer>
            ))}
          {/* <SizeContainer>
            <SizeTitle>Size :</SizeTitle>

            <SizeTypes>
              <SmallSizeIcon />
              <MediumSizeIcon />
            </SizeTypes>
          </SizeContainer>
          <ColorContainer>
            <ColorTitle>Color :</ColorTitle>
            <ColorTypes>
              <Black />
              <Blue />
              <Yellow />
            </ColorTypes>
          </ColorContainer> */}
        </TitlePriceSizeContainer>
        <PlusQuantityMinusContainer>
          <SqaurePlusIconWrapper onClick={() => addProduct(product)}>
            <SquarePlusIcon />
          </SqaurePlusIconWrapper>

          <QuantityNumberContainer>{product.quantity}</QuantityNumberContainer>
          <SquareMinusIconWrapper>
            <SquareMinusIcon />
          </SquareMinusIconWrapper>
        </PlusQuantityMinusContainer>
        <ImageContainer src={product.gallery[0]} />
      </CartItemContainer>
    ) : null;
  }
}

const mapStateToProps = (state) => {
  return {
    currentCurrency: state.currencyReducer.currentCurrency,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModalItem);

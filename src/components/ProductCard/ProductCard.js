import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as CircleIcon } from "../../assets/circle-icon.svg";
import { connect } from "react-redux";
import { addProduct } from "../../redux/action";

export const StyledCircleIcon = styled.div`
  position: relative;
  left: 300px;
  bottom: 100px;
  display: none;
`;

const OutOfStock = styled.div`
  position: relative;
  z-index: 10;
  top: 45%;
  left: 75%;

  font-size: 24px;
  font-weight: bold;
  opacity: 0.3;
  transform: translate(-50%, -50%);
`;

const Card = styled.div`
  width: 386px;
  height: 500px;
  margin-bottom: 30px;
  /* ${OutOfStock} {
    z-index: 100;
    top: 45%;
    left: 75%;

    font-size: 24px;
    font-weight: bold;
    opacity: 0.3;
    transform: translate(-50%, -50%);
  } */

  &:hover {
    ${StyledCircleIcon} {
      display: flex;
    }
    box-shadow: 2px 1px 10px 2px rgba(0, 0, 0, 0.75);
  }
`;

const ProductImage = styled.img`
  display: block;
  width: 354px;
  height: 330px;
  object-fit: cover;
  margin: 14px auto;
  opacity: ${(p) => (p.instock ? 1 : 0.5)};
`;

const ProductBrandAndName = styled.h2`
  margin-left: 14.5px;
  margin-top: 14.5px;
`;

const ProductPrice = styled.h2`
  margin-left: 14.5px;
  margin-top: 14.5px;
`;

const InStock = styled.div`
  position: relative;
  z-index: 10;
  top: 45%;
  left: 75%;

  font-size: 24px;
  font-weight: bold;
  opacity: 0;
  transform: translate(-50%, -50%);
`;

class ProductCard extends Component {
  render() {
    const { product, addProduct } = this.props;

    return (
      product && (
        <>
          <Card>
            {!product.inStock ? (
              <OutOfStock>OUT OF STOCK</OutOfStock>
            ) : (
              <InStock>IN STOCK</InStock>
            )}
            <ProductImage src={product.gallery[0]} instock={product.inStock} />
            <ProductBrandAndName>
              {product.brand} {product.name}
            </ProductBrandAndName>
            <ProductPrice>
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
            </ProductPrice>
            {product.inStock ? (
              <StyledCircleIcon onClick={() => addProduct(product)}>
                <CircleIcon instock={product.inStock.toString()} />
              </StyledCircleIcon>
            ) : null}
          </Card>
        </>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProductsReducer.cartProducts,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

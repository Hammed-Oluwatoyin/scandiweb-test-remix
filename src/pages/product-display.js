import React, { Component } from "react";
import styled from "styled-components";
import PageLayout from "../components/PageLayout";
import { ReactComponent as ExtraLargeIcon } from "../assets/product-display-extra-large-icon.svg";
import { ReactComponent as LargeIcon } from "../assets/product-display-large-icon.svg";
import { ReactComponent as SmallIcon } from "../assets/product-display-small-icon.svg";
import { ReactComponent as MediumIcon } from "../assets/product-display-medium-icon.svg";
import { CurrencyContext } from "../Context/CurrencyContext";

const ProductDisplayWrapper = styled.div`
  height: 665px;
  width: 1440px;
  margin-left: 107px;
  display: flex;
  flex-direction: row;
  margin-top: 170px;
`;

const TripleImageWrapper = styled.div`
  margin-top: 60px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

const SingleImageWrapper = styled.img`
  width: 88px;
  height: 88px;
  margin-bottom: 32px;
`;

const BigImage = styled.img`
  background-color: green;
  width: 610px;
  height: 511px;

  margin-left: 60px;
  margin-top: 60px;
`;

const ProductContent = styled.div`
  width: 292px;
  height: 513px;
  margin-left: 120px;
  margin-top: 60px;
`;
const ProductContentHeader = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 16px;
`;

const ProductContentTitle = styled.div`
  font-size: 30px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 45px;
`;
const ProductContentSize = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  font-family: Roboto Condensed;
`;

const ExtraLargeLargeMediumSmallContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductContentPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  font-family: Roboto Condensed;
  margin-top: 20px;
`;

const ProductContentPriceNumber = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 18px;
  font-family: Raleway;
  margin-top: 40px;
`;

const AddToCartButton = styled.button`
  background-color: #5ece7b;
  color: white;
  width: 100%;
  height: 52px;
  margin-top: 20px;
  border: 1px solid #5ece7b;
`;

const DescriptionNote = styled.div`
  margin-top: 40px;
  margin-bottom: 72px;
`;
const ColorContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ColorFilter = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
`;

class ProductDisplay extends Component {
  static contextType = CurrencyContext;
  render() {
    const { word, countries } = this.context;

    const splitedWord = word.split(" ");

    const country = splitedWord[1];

    const { symbol, number } = countries[country];

    const { gallery, brand, name, prices, description, attributes } =
      this.props.responseData.product;

    const { product } = this.props.responseData;

    return (
      <PageLayout>
        <ProductDisplayWrapper>
          <TripleImageWrapper>
            <SingleImageWrapper src={gallery[0]} />
            <SingleImageWrapper src={gallery[0]} />

            <SingleImageWrapper src={gallery[0]} />
          </TripleImageWrapper>
          <BigImage src={gallery[0]} />
          <ProductContent>
            <ProductContentHeader>{brand}</ProductContentHeader>
            <ProductContentTitle>{name}</ProductContentTitle>
            <ProductContentSize>SIZE</ProductContentSize>
            <ExtraLargeLargeMediumSmallContainer>
              <ExtraLargeIcon />
              <SmallIcon />
              <MediumIcon />
              <LargeIcon />
            </ExtraLargeLargeMediumSmallContainer>
            <ColorContainer>
              {attributes.length === 0
                ? null
                : attributes.length === 1 && attributes[0].type !== "swatch"
                ? null
                : attributes.length === 3 && attributes[0].type !== "swatch"
                ? null
                : attributes.length === 2 && attributes[0].type === "swatch"
                ? attributes[0].items.map((color) => (
                    <ColorFilter color={color.value} key={color.id} />
                  ))
                : attributes.length === 2 && attributes[1].type === "swatch"
                ? attributes[1].items.map((color) => (
                    <ColorFilter color={color.value} key={color.id} />
                  ))
                : null}
            </ColorContainer>
            <ProductContentPrice>PRICE</ProductContentPrice>
            <ProductContentPriceNumber>
              {`${symbol}${prices[number].amount}`}
            </ProductContentPriceNumber>
            <AddToCartButton
              onClick={() => {
                this.props.addItem(product, number);
              }}
            >
              ADD TO CART
            </AddToCartButton>
            <DescriptionNote>
              {description.replace(/(<([^>]+)>)/gi, "")}
            </DescriptionNote>
          </ProductContent>
        </ProductDisplayWrapper>
      </PageLayout>
    );
  }
}

export default ProductDisplay;

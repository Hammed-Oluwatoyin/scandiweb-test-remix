import React, { Component } from 'react';
import styled from "styled-components";



import { ReactComponent as SmallSizeCartIcon } from "../../assets/small-size-cart-icon.svg";
import { ReactComponent as MediumSizeCartIcon } from "../../assets/medium-size-cart-icon.svg";
import { ReactComponent as SquareMinusCartIcon } from "../../assets/minus-square-cart-icon.svg";
import { ReactComponent as SquarePlusCartIcon } from "../../assets/plus-square-cart-icon.svg";
import { CurrencyContext } from '../../Context/CurrencyContext';

const CartWrapper = styled.div`
  width: 1097px;
  margin: 100px;
`;


const HorizontalLineBreak = styled.hr``;

const CartPageProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitlePriceSizeWrapper = styled.div`
  height: 226px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProductTitle = styled.div`
  font-weight: 600;
  width: 292px;
  font-size: 30px;
  line-height: 27px;
`;

const SubProductTitle = styled.div`
  font-weight: 400;
  width: 292px;
  font-size: 30px;
  line-height: 27px;
`;

const PriceProduct = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
`;

const ImageWithIncrementAndDecrementCount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 250px;
`;

const MediumSizeWrapper = styled.div`
  width: 10px;
  margin-left: 20px;
`;

const Image = styled.img`
  
  height: 200px;
  width: 200px;
`;
const SizeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const OperationIcon = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

 const QuantityNumberContainer = styled.div`
                                      font-weight: bold;
                                      padding-left: 16px;
                                    `


 class CartPageItem extends Component {

    static contextType = CurrencyContext;
  render() {

    const {word, countries} = this.context;
  
   const splitedWord = word.split(" ");
  
   const country = splitedWord[1];
   

  const {symbol, number} = countries[country];
      
      
    return (
               <CartWrapper>
          
          <HorizontalLineBreak />
          <CartPageProductWrapper>
            <TitlePriceSizeWrapper>
              <ProductTitle>{this.props.cartProduct && this.props.cartProduct.brand} </ProductTitle>
              <SubProductTitle>{this.props.cartProduct && this.props.cartProduct.name}</SubProductTitle>
                
              <PriceProduct><span>{symbol}</span>{this.props.cartProduct && this.props.cartProduct.prices[number].amount} </PriceProduct>
              <SizeWrapper>
                <SmallSizeCartIcon />
                <MediumSizeWrapper>
                  <MediumSizeCartIcon />
                </MediumSizeWrapper>
              </SizeWrapper>
            </TitlePriceSizeWrapper>

            <ImageWithIncrementAndDecrementCount>
              <OperationIcon>
                
                <SquarePlusCartIcon onClick={() => {this.props.addProduct(this.props.cartProduct, number)}} />
                <QuantityNumberContainer >{this.props.cartProduct.quantity}</QuantityNumberContainer>
                <SquareMinusCartIcon  onClick={() => {this.props.removeProduct(this.props.cartProduct, number )}} />
              </OperationIcon>

              <Image src={this.props.cartProduct && this.props.cartProduct.gallery[0]} />
            </ImageWithIncrementAndDecrementCount>
          </CartPageProductWrapper>
        </CartWrapper>

    ) ;
  }
}


export default CartPageItem;

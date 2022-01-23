import React, { Component } from 'react';
import styled from "styled-components";



import { ReactComponent as SmallSizeCartIcon } from "../../assets/small-size-cart-icon.svg";
import { ReactComponent as MediumSizeCartIcon } from "../../assets/medium-size-cart-icon.svg";
import { ReactComponent as SquareMinusCartIcon } from "../../assets/minus-square-cart-icon.svg";
import { ReactComponent as SquarePlusCartIcon } from "../../assets/plus-square-cart-icon.svg";

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


 class CartPageItem extends Component {

    
  render() {
      console.log(this.props)
      
    return (
               <CartWrapper>
          
          <HorizontalLineBreak />
          <CartPageProductWrapper>
            <TitlePriceSizeWrapper>
              <ProductTitle>{this.props.cartProduct && this.props.cartProduct.brand} </ProductTitle>
              <SubProductTitle>{this.props.cartProduct && this.props.cartProduct.name}</SubProductTitle>
              <PriceProduct>{this.props.cartProduct && this.props.cartProduct.prices[0].amount} </PriceProduct>
              <SizeWrapper>
                <SmallSizeCartIcon />
                <MediumSizeWrapper>
                  <MediumSizeCartIcon />
                </MediumSizeWrapper>
              </SizeWrapper>
            </TitlePriceSizeWrapper>

            <ImageWithIncrementAndDecrementCount>
              <OperationIcon>
                <SquareMinusCartIcon />
                <SquarePlusCartIcon />
              </OperationIcon>

              <Image src={this.props.cartProduct && this.props.cartProduct.gallery[0]} />
            </ImageWithIncrementAndDecrementCount>
          </CartPageProductWrapper>
        </CartWrapper>

    ) ;
  }
}


export default CartPageItem;

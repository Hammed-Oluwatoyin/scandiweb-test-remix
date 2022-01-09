import React from 'react';
import styled from 'styled-components';
import {ReactComponent as SmallSizeIcon } from "../../assets/small-size-dropdown-icon.svg"
import {ReactComponent as MediumSizeIcon} from "../../assets/medium-size-dropdown-icon.svg"
import {ReactComponent as SquareMinusIcon} from "../../assets/minus-square-dropdown-icon.svg"
import {ReactComponent as SquarePlusIcon} from "../../assets/plus-square-dropdown-icon.svg"


const  CartItemContainer =  styled.div`
                             width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 150px;
  margin-bottom: 15px;
                            
                            `
  const TitlePriceSizeContainer = styled.div`
          width: 35%;
          display: flex;
          flex-direction: column; 
          justify-content: space-evenly; 
          
  `
  const ImageContainer = styled.img`
          width: 105px;
          height:137px;
          
          margin-right: 10px;
     `
  const SizeContainer = styled.div`
                          width: 50%;
                        display: flex;
                        flex-direction: row;   
                        justify-content: space-between;  
                            
                            `
  const PlusQuantityMinusContainer = styled.div`
                                    width: 20px;
                                    height: 137px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content:space-between;
                                     `
  const QuantityNumberContainer = styled.div`
                                      font-weight: bold;
                                      padding-left: 8px;
                                    `



const CartItem = (props) => {

    

    return (
  
    
    <CartItemContainer >
      <TitlePriceSizeContainer>
        <span>{props.cartItem.name}</span>
        <div>$50.00</div>
        <SizeContainer>
          <SmallSizeIcon/> 
            <MediumSizeIcon/>
        </SizeContainer>
       
      </TitlePriceSizeContainer>
     <PlusQuantityMinusContainer>
          <SquarePlusIcon/>
          <QuantityNumberContainer>1</QuantityNumberContainer>
          <SquareMinusIcon/>
      </PlusQuantityMinusContainer>
       <ImageContainer src={props.cartItem.gallery[0]}/>  
    
    </CartItemContainer>
  
);
}

export default CartItem;
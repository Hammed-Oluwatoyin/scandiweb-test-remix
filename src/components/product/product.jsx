import React from 'react';

import { ReactComponent as CircleIcon } from "../../assets/circle-icon.svg";
import {withRouter} from "react-router-dom";




import styled from "styled-components";

export const CategoryName = styled.div`
  font-size: 42px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 18px;
  line-height: 67.2px;
  margin: 80px 0px 0px 101px;
  z-index: 0;
`;

export const StyledCircleIcon = styled.div`
  padding-top: 8px;
  display:none;
  position: absolute;
  top: 77%;
  left: 80%;
  z-index: 100;
  width: 80px;
  height: 40px;
  
`;

export const ProductWrapper = styled.div`
margin: 10px;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: white;
    &:hover {
    ${StyledCircleIcon}{
        display: flex;
  };
    
  }
  
  
  
`;

const OutOfStock = styled.div`
position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    font-size: 24px;
    opacity: 0.3;
    transform: translate(-50%, -50%);
`

export const ProductCard = styled.div`
  
  position : relative;
  display: flex;
  flex-direction: column;
  margin: 2.6%;
  width: 90%;
  height: 600px;
  padding: 2%;
  z-index: 1;
  ${OutOfStock};
  &:hover {
    ${StyledCircleIcon}{
        display: flex;
  };
    box-shadow: 2px 1px 10px 2px rgba(0, 0, 0, 0.75);
  }

  
 
`;

export const ProductImage = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 2px;
  opacity: ${(p) => (p.instock ? 1 : 0.5)};
  cursor: pointer;
`;

export const ProductName = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 1%;
  line-height: 30px;
  cursor: pointer;
`;

export const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 500;
  cursor: pointer;
`;


const Product = ({ product, addItem, history ,match }) => {
  

  return (
    <ProductWrapper>
        <ProductCard  onClick={() => history.push(`/product/${product.id}`)} >

      
              {!product.inStock && (
                <OutOfStock>OUT OF STOCK</OutOfStock>
              )}
              <ProductImage
              
                src={product.gallery[0]}
                instock={product.inStock}
              />
             
              <ProductName >{product.name}</ProductName>
              <ProductPrice >
                <span>$</span>
                {product.prices[0].amount}
              </ProductPrice>
               
                 
            </ProductCard>
            <StyledCircleIcon  onClick={() => {
          addItem(product)}}>
                   <CircleIcon/>
                 </StyledCircleIcon>
      
          
        
        
      
           
    </ProductWrapper>

            
  );
};

export default withRouter(Product);
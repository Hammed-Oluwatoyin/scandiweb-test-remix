import React from 'react';
import { ProductImage,ProductName, ProductPrice, ProductCard } from '../../category/categoryElements';
import { ReactComponent as CircleIcon } from "../../assets/circle-icon.svg";
import { StyledCircleIcon} from '../../category/categoryElements';


const Product = ({ product, addItem }) => {
  

  return (
    <ProductCard >
              {!product.inStock && (
                <div className="outofstock">OUT OF STOCK</div>
              )}
              <ProductImage
                src={product.gallery[0]}
                instock={product.inStock}
              />
              <StyledCircleIcon
        onClick={() => {
          addItem(product);
        }}
      >
        <CircleIcon />
      </StyledCircleIcon>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>
                <span>$</span>
                {product.prices[0].amount}
              </ProductPrice>
            </ProductCard>
  );
};

export default Product;
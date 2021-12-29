import { Component } from "react";
import AddItemIcon from "../components/add-item-icon/add-item-icon";
import {
  CategoryName,
  CategoryContainer,
  ProductWrapper,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./categoryElements";

class Category extends Component {
  render() {
    console.log(this.props.data.category.products[0].inStock);
    return (
      <CategoryContainer>
        <CategoryName>{this.props.data.category.name}</CategoryName>
        <ProductWrapper>
          {this.props.data.category.products.map((product) => (
            <ProductCard key={product.id}>
              {!product.inStock && (
                <div className="outofstock">OUT OF STOCK</div>
              )}
              <ProductImage
                src={product.gallery[0]}
                instock={product.inStock}
              />
              <AddItemIcon />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>
                <span>$</span>
                {product.prices[0].amount}
              </ProductPrice>
            </ProductCard>
          ))}
        </ProductWrapper>
      </CategoryContainer>
    );
  }
}

export default Category;

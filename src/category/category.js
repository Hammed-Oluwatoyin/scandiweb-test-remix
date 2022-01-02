import { Component } from "react";
import AddItemIcon from "../components/add-item-icon/add-item-icon";
import { CurrencyContext } from "../Context/CurrencyContext";
import {
  CategoryName,
  CategoryContainer,
  ProductWrapper,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./categoryElements";

const Currencies = {
  USD: 0,
  EURO: 1,
  JPY: 2,
};

class Category extends Component {
  static contextType = CurrencyContext;

  render() {
    const { currency } = this.context;

    console.log(Currencies[currency]);
    console.log(currency);

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

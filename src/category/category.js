import { Component } from "react";
import { addItemToCart } from "../cart-utils";
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
import { default as ProductContainer } from "../components/product/product.container";

const Currencies = {
  USD: 0,
  EURO: 1,
  JPY: 3,
};

class Category extends Component {
  static contextType = CurrencyContext;

  render() {
    const { currency } = this.context;

    const index = Currencies[currency];
    console.log(index);

    console.log(this.props.data.category.products[0].inStock);
    return (
      <CategoryContainer>
        <CategoryName>{this.props.data.category.name}</CategoryName>
        <ProductWrapper>
          {this.props.data.category.products.map((product) => (
            <ProductContainer key={product.id} product={product} />
          ))}
        </ProductWrapper>
      </CategoryContainer>
    );
  }
}

export default Category;

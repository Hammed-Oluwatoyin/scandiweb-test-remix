import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import {
  allProductsRequest,
  pricesRequest,
  productRequest,
} from "../../services/graphql-requests";

const ProductDisplayPageContainer = styled.div`
  padding-top: 100px;
`;

const ProductDisplayWrapper = styled.div`
  height: 665px;
  width: 1440px;
  margin-left: 107px;
  display: flex;
  flex-direction: row;
  margin-top: 70px;
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
  object-fit: cover;
`;

const BigImage = styled.img`
  background-color: green;
  width: 610px;
  height: 511px;
  margin-left: 60px;
  margin-top: 60px;
  object-fit: cover;
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

class ProductDisplayPage extends Component {
  state = {
    productId: "",
    selectImage: null,
  };

  onSelectImage = (e) => {
    const image = e.target.src;
    return this.setState({
      selectImage: image,
    });
  };

  componentDidMount() {
    const { match } = this.props;
    const productId = match.params.productId;
    this.setState({ productId });
  }
  render() {
    const { productId } = this.state;
    console.log(productId);
    console.log(this.props);
    return (
      <Query query={productRequest(productId)}>
        {({ loading, data, error }) => {
          if (loading) return <div>loading...</div>;

          return (
            data.product && (
              <ProductDisplayPageContainer>
                <ProductDisplayWrapper>
                  <TripleImageWrapper>
                    {data.product.gallery.map((item) => (
                      <SingleImageWrapper
                        onClick={(e) => this.onSelectImage(e)}
                        src={item}
                      />
                    ))}
                  </TripleImageWrapper>
                  <BigImage
                    src={
                      !this.state.selectImage
                        ? data.product.gallery[0]
                        : this.state.selectImage
                    }
                  />
                </ProductDisplayWrapper>
              </ProductDisplayPageContainer>
            )
          );
        }}
      </Query>
    );
  }
}

export default ProductDisplayPage;

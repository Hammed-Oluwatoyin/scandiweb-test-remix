import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";
import { getCartProductCount } from "../../cart-utils";

const HeaderWrapper = styled.header`
  height: 80px;
  box-sizing: border-box;
  padding: 25px 101px 25px 101px;
  position: fixed;
  width: 100vw;
  z-index: 200;

  background-color: #fff;
`;

class Header extends Component {
  render() {
    const { totalItemCount } = this.props;
    return (
      <HeaderWrapper>
        <Nav totalItemCount={totalItemCount} />
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cartProducts: state.cartProductsReducer.cartProducts,

    totalItemCount: getCartProductCount(state.cartProductsReducer.cartProducts),
  };
};

export default connect(mapStateToProps, null)(Header);

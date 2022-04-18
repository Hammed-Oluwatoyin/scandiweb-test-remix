import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import CartModal from "../CartModal/CartModal";
import { connect } from "react-redux";
import { toggleHiddenCartModal, closeCurrencyModal } from "../../redux/action";

const CartButton = styled.button`
  position: absolute;
  border: none;
  background-color: #fff;
  margin-left: 70px;
  margin-top: 5px;
  margin-bottom: 0px;
  cursor: pointer;
`;

class NavCartButton extends Component {
  toggleModals = () => {
    if (this.props.showCurrencyModal) {
      this.props.toggleHiddenCartModal();
      this.props.closeCurrencyModal();
    } else {
      this.props.toggleHiddenCartModal();
    }
  };

  render() {
    const { showCartModal } = this.props;
    console.log(this.props);
    return (
      <>
        <CartButton onClick={() => this.toggleModals()}>
          <CartIcon />
          {showCartModal ? <CartModal /> : null}
        </CartButton>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    showCartModal: state.cartModalReducer.showCartModal,
    showCurrencyModal: state.currencyModalReducer.showCurrencyModal,
  };
};
const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCartModal: () => dispatch(toggleHiddenCartModal()),
  closeCurrencyModal: () => dispatch(closeCurrencyModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavCartButton);

import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import { currenciesRequest } from "../../services/graphql-requests";
import { connect } from "react-redux";
import {
  changeCurrency,
  toggleHiddenCurrencyModal,
  closeCartModal,
} from "../../redux/action";
import { ReactComponent as ArrowUpIcon } from "../../assets/arrow-up-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/arrow-down-icon.svg";

const NavCurrencyBtn = styled.button`
  position: relative;
  font-family: Raleway;
  margin-left: 25px;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  border: none;
  background-color: #fff;
  cursor: pointer;
  transition: all 250ms;
`;

const CurrencyModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 114px;

  z-index: 30;

  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

const CurrencyOptionsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 114px;
  background-color: #fff;
  z-index: 20;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

const CurrencyOption = styled.button`
  position: relative;
  padding: 0;
  margin-bottom: 21px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28.8px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  transition: all 250ms;
  z-index: 20;
`;

const CurrencyIconAndArrowIconWrapper = styled.div`
  margin: 0px;
`;

const NavCurrencyButtonWrapper = styled.div`
  position: absolute;
  margin-right: 10px;
`;

class NavCurrencyButton extends Component {
  selectCurrency = (e) => {
    this.props.onChangeCurrency(e.target.id);
  };

  toggleModalss = () => {
    if (this.props.showCartModal) {
      this.props.closeCartModal();
      this.props.toggleHiddenCurrencyModal();
    } else {
      this.props.toggleHiddenCurrencyModal();
    }
  };

  render() {
    const { showCurrencyModal } = this.props;
    return (
      <Query query={currenciesRequest()}>
        {({ loading, data, error }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <p>Error : </p>;

          const { currencies } = data;

          return (
            <NavCurrencyButtonWrapper onClick={() => this.toggleModalss()}>
              <CurrencyIconAndArrowIconWrapper>
                <NavCurrencyBtn>
                  {
                    currencies.filter(
                      (currency) =>
                        currency.symbol === this.props.currentCurrency
                    )[0].symbol
                  }
                </NavCurrencyBtn>
                {showCurrencyModal ? <ArrowDownIcon /> : <ArrowUpIcon />}
              </CurrencyIconAndArrowIconWrapper>
              {showCurrencyModal ? (
                <CurrencyModal>
                  <CurrencyOptionsWrapper>
                    {currencies &&
                      currencies.map((currency, index) => {
                        return (
                          <CurrencyOption
                            key={currency.symbol}
                            id={currency.symbol}
                            onClick={this.selectCurrency}
                          >
                            {currency.symbol}
                            {"  "}
                            {currency.label}
                          </CurrencyOption>
                        );
                      })}
                  </CurrencyOptionsWrapper>
                </CurrencyModal>
              ) : null}
            </NavCurrencyButtonWrapper>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCurrency: state.currencyReducer.currentCurrency,
    showCartModal: state.cartModalReducer.showCartModal,
    showCurrencyModal: state.currencyModalReducer.showCurrencyModal,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onChangeCurrency: (currency) => dispatch(changeCurrency(currency)),
  toggleHiddenCurrencyModal: () => dispatch(toggleHiddenCurrencyModal()),
  closeCartModal: () => dispatch(closeCartModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavCurrencyButton);

import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

import CartIcon from "./cart-icon/cart-icon.component";
import CurrencyFilterIcon from "./currency-icon/currency-icon.component";
import CurrencyDropdown from "./currency-dropdown/currency-dropdown.component";
import CartItemDropdown from "./cart-item-dropdown/cart-item-dropdown.component";
import { ReactComponent as DollarFilter } from "../assets/dollar-filter.svg";
import { ReactComponent as EuroFilter } from "../assets/euro-filter.svg";
import { ReactComponent as YenFilter } from "../assets/yen-filter.svg";
import { Link as ReactRouterDomLink, withRouter } from "react-router-dom";

const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  z-index: 100;
  top: 0;
  background: #ffffff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 13%;
  border-bottom: none;
  margin: auto auto auto 10%;
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const LogoContainer = styled.div`
  margin: auto 40% auto 0;
`;

const CurrencyDropDownNav = styled.div`
  width: 25px;
  margin: 27px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CartItemDropdownNav = styled.div`
  margin: 25px 50px;
`;

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  text-decoration: none;
  font-weight: ${(p) => (p.isActive ? "1000" : "200")};
`;

const options = [
  { label: "USD", value: "USD", element: <DollarFilter /> },
  {
    label: "EURO",
    value: "EURO",
    element: <EuroFilter />,
  },
  {
    label: "YEN",
    value: "YEN",
    element: <YenFilter />,
  },
];

class Header extends Component {
  state = {
    isCurrencyDropdownOpen: false,
    isCartDropdownOpen: false,
    selectedCurrency: options[0],
    selectedIndex: 0,
  };

  handleCurrencyToggle() {
    if (this.state.isCartDropdownOpen) {
      this.setState({
        isCartDropdownOpen: false,
      });
    }
    this.setState({
      isCurrencyDropdownOpen: !this.state.isCurrencyDropdownOpen,
    });
  }

  handleCartToggle() {
    if (this.state.isCurrencyDropdownOpen) {
      this.setState({
        isCurrencyDropdownOpen: false,
      });
    }

    this.setState({
      isCartDropdownOpen: !this.state.isCartDropdownOpen,
    });
  }

  ChangeCurrencyDropdownToFalse = () => {
    this.setState({
      isCurrencyDropdownOpen: false,
    });
  };

  handleChangeSelectedCurrency = (newSelectedCurrency, event, i) => {
    this.setState({
      selectedCurrency: newSelectedCurrency,
      selectedIndex: i,
      isCurrencyDropdownOpen: false,
    });
  };

  render() {
    const { location } = this.props;
    const {
      isCurrencyDropdownOpen,
      isCartDropdownOpen,
      selectedCurrency,
      selectedIndex,
    } = this.state;
    return (
      <HeaderWrapper>
        <Nav>
          <StyledLink to="/" isActive={location.pathname === "/"}>
            TECH
          </StyledLink>
          <StyledLink to="/clothes" isActive={location.pathname === "/clothes"}>
            CLOTHES
          </StyledLink>
        </Nav>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <CurrencyDropDownNav onClick={() => this.handleCurrencyToggle()}>
          <CurrencyFilterIcon
            isCurrencyDropdownOpen={isCurrencyDropdownOpen}
            selectedCurrency={selectedCurrency}
          />
        </CurrencyDropDownNav>
        <CartItemDropdownNav onClick={() => this.handleCartToggle()}>
          <CartIcon />
        </CartItemDropdownNav>

        {isCurrencyDropdownOpen ? (
          <CurrencyDropdown
            selectedCurrency={selectedCurrency}
            onSelectedCurrencyChange={this.handleChangeSelectedCurrency}
            options={options}
            ChangeCurrencyDropdownToFalse={this.ChangeCurrencyDropdownToFalse}
            selectedIndex={selectedIndex}
          />
        ) : null}
        {isCartDropdownOpen ? <CartItemDropdown /> : null}
      </HeaderWrapper>
    );
  }
}

export default withRouter(Header);

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as DollarFilter } from "../assets/dollar-filter.svg";
import { ReactComponent as EuroFilter } from "../assets/euro-filter.svg";
import { ReactComponent as YenFilter } from "../assets/yen-filter.svg";

import CartIconContainer from "./cart-icon/cart-icon.container";
import CurrencyIcon from "./currency-icon/currency-icon.container";
import CurrencyDropdownContainer from "./currency-dropdown/currency-dropdown-container";
import CartDropdown from "./cart-dropdown/cart-dropdown.container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRubleSign,
  faDollarSign,
  faYenSign,
  faPoundSign,
} from "@fortawesome/free-solid-svg-icons";

import { Link as ReactRouterDomLink, withRouter } from "react-router-dom";
import { CurrencyContext } from "../Context/CurrencyContext";

const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  z-index: 1000;
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

const CartItemDropdownNav = styled.div`
  margin: 25px 50px;
`;

const StyledLink = styled(Link)`
  padding: 12px 12px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  text-decoration: none;

  ${(p) =>
    p.isActive
      ? css`
          font-weight: 1000;
          border-bottom: 1px solid #5ece7b;
        `
      : css`
          font-weight: 200;
        `}
  color: #5ece7b;
`;

const Filter = styled.div`
  right: 100px;
  top: 28px;
  font-weight: 600;
  position: absolute;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 18px;
  border: 0px;
  margin-left: 20px;

  line-height: 40.8px;
`;

const Option = styled.option`
  padding-bottom: 20px;
  line-height: 28.8px;
`;

class Header extends Component {
  static contextType = CurrencyContext;

  render() {
    const { changeCurrency, word, countries } = this.context;
    const { location, responseData } = this.props;

    console.log(word);

    return (
      <HeaderWrapper>
        <Nav>
          <StyledLink to="/" isActive={location.pathname === "/"}>
            ALL
          </StyledLink>
          <StyledLink to="/tech" isActive={location.pathname === "/tech"}>
            TECH
          </StyledLink>
          <StyledLink to="/clothes" isActive={location.pathname === "/clothes"}>
            CLOTHES
          </StyledLink>
        </Nav>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <CartItemDropdownNav>
          <CartIconContainer />
        </CartItemDropdownNav>

        {responseData.data.cartDropdownHidden ? <CartDropdown /> : null}
        <Filter>
          <Select value={word} onChange={changeCurrency}>
            <Option value="$ USD ">$ USD</Option>
            <Option value="₽ RUB">₽ RUB</Option>
            <Option value="$ AUS">$ AUS</Option>
            <Option value="¥ YEN">¥ YEN</Option>

            <Option value="£ GBP">£ GBP</Option>
          </Select>
        </Filter>
      </HeaderWrapper>
    );
  }
}

export default withRouter(Header);

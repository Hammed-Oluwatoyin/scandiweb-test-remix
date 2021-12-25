import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

import CartIcon from "./cart-icon/cart-icon.component";
import CurrencyFilterIcon from "./currency-icon/currency-icon.component";
import CurrencyDropdown from "./currency-dropdown/currency-dropdown.component";

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

// const SvgWrapper = () => {
//   return (

//   );
// };

const LogoContainer = styled.div`
  margin: auto 40% auto 0;
`;

const CurrencyDropDownContainer = styled.div`
  width: 150px;
  margin: auto 10% auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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

class Header extends Component {
  state = {
    isOpen: false,
  };

  handleCurrencyToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { location } = this.props;
    const { isOpen } = this.state;
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
        <CurrencyDropDownContainer onClick={() => this.handleCurrencyToggle()}>
          <CurrencyFilterIcon />
        </CurrencyDropDownContainer>
        <CartIcon />
        {isOpen ? <CurrencyDropdown /> : null}
      </HeaderWrapper>
    );
  }
}

export default withRouter(Header);

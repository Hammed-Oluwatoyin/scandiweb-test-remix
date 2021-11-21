import React, { Component } from "react";
import styled from "styled-components";

import { Link as ReactRouterDomLink, withRouter } from "react-router-dom";

const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
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

const SvgWrapper = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="30"
      viewBox="0 0 33 30"
      fill="none"
      version="1.1"
    >
      <path
        d="M32.0988 28.6014C32.1313 28.9985 31.8211 29.339 31.4268 29.339H1.59438C1.2009 29.339 0.890922 29.0002 0.922082 28.6037L3.06376 1.34718C3.09168 0.992702 3.38426 0.719727 3.73606 0.719727H29.1958C29.5468 0.719727 29.8391 0.991612 29.868 1.34499L32.0988 28.6014Z"
        fill="url(#paint0_linear_150_1107)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_150_1107"
          x1="25.8733"
          y1="25.3337"
          x2="7.51325"
          y2="3.9008"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D67A" />
          <stop offset="1" stopColor="#5AEE87" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const LogoContainer = styled.div`
  margin: auto 50% auto 0;
`;

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "1000" : "200")};
`;

class Header extends Component {
  render() {
    console.log(this.props);
    const { location } = this.props;
    return (
      <HeaderWrapper>
        <Nav>
          <StyledLink to="/" isActive={location.pathname === "/"}>
            CLOTHING
          </StyledLink>
          <StyledLink to="/tech" isActive={location.pathname === "/tech"}>
            TECH
          </StyledLink>
        </Nav>
        <LogoContainer>
          <SvgWrapper />
        </LogoContainer>
      </HeaderWrapper>
    );
  }
}

export default withRouter(Header);

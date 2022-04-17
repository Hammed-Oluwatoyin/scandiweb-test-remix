import React, { Component } from "react";
import { Link as ReactRouterDomLink, withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import { categoriesNameRequest } from "../../services/graphql-requests";
import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import NavCurrencyButton from "../NavCurrencyButton/NavCurrencyButton";

import NavCartButton from "../NavCartButton/NavCartButton";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UnorderedList = styled.ul`
  display: flex;
`;
const List = styled.li`
  font-size: 16px;
  line-height: 120%;
  color: #1d1f22;
  text-decoration: none;
  padding: 4px 16px 32px 16px;
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

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
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
`;

class Nav extends Component {
  state = {
    showCurrencyModal: false,
    showCartModal: false,
  };

  toggleCurrencyModal = () => {
    this.setState((prev) => {
      if (prev.showCartModal) {
        return {
          showCartModal: false,
          showCurrencyModal: !prev.showCurrencyModal,
        };
      }
      return { showCurrencyModal: !prev.showCurrencyModal };
    });
  };

  toggleCartModal = () => {
    this.setState((prev) => {
      if (prev.showCurrencyModal) {
        return {
          showCurrencyModal: false,
          showCartModal: !prev.showCartModal,
        };
      }
      return { showCartModal: !prev.showCartModal };
    });
  };

  render() {
    const { location } = this.props;
    console.log(location);
    return (
      <Query query={categoriesNameRequest()}>
        {({ loading, data, error }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <p>Error : </p>;
          console.log(data);
          const { categories } = data;
          return (
            <NavWrapper>
              <UnorderedList>
                {categories.map((cat) => {
                  return (
                    <List key={cat.name}>
                      <StyledLink
                        to={{
                          pathname: `/${cat.name}`,
                          state: { from: location },
                        }}
                        isActive={location.pathname === `/${cat.name}`}
                      >
                        {cat.name.toUpperCase()}
                      </StyledLink>
                    </List>
                  );
                })}
              </UnorderedList>
              <Logo />
              <IconWrapper>
                <NavCurrencyButton
                  showCurrencyModal={this.state.showCurrencyModal}
                  toggleCurrencyModal={this.toggleCurrencyModal}
                />
                <NavCartButton
                  showCartModal={this.state.showCartModal}
                  toggleCartModal={this.toggleCartModal}
                />
              </IconWrapper>
            </NavWrapper>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(Nav);

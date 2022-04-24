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

  width: 100%;
`;

const UnorderedList = styled.ul`
  display: flex;
`;
const List = styled.li`
  font-size: 16px;
  line-height: 12px;
  color: #1d1f22;
  text-decoration: none;
  padding: 4px 16px 32px 16px;
`;
const CartBadge = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  position: absolute;
  right: 95px;
  top: 20px;
`;
const BadgeNumber = styled.h5`
  margin-left: 5px;
  margin-top: 2px;
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
  render() {
    const { location, totalItemCount } = this.props;

    return (
      <Query query={categoriesNameRequest()}>
        {({ loading, data, error }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <p>Error : </p>;

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
                <NavCurrencyButton />
                <NavCartButton />
              </IconWrapper>
              <CartBadge>
                <BadgeNumber>{totalItemCount}</BadgeNumber>
              </CartBadge>
            </NavWrapper>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(Nav);

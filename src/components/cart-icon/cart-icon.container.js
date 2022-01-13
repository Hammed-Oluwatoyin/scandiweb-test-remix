import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CartIcon from "./cart-icon.component.jsx";

const GET_PRODUCT_COUNT = gql`
  {
    productCount @client
  }
`;

const CartIconContainer = () => (
  <Query query={GET_PRODUCT_COUNT}>
    {({ loading, data, error }) => {
      console.log({ loading });
      console.log({ data });
      console.log({ error });
      if (loading) return <div>loading...</div>;
      return <CartIcon data={{ data }} />;
    }}
  </Query>
);

export default CartIconContainer;

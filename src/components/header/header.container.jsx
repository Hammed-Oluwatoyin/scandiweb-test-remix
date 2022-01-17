import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from '../header';






const GET_CLIENT_PROPERTIES = gql`
  {
    cartDropdownHidden @client
    currencyDropdownHidden @client
    
  }
`;

const HeaderContainer = () => (
<Query query={GET_CLIENT_PROPERTIES}>
            {({ data})  => {
                
                console.log({data});
                
                
                return <Header responseData = {{data}} />
            }}
    </Query>
);

export default HeaderContainer;
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from './header';






const GET_HIDDEN_PROPERTIES = gql`
  {
    cartDropdownHidden @client
    currencyDropdownHidden @client
    
  }
`;



class HeaderContainer extends Component {
  render() {
    
    return (
  <Query query={GET_HIDDEN_PROPERTIES}>
            {({loading, data, error})  => {   
                if (loading) return <div>loading...</div>
                return <Header responseData = {{data}} />
            }}
    </Query>
    );
  }
}




export default HeaderContainer;
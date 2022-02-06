import React, {Component} from "react";
import {Query} from "react-apollo";
import {gql} from 'apollo-boost';
import All from "../../pages/all";


const GET_PRODUCTS = gql`
query{
  categories {
           name
           products {
             id
             name
             inStock
             gallery
             description
             category
             attributes {
               id
               name
               type
               items {
                 displayValue
                 value
                 id
               }
             }
             prices {
               currency
               amount
             }
             brand
           }
        }
}


`
class AllPageContainer extends Component {
  render() {
    
    return (
  <Query query={GET_PRODUCTS}>
            {({loading, data, error})  => {
                console.log({loading});
                console.log({data});
                console.log({error});
                if (loading) return <div>loading...</div>
                return <All responseData = {{data}} />
            }}
    </Query>
    );
  }
}


export default AllPageContainer;
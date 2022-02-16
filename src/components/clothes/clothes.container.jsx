import React, {Component} from "react";
import {Query} from "react-apollo";
import {gql} from 'apollo-boost';
import Clothes from "../../pages/clothes";


const GET_PRODUCTS = gql`
      query{
 
category(input : {title: "clothes"}){
  name
  products {
    id
    name
    inStock
    gallery
    description
    
    category
    attributes{
          id
          name
          type
          items{
            	displayValue
            	value
              id
          }
          
          
          
        }
    prices{
      currency
      amount
    }
    brand
    
  }
} 
}
`
class ClothingPageContainer extends Component {
  render() {
    
    return (
  <Query query={GET_PRODUCTS}>
            {({loading, data, error})  => {
                
                if (loading) return <div>loading...</div>
                return <Clothes responseData = {{data}} />
            }}
    </Query>
    );
  }
}


export default ClothingPageContainer;
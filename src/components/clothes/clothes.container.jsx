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
    
    category
    prices{
      currency
      amount
    }
    brand
    
  }
} 
}
`
class clothingPageContainer extends Component {
  render() {
    
    return (
  <Query query={GET_PRODUCTS}>
            {({loading, data, error})  => {
                console.log({loading});
                console.log({data});
                console.log({error});
                if (loading) return <div>loading...</div>
                return <Clothes responseData = {{data}} />
            }}
    </Query>
    );
  }
}


export default clothingPageContainer;
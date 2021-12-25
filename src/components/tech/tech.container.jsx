import React, {Component} from "react";
import {Query} from "react-apollo";
import {gql} from 'apollo-boost';
import Tech from "../../pages/tech";


const GET_PRODUCTS = gql`
      query{
 
category(input : {title: "tech"}){
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
class techPageContainer extends Component {
  render() {
    
    return (
  <Query query={GET_PRODUCTS}>
            {({loading, data, error})  => {
                console.log({loading});
                console.log({data});
                console.log({error});
                if (loading) return <div>loading...</div>
                return <Tech categories = {{data}} />
            }}
    </Query>
    );
  }
}


export default techPageContainer;

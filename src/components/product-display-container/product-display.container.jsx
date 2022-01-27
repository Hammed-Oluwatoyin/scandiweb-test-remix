import React, {Component} from "react";
import {Query} from "react-apollo";
import {gql} from 'apollo-boost';
import ProductDisplay from "../../pages/product-display";


const GET_PRODUCT = gql`
           query($id: String!){
 
product(id: $id){
				id
  			name
  			inStock
  			description
  			category

}
      }

`
class ProductDisplayContainer extends Component {
  render() {
    const {id} = this.props.match.params;
    console.log(this.props);
    
    return (
  <Query query={GET_PRODUCT}  variables={{ id }}>
            {({loading, data, error})  => {
                console.log({loading});
                console.log({data});
                console.log({error});
                if (loading) return <div>loading...</div>
                return <ProductDisplay responseData = {{data}} />
            }}
    </Query>
    );
  }
}


export default ProductDisplayContainer;
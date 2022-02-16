import React, {Component} from "react";
import {Query, Mutation} from "react-apollo";
import {gql} from 'apollo-boost';
import ProductDisplay from "../../pages/product-display";



const ADD_PRODUCT_TO_CART  = gql`
      mutation AddProductToCart($product: Product!, $number: Int){
          addProductToCart(product: $product, number: $number )  @client
      }
  `;


const GET_PRODUCT = gql`
  query($id: String!){
 
product(id: $id){
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
  			brand
        
  				prices{
          		currency
          		amount
        }

}
      }

`
class ProductDisplayContainer extends Component {
  render() {
    const {id} = this.props.match.params;
    
    
    return (
      <Mutation  mutation={ADD_PRODUCT_TO_CART}>
            {(addProductToCart) => (
              <Query query={GET_PRODUCT}  variables={{id :id }}>
            {({loading, data, error})  => {
               
                if (loading) return <div>loading...</div>
                return <ProductDisplay responseData= {data}  addItem={(product , number) =>  addProductToCart({variables:{product, number} })} />
            }}
    </Query>

            )}

      </Mutation>


    
    );
  }
}


export default ProductDisplayContainer;
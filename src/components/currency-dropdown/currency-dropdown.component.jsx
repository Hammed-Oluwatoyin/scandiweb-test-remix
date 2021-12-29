import React, {Component} from "react";
import styled from "styled-components";


const CurrencyContainer = styled.div`
    position: absolute;
    width: 114px;
    height: 169px;
    background-color:#ffffff ;
    padding: 20px;
    top: 80px;
    right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
`

const CurrencyItem = styled.div`
        font-size: 18px;
        font-weight: 500;
        line-height: 28.8px;
        width:54px;
        height: 29px;
    `


class CurrencyDropdown extends Component  {

   renderedOptions = this.props.options.map((option) => {
       return(
           <CurrencyItem  key={option.value}>
                {option.element}
           </CurrencyItem>
       );
   });
  
    render() {
        return (
            <CurrencyContainer>
                
            
             {this.renderedOptions}
            
            </CurrencyContainer>
        )
    }

 
}


export default  CurrencyDropdown;
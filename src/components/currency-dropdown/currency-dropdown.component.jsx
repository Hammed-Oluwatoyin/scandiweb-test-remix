import React, {Component} from "react";
import styled from "styled-components";
import { CurrencyContext } from "../../Context/CurrencyContext";
import { ReactComponent as DollarFilter } from "../../assets/dollar-filter.svg";
import { ReactComponent as EuroFilter } from "../../assets/euro-filter.svg";
import { ReactComponent as YenFilter } from "../../assets/yen-filter.svg";


const CurrencyContainer = styled.div`
    position: absolute;
    width: 144px;
    height: 190px;
    background-color:#ffffff ;
    
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
        padding: 10px;
        background-color: ${(p) => (p.isActive ? "rgba(0, 0, 0, 0.2)" : "null")};
        
         &:hover {
             background-color: rgba(0, 0, 0, 0.2);
  }
    `





class CurrencyDropdown extends Component  {

   static contextType = CurrencyContext;

    CurrencyChange =(option, event , i) => {
          this.props.onSelectedCurrencyChange(option, event, i)
   }


  



    render() {
        console.log(this.props);
        
        return (
            <CurrencyContainer>
                
            
              hammed
            
            </CurrencyContainer>
        )
    }

 
}


export default  CurrencyDropdown;
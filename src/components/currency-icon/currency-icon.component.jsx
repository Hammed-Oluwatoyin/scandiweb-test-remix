import   React, {Component}  from "react";
import styled from "styled-components";

 import {ReactComponent as CurrencyIcon } from '../../assets/currency-icon.svg'
 import { ReactComponent as ArrowUpIcon } from "../../assets/arrow-up-icon.svg";

 const CurrencyWrapper = styled.div`
                                      padding : 0; 
                                      display: flex;
                                      justify-content: space-between;
                                      `

 const StyledCurrencyIcon = styled.div`
                                        padding-top: 8px;

                                        `
const StyledArrowUpIcon = styled.div`
                                        padding-top: 8px;
                                        
                                        

                                        `


 
 class CurrencyFilter extends Component {
  render() {
    return (
      <>
        <StyledCurrencyIcon>
          <CurrencyIcon />
          
        </StyledCurrencyIcon>
        <StyledArrowUpIcon>
          <ArrowUpIcon/>
        </StyledArrowUpIcon>
       
        
      </>
    );
  }
}

export default CurrencyFilter;
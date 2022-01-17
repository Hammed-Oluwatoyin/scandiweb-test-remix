import   React, {Component}  from "react";
import styled from "styled-components";

 import {ReactComponent as ArrowDownIcon } from '../../assets/arrow-down-icon.svg'
 import { ReactComponent as ArrowUpIcon } from "../../assets/arrow-up-icon.svg";

 

 const StyledCurrencyIcon = styled.div`
                                        padding-top: 8px;

                                        `
const StyledArrowIcon = styled.div`
                                        padding-top: 8px;
                                        
                                        
                                        

                                        `


 
 class CurrencyFilter extends Component {
  render() {

    console.log(this.props)
    return (
      <>
        <StyledCurrencyIcon onClick = {() => this.props.toggleCurrencyDropdown()}>
          {this.props.selectedCurrency.element}
          
        </StyledCurrencyIcon>
        <StyledArrowIcon>
         {this.props.isCurrencyDropdownOpen ? <ArrowUpIcon/> : <ArrowDownIcon/> } 
        </StyledArrowIcon>
       
        
      </>
    );
  }
}

export default CurrencyFilter;
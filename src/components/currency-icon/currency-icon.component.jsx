import   React, {Component}  from "react";
import styled from "styled-components";

 import {ReactComponent as ArrowDownIcon } from '../../assets/arrow-down-icon.svg'
 import { ReactComponent as ArrowUpIcon } from "../../assets/arrow-up-icon.svg";
 import { ReactComponent as EuroFilter } from "../../assets/euro-filter.svg";

 import { ReactComponent as DollarFilter } from "../../assets/dollar-filter.svg";
 import { ReactComponent as YenFilter } from "../../assets/yen-filter.svg";

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
         {this.props.currencyDropdownHidden ? <ArrowUpIcon/> : <ArrowDownIcon/> } 
        </StyledArrowIcon>
       
        
      </>
    );
  }
}

export default CurrencyFilter;
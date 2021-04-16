import React from "react";
import { NavItem, NavLink} from 'reactstrap';
const NavHeader = ({ text  ,indicator ,hTabsIcons ,handleSetHTabs, activeButton}) => {
    return (
        <NavItem >
            <NavLink
                className={
                    "mb-xl-3 mb-lg-3 mb-sm-3 mb-md-3 " +
                    ((hTabsIcons === indicator ) ? "active" : "")
                    }
                    onClick={(e) => {
                    e.preventDefault(); 
                    handleSetHTabs(indicator);
                    }}
                        >
                {text}
            </NavLink>
        </NavItem>  
  )
}

export default NavHeader ;
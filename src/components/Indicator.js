import React from "react";
const Indicator = ({hTabsIcons,indic, handleClick}) => {
  
  return (
    <span 
     onClick={()=> handleClick(indic)}
    style={{backgroundColor:hTabsIcons===indic? "#333333":"#9B9B9B", cursor:"pointer"}}
    css={css`
       height: 15px;
       width: 15px;
       dispay: flex;
       border-radius:50%;
       margin-right:5px;
    `}/>  
  )
}

export default Indicator;
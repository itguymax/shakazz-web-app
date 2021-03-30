import { Flex } from "@theme-ui/components";
import React, {useState, useEffect} from "react";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";

function Sdropdown({ label, register, name, handleOnSelect,selectedOption,options}) {
 
  // const [selectedOption, setSelectedOption] = useState(options[Math.floor(Math.random() * options.length )]);
   const [open, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(prevState => !prevState);
   const onOptionClicked = value => () => {
    handleOnSelect(value)
    toggle();
    
  };
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <label className="ml-3" style={{font: "normal normal bold 18px/19px Ubuntu"}}>{label}</label>
      <UncontrolledDropdown isOpen={open} toggle={toggle} >
        <DropdownToggle   innerRef={register()}  caret color="" id="navbarDropdownMenuLink2" className="d-flex justify-content-between align-items-center mr-0" style={{ padding:'5px', backgroundColor:'#fff', border:'1px solid #707070', borderRadius:"25px"}}>
          {selectedOption && (
           <DropdownItem  tag="div" style={{marginRight: "100px"}}>
             {selectedOption.val}
          </DropdownItem>
          )}
        </DropdownToggle>
        <DropdownMenu  name={name}  aria-labelledby="navbarDropdownMenuLink2">
            {options.map( (option, i) => (
                <li key={i}>
                  <DropdownItem  tag="button" onClick={onOptionClicked(option)}>
                    {option.val}
                  </DropdownItem>
                </li>

              ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}

export default Sdropdown;
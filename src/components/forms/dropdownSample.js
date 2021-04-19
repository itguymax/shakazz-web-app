import { Flex } from "@theme-ui/components";
import React, {useState, useEffect} from "react";
import {Global,css} from "@emotion/react"
// reactstrap components
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";
import Image from 'next/image';

function DropdownSample({flag, sample, phone, label,name, handleOnSelect,selectedOption,options}) {
 
  const [open, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(prevState => !prevState);
   const onOptionClicked = (value) => {
     const actualOption = document.getElementById("actualOption");
     actualOption.innerHTML = value;
  };
  return (
    //direction="left"
    <UncontrolledDropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret>
                      {selectedOption && (
                         <DropdownItem id="actualOption">
                           {selectedOption.val}
                        </DropdownItem>
                        )}
                    </DropdownToggle>
                  <DropdownMenu>
                       {options.map( (option, i) => (
                            <DropdownItem  key={i} onClick={()=>{onOptionClicked(option.val)}}>
                              {option.val}
                            </DropdownItem>

                        ))}
                    </DropdownMenu>
      </UncontrolledDropdown>
  );
}

export default DropdownSample;
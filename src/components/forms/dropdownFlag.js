import { Flex } from "@theme-ui/components";
import React, {useState, useEffect} from "react";
import {Global,css} from "@emotion/react"
import dropdown_toggle from '../../helpers/dropdown_toggle.js'
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

function DropdownFlag({flag, sample, phone, label,name, handleOnSelect,selectedOption,options}) {
 
  const [open, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(prevState => !prevState);
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
                            <DropdownItem  key={i} onClick={()=>{dropdown_toggle.dropdown_toggle(option.val)}}>
                              <Image 
                              src={'/assets/img/flags/'+option.alpha3Code.toLowerCase()+'.svg'}
                              alt="..." 
                              height={10} width={10}
                              style={{backgroundColor:"#000",margin:"auto"}}  
                              />
                              {option.val}
                            </DropdownItem>

                        ))}
                    </DropdownMenu>
      </UncontrolledDropdown>
  );
}

export default DropdownFlag;
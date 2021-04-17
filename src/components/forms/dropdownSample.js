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
 
  // const [selectedOption, setSelectedOption] = useState(options[Math.floor(Math.random() * options.length )]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const onOptionClicked = value => () => {
    handleOnSelect(value);
    toggle();
    
  };
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                      {selectedOption && (
                         <DropdownItem  tag="div">
                           {selectedOption.val}
                        </DropdownItem>
                        )}
                    </DropdownToggle>
                    <DropdownMenu>
                       {options.map( (option, i) => (
                            <DropdownItem  tag="button" onClick={onOptionClicked(option)}>
                              {option.val}
                            </DropdownItem>

                        ))}
                    </DropdownMenu>
                  </Dropdown>
  );
}

export default DropdownSample;
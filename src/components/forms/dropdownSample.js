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

function DropdownSample({idDd, sample, phone, label,name, handleOnSelect,selectedOption,options}) {

  const [open, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(prevState => !prevState);
  return (
    <UncontrolledDropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret>
                      {selectedOption && (
                         <p id={idDd}>
                           {selectedOption}
                        </p>
                        )}
                    </DropdownToggle>
                  <DropdownMenu>
                       {options.map( (option, i) => (
                            <DropdownItem key={i} onClick={()=>dropdown_toggle.dropdown_toggle(option.montantUSD+" : "+option.createdAt,idDd)}>
                              {option.montantUSD+" : "+option.createdAt}
                            </DropdownItem>

                        ))}
                    </DropdownMenu>
      </UncontrolledDropdown>
  );
}

export default DropdownSample;

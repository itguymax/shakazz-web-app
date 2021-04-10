import { Flex } from "@theme-ui/components";
import React, {useState, useEffect} from "react";
import {Global,css} from "@emotion/react"
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";
import Image from 'next/image';

function Sdropdown({flag, phone, label, register, name, handleOnSelect,selectedOption,options}) {
 
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
        {flag && <DropdownMenu  name={name} style={{overflow:'auto'}} aria-labelledby="navbarDropdownMenuLink2">
            {options.map( (option, i) => {
              return (
                <li key={i} style={{paddingLeft:'1em',marginTop:'0.5em',display:'flex',width:'3em !important'}}>
                  <Image 
                          src={'/assets/img/flags/'+option.alpha3Code.toLowerCase()+'.svg'}
                          alt="..." 
                          height={10} width={20}
                          style={{backgroundColor:"#000",margin:"auto"}}  
                          />
                  <DropdownItem  tag="button" onClick={onOptionClicked(option)}>
                    {option.name}
                  </DropdownItem>
                </li>

              )
            })}
        </DropdownMenu>}
        {phone && <DropdownMenu  name={name} style={{overflow:'auto'}} aria-labelledby="navbarDropdownMenuLink2">
            {options.map( (option, i) => {
              return (
                <li key={i} style={{paddingLeft:'1em',marginTop:'0.5em',display:'flex',width:'3em !important'}}>
                  <Image 
                          src={'/assets/img/flags/'+option.alpha3Code.toLowerCase()+'.svg'}
                          alt="..." 
                          height={10} width={20}
                          style={{backgroundColor:"#000",margin:"auto"}}  
                          />
                  <DropdownItem  tag="button" onClick={onOptionClicked(option)}>
                    {'+'+option.callingCodes}
                  </DropdownItem>
                </li>

              )
            })}
        </DropdownMenu>}
      </UncontrolledDropdown>
    </div>
  );
}

export default Sdropdown;
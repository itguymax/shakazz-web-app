import { Flex } from "@theme-ui/components";
import React, {useState, useEffect} from "react";
import {Global,css} from "@emotion/react"
import dropdown_toggle from '../../helpers/dropdown_toggle.js'
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

function Sdropdown({flag,country, idDd,idDdM, sample, phone, label, register, name, handleOnSelect,selectedOption,options}) {

  // const [selectedOption, setSelectedOption] = useState(options[Math.floor(Math.random() * options.length )]);
   const [open, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(prevState => !prevState);
   const onOptionClicked = value => () => {
    handleOnSelect(value)
    toggle();

  };
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <label className="ml-3" style={{font: "normal normal 18px/19px Ubuntu"}}>{label}</label>
      <UncontrolledDropdown isOpen={open} toggle={toggle} >
        {phone &&<DropdownToggle  innerRef={register()}  caret color="" id="navbarDropdownMenuLink3" className="d-flex justify-content-between align-items-center mr-0" style={{ padding:'5px', backgroundColor:'#fff', border:'1px solid #707070', borderRadius:"25px"}}>
           <Image id={idDdM}
                   src={'/assets/img/flags/cmr.svg'}
                   alt="..."
                   height={25} width={25}
                   />
          <DropdownItem  id={idDd} tag="div">
            {"+237"}
         </DropdownItem>
        </DropdownToggle>}
        {phone &&<DropdownMenu name={name} style={{overflow:'auto'}} aria-labelledby="navbarDropdownMenuLink3">
            {options.map( (option, i) => {
              return (
                <li  style={{width:"2em !important",height:"1.5em",paddingLeft:'1em',marginTop:'0.5em',display:'flex'}}>
                  <Image
                          src={'/assets/img/flags/'+option.alpha3Code.toLowerCase()+'.svg'}
                          alt="..."
                          height={20} width={20}
                          />
                  <DropdownItem key={i} id={idDd} tag="button" onClick={()=>dropdown_toggle.dropdown_toggle('+'+option.callingCodes,idDd,idDdM,option.alpha3Code.toLowerCase()+'.svg')}>
                    {'+'+option.callingCodes}
                  </DropdownItem>
                </li>
              )
            })}
        </DropdownMenu>}
        {country &&<DropdownToggle  innerRef={register()}  caret color="" id="navbarDropdownMenuLink3" className="d-flex justify-content-between align-items-center mr-0" style={{ padding:'5px', backgroundColor:'#fff', border:'1px solid #707070', borderRadius:"25px"}}>
           <Image id={idDdM}
                   src={'/assets/img/flags/cmr.svg'}
                   alt="..."
                   height={25} width={25}
                   />
          <DropdownItem  id={idDd} tag="div">
            {"Cameroon"}
         </DropdownItem>
        </DropdownToggle>}
        {country &&<DropdownMenu name={name} style={{overflow:'auto'}} aria-labelledby="navbarDropdownMenuLink3">
            {options.map( (option, i) => {
              return (
                <li  style={{width:"2em !important",height:"1.5em",paddingLeft:'1em',marginTop:'0.5em',display:'flex'}}>
                  <Image
                          src={'/assets/img/flags/'+option.alpha3Code.toLowerCase()+'.svg'}
                          alt="..."
                          height={20} width={20}
                          />
                  <DropdownItem key={i} id={idDd} tag="button" onClick={()=>dropdown_toggle.dropdown_toggle(option.name,idDd,idDdM,option.alpha3Code.toLowerCase()+'.svg')}>
                    {option.name}
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

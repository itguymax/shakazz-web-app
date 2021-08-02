import { Flex } from "@theme-ui/components";
import React, {useState, useEffect} from "react";
import {Global,css} from "@emotion/react"
import dropdown_toggle from '../../helpers/dropdown_toggle.js'
import Sinput from './Sinput'

import CountryFlag from '../CountryFlag';
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import Image from 'next/image';

function Sdropdown({flag,country, idDd,idDdM,phoneName,phoneValue,pickPhone, sample, phone, label,selectedOptionP, register, name, handleOnSelect,selectedOption,options}) {

   const [open, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(prevState => !prevState);
   const onOptionClicked = value => ()  => {
     console.log("hhhhhhhhhhh", value);
    handleOnSelect(value)
    // toggle();

  };
  return (
      <>
    <Global
    styles={css`
      button[id="navbarDropdownMenuLink3"]{
        background-color: #f0f0f0 !important;
        border:1px solid #f0f0f0 !important;
        width:10em !important;
        border-radius: 15px 0px 0px 15px !important;
        padding-right:1em !important;
        padding-right:1em !important;
      }
      button[id="navbarDropdownMenuLink4"]{
        background-color: #f0f0f0 !important;
        border:1px solid #f0f0f0 !important;
        width:10em !important;
        border-radius: 15px!important;
        padding-right:1em !important;
        padding-right:1em !important;
      }
      button[id="navbarDropdownMenuLink3"] img{
        width:3em !important;
      }
      button[id="navbarDropdownMenuLink4"] img{
        width:3em !important;
      }
      input{
        background-color: #f0f0f0 !important;
        border:1px solid white !important;
        width:8em !important;
      }
      input[type="text"]{
        background-color: #f0f0f0 !important;
        border:1px solid white !important;
      }
      .dropdown-menu.show{
        max-height:'2em !important';
      }
      .dropdown button{
        height:3em !important;
      }
      .dropdown-menu{
        max-height:23em !important;
      }
      #navbarDropdownMenuLink3{
        width:2em !important;
        width:auto !important;
        padding-left:1em;
      }
      #navbarDropdownMenuLink4{
        width:5em !important;
        width:auto !important;
        padding-left:1em;
      }
      `}
      />
    <div style={{display: "flex", flexDirection: "column"}}>
      <label className="ml-3" style={{font: "normal normal 18px/19px Ubuntu"}}>{label}</label>
      <UncontrolledDropdown isOpen={open} toggle={toggle} >
        {phone &&<DropdownToggle  innerRef={register()}  caret color="" id="navbarDropdownMenuLink3" className="d-flex justify-content-between align-items-center mr-0" style={{ padding:'5px', backgroundColor:'#fff', border:'1px solid #707070', borderRadius:"25px"}}>
           <Image id={idDdM}
                   src={selectedOptionP.flag}
                   alt={selectedOptionP.code}
                   height={20} width={20}
                   />
          <DropdownItem  id={idDd} tag="div" style={{paddingLeft:"0.4em",paddingRight:"0.6em"}}>
            {"+" + selectedOptionP.code}
         </DropdownItem>
        </DropdownToggle>}
        {phone &&<Input innerRef={register()} type="number" name={phoneName} onChange={pickPhone} value={phoneValue} style={{marginTop:"-2.998em",borderRadius:"0px 15px 15px 0px",width:"15em !important",marginLeft:"8em",zIndex:"900 !important"}}/>}

        {country &&<DropdownToggle  innerRef={register()}  caret color="" id="navbarDropdownMenuLink4" className="d-flex justify-content-between align-items-center mr-0" style={{ padding:'5px', backgroundColor:'#fff', border:'1px solid #707070', borderRadius:"25px"}}>
           <Image id={idDdM}
                    src={selectedOption.flag}
                   alt={selectedOption.name}
                   height={25} width={50}
                   />
          <DropdownItem  id={idDd} tag="div">
            {selectedOption.name}
         </DropdownItem>
        </DropdownToggle>}
        {country &&<DropdownMenu name={name} style={{overflow:'auto',border:"1px solid #e5e5e5",boxShadow:"none"}} aria-labelledby="navbarDropdownMenuLink3" >
            {options.map( (option, i) => {
              return (
                <li key={i}  style={{width:"2.6em !important",height:"2.6em",paddingLeft:'1em',marginTop:'0.5em',display:'flex'}}>
                  <Image
                      src={option.flag}
                      alt={option.name}
                      height={25} width={50}
                  />
                          {/* handleOnSelect(option.name,idDd,idDdM,option.alpha3Code.toLowerCase()+'.svg') */}
                  <DropdownItem  id={idDd} tag="button" onClick={onOptionClicked(option)}>
                    {option.name}
                  </DropdownItem>
                </li>
              )
            })}
        </DropdownMenu>}
      </UncontrolledDropdown>
    </div>
    </>
  );
}

export default Sdropdown;

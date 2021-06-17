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
// f
function Sdropdown({portefeuille,flag, idDd, sample, phone, label, register, name, handleOnSelect,selectedOption,options}) {

  // const [selectedOption, setSelectedOption] = useState(options[Math.floor(Math.random() * options.length )]);
   const [open, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(prevState => !prevState);
   //setAccount("ugh");
   const onOptionClicked = value => () => {
     console.log("heeeeee", value);
    handleOnSelect(value);
    toggle();

  };
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <label className="ml-3" style={{font: "normal normal 18px/19px Ubuntu"}}>{label}</label>
      <UncontrolledDropdown isOpen={open} toggle={toggle} >
        <DropdownToggle  innerRef={register()}  caret color="" id="navbarDropdownMenuLink2" className="d-flex justify-content-between align-items-center mr-0" style={{ padding:'5px', backgroundColor:'#fff', border:'1px solid #707070', borderRadius:"25px"}}>
          {selectedOption && (
           <DropdownItem  id={idDd} tag="div" style={{marginRight: "100px"}}>
             {selectedOption.val}
          </DropdownItem>
          )}
        </DropdownToggle>
        <DropdownMenu  name={name}  aria-labelledby="navbarDropdownMenuLink2">
            {options.map( (option, i) => (
                <li key={i}>
                  <DropdownItem id={idDd} tag="button" onClick={()=>dropdown_toggle.dropdown_toggle(option.val,idDd)}>
                    {option.val}
                  </DropdownItem>
                </li>

              ))}
        </DropdownMenu>
        {flag && <DropdownMenu  name={name} style={{overflow:'auto'}} aria-labelledby="navbarDropdownMenuLink2">
            {options.map( (option, i) => {
              return (
                <li key={i} style={{height:"1.5em",paddingLeft:'1em',marginTop:'0.5em',display:'flex'}}>
                  <Image
                          src={'/assets/img/flags/'+option.alpha3Code.toLowerCase()+'.svg'}
                          alt="..."
                          height={10} width={20}
                          style={{marginTop:"0.5em",backgroundColor:"#000",margin:"auto"}}
                          />
                  <DropdownItem  tag="button" id={idDd} tag="button" onClick={()=>dropdown_toggle.dropdown_toggle(option.name,idDd)}>
                    {option.name}
                  </DropdownItem>
                </li>

              )
            })}
        </DropdownMenu>}
        {phone && <DropdownMenu name={name} style={{overflow:'auto'}} aria-labelledby="navbarDropdownMenuLink3">
            {options.map( (option, i) => {
              return (
                <li  style={{width:"2em !important",height:"1.5em",paddingLeft:'1em',marginTop:'0.5em',display:'flex'}}>
                  <Image
                          src={'/assets/img/flags/'+option.alpha3Code.toLowerCase()+'.svg'}
                          alt="..."
                          height={20} width={20}
                          />
                  <DropdownItem key={i} id={idDd} tag="button" onClick={()=>dropdown_toggle.dropdown_toggle('+'+option.callingCodes,idDd)}>
                    {'+'+option.callingCodes}
                  </DropdownItem>
                </li>
              )
            })}
        </DropdownMenu>}
         {sample && <DropdownMenu  name={name}  aria-labelledby="navbarDropdownMenuLink2">
            {options.map( (option, i) => (
                <li key={i}>
                  <DropdownItem  tag="button" onClick={onOptionClicked(option)}>
                    {option.val}
                  </DropdownItem>
                </li>

              ))}
        </DropdownMenu>}
        {portefeuille && <DropdownMenu  name={name}  aria-labelledby="navbarDropdownMenuLink2">
           {options.map( (option, i) => (
               <li key={i}>
                 <DropdownItem  tag="button" onClick={onOptionClicked(option)}>
                   {option.adresse}
                 </DropdownItem>
               </li>

             ))}
       </DropdownMenu>}
      </UncontrolledDropdown>
    </div>
  );
}

export default Sdropdown;

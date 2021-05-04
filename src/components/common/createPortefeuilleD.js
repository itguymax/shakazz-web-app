import React from 'react'
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
import DropDownC from '../forms/Dropdownc'
import {portefeuille} from '../../__MOCK__/portefeuille.js';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Media,
  DropdownItem,
  Label,
} from "reactstrap";
import Image from 'next/image'
import Sinput from '../../../src/components/forms/Sinput';
export default function CreatePortefeuilleD({nb}) {
	  const Button = styled.button`
		    background-color: #679966;
		    border-radius: 20px;
		    margin-top:1.8em;
		    color: white;
		    padding:0.6em;
		    width:10em;
		    border:1px solid #679966;
		    font-weight:100;
		    transition: all .8s ease-in-out;
		    &:hover {
		      color: #679966;
		      background-color:white;
		  }
		`
  return (
    <>
    <Global
    styles={css`
      .customDropdown .dropdown{
         background-color:transparent;
         width:15em;
      }
      .customDropdown .btn{
        background-color:#F0F0F0;
        border-radius:16px;
        width:18em;
        border:none;
        height:3em;
        color:white;        }
      .customDropdown .btn .dropdown-item{
        color:white;
        background-color:transparent;
      }
      .customDropdown .btn .dropdown-toggle::after{
        color:white;
      }
      .customDropdown .btn:not(:last-child) {
          margin-right: 0.1rem !important;
      }
      `}
    />
    <Row style={{marginTop:"0.5em"}}>
      <Col sm="2">
         <Image
         src="/assets/img/icons/retrait/wallet.svg"
         alt="..."
         height={25} width={25}
         />
      </Col>
      <Col sm="2"><p style={{marginLeft:"-3em",color:"black",marginTop:"0em",fontSize:"1em",fontWeight:100}}>{"Portefeuille"+nb}</p></Col>
      <Col sm="6" style={{marginLeft:"-2em",marginTop:"-1em"}}><DropDownC portefeuille name={"profile_portefeuille"+nb} label="" register={()=>{}} name="canal" selectedOption={portefeuille[0]} handleOnSelect={()=>{}} options={portefeuille||[]}/></Col>
    </Row>
    </>
  )
}

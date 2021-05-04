import React from 'react'
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
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
import Sinput from '../../../src/components/forms/Sinput';
export default function CreatePortefeuille() {
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
      <Container className="createPortefeuille" style={{
                      width:"100%",
                      height:"14em",
                      marginLeft:"2em",
                      backgroundColor:"#f0f0f0",
                      borderRadius:"16px",
                      padding:"1em",paddingTop:"2em"}}>
                       <Row style={{display:"flex",
                      justifyContent: "space-around"}}>
                        <Label>Name:</Label>
                        <Sinput
                          name="name"
                          placeholder="Projet d'études"
                          register={()=>{}}
                          iStyle={{width:"10em",
                             backgroundColor:"#d9d2d2 !important",width:"10em !important",border:"1px solid #d9d2d2",
                             borderRadius:"15px", marginTop:"-1.3em",overflow:"hidden"}}
                          inputBg="#fff"
                          type="text"
                          handleOnchange={()=>{}}
                        />
                         </Row>
                        <Row style={{display:"flex",
                        justifyContent: "space-around"}}>
                          <Label>Adresse:</Label>
                          <Sinput
                            name="name"
                            placeholder="FRA2017univ2021"
                            register={()=>{}}
                            iStyle={{width:"10em",
                               backgroundColor:"#d9d2d2 !important",width:"10em !important",border:"1px solid #d9d2d2",
                               borderRadius:"15px", marginTop:"-1.3em",overflow:"hidden"}}
                            inputBg="#fff"
                            type="text"
                            handleOnchange={()=>{}}
                          />
                         </Row>
                       <Row>
                          <Button style={{margin:"auto",marginTop:"1em"}}>Confirmer</Button>
                       </Row>
                      </Container>
  )
}

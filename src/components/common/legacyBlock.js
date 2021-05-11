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
import Image from 'next/image'
import Sinput from '../../../src/components/forms/Sinput';
export default function LegacyBlock({}) {
	  const Button = styled.button`
		    background-color: #679966;
		    border-radius: 20px;
		    margin-top:1.8em;
		    color: white;
		    padding:0.4em;
		    width:10em;
		    border:1px solid #679966;
		    font-weight:100;
		    transition: all .8s ease-in-out;
        cursor:pointer;
		`
  return (
    <>
    <Global
    styles={css`
      .legacy_block_container{
        margin-top:1em;
        border-top:3px solid #e5e5e5;
        padding-top:1em;
        padding-left:3em;
        padding-right:3em;
      }
      .legacy_block_container_row1{
        background: #F0F0F0 0% 0% no-repeat padding-box;
        padding-top:0.5em;
        padding-bottom:0.1em;
        border-radius:40px;
      }
      .legacy_block_container_row2{
        width:25em;
        float:right;
      }
      .roundBlock{
        background: #CC9933 no-repeat padding-box;
        float:right;
        width:4em;
        height:4em;
        border-radius:50%;
        padding-top:1em;
        text-align:center;
        color:white;
        cursor:pointer;
      }
      `}
    />
    <Container className="legacy_block_container">
      <Row className="legacy_block_container_row1">
        <Col sm="2"><Image
        alt="profile_photo_legacy"
        src="/assets/img/IMG_20181121_094329_174@2x.png"
        className="rounded-circle"
        height={70} width={70}
        style={{backgroundColor:"#000",margin:"auto"}}
        /></Col>
        <Col sm="3" style={{marginTop:"0.8em",marginLeft:"-4em"}}><strong>Bissohong Ebenezer Raphaël-presnel</strong></Col>
        <Col>
          <Row style={{marginTop:"1em",width:"30em"}}>
            <Col sm="4"><Image
            src="/assets/img/flags/cmr.svg"
            height={30} width={30}
            style={{backgroundColor:"#000",margin:"auto"}}
            /></Col>
            <Col style={{marginLeft:"-5em",width:"10em"}}>
              <span style={{marginLeft:"-2em"}}><strong>Yaoundé,Cameroun</strong></span>
              <span style={{marginLeft:"2em"}}><strong>+33 123456789</strong></span>
            </Col>
          </Row>
        </Col>
        <Col><span alt="profile_photo_legacy" className="roundBlock">100%</span></Col>
      </Row>
      <Row className="legacy_block_container_row2">
      <Col>
      <Button className="mt-3 mb-1"  onClick={ () => {}}  type="submit" style={{ backgroundColor:'#679966', borderColor:'#679966'}} >
         Modifier
       </Button>
      </Col>
      <Col>
      <Button className="mt-3 mb-1"  onClick={ () => {}}  type="submit" style={{ backgroundColor:'#D20000', borderColor:'#D20000'}} >
         Supprimer
       </Button>
      </Col>
      </Row>
    </Container>
    </>
  )
}

import React from 'react'
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
import { device } from '../../lib/device.js';
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
export default function LegacyBlock({item, del, edit}) {
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
      .legacy_block_container_row1_col1{
        margin-left:-1em;
      }
      @media ${device.mPhone} {
        }
      @media ${device.bPhone} {

        .legacy_block_container_row1_col1{
          margin-top:0.8em;
          margin-left:1em;
          display:flex;
          flex-direction:column;
          height:5em;
        }
        .legacy_block_container_row1_col2{
          margin-left:3em;
          margin-bottom:1em;
          width:10em;
        }
      }
      @media ${device.sTablet} {
        .roundBlock{
          margin-top:-12em !important;
        }
        .legacy_block_container_row1_col1{
          margin-top:0.8em;
          margin-left:1em;
          display:flex;
          flex-direction:column;
          height:7em;
        }
        .legacy_block_container_row1_col2{
          margin-bottom:1em;
        }
      }
      @media ${device.bTablet} {
        .legacy_block_container_row1_col1{
          margin-top:0.8em;
          margin-left:-4em;
        }
        .roundBlock{
          margin-top:-3em;
        }
      }
      `}
    />
      <Row className="legacy_block_container_row1">
        <Col sm="2"><img
        alt="profile_photo_legacy"
        // item.profil
        src= {item?.image?.location ||  "/assets/img/def-user-profile.png"}
        className="rounded-circle"
        // height={70} width={70}
        style={{backgroundColor:"#000",margin:"auto", height: "70px", width:"70px"}}
        /></Col>
        <Col className="legacy_block_container_row1_col1" sm="3"><strong>{item.name}</strong></Col>
        <Col className="legacy_block_container_row1_col2">
          <Row style={{marginTop:"1em",width:"30em"}}>
            <Col sm="4"><Image
            // item.country.flat
            src="/assets/img/flags/cmr.svg"
            height={30} width={30}
            style={{backgroundColor:"#000",margin:"auto"}}
            /></Col>
            <Col style={{}}>
              <span style={{marginLeft:"-2em"}}><strong>{` ${item.address}, ${item.country.name} `}</strong></span>
              <span style={{marginLeft:"2em"}}><strong>{item?.tel|| "+23763638870"}</strong></span>
            </Col>
          </Row>
        </Col>
        <Col><span alt="profile_photo_legacy" className="roundBlock">{`${item?.percentage}`+"%"}</span></Col>
      </Row>
      {/* <Row className="legacy_block_container_row2">
      <Col>
      <Button className="mt-3 mb-1"  onClick={edit}  type="submit" style={{ backgroundColor:'#679966', borderColor:'#679966'}} >
         Modifier
       </Button>
      </Col>
      <Col>
      <Button className="mt-3 mb-1"  onClick={ del}  type="submit" style={{ backgroundColor:'#D20000', borderColor:'#D20000'}} >
         Supprimer
       </Button>
      </Col>
      </Row> */}
       <div className="text-right mb-3">
           <Button className="mt-3 mb-1"  onClick={ edit }  type="submit" style={{ backgroundColor:'#679966', borderColor:'#679966', borderRadius:'40px', }} >
              Modifier
            </Button>
            <Button className="mt-3 mb-1" onClick={del}   type="submit" style={{ backgroundColor:'#D20000', borderColor:'#D20000', borderRadius:'40px', }} >
              Supprimer
            </Button>
         </div>
    </>
  )
}

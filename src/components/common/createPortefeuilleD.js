import React, {useState, useEffect} from 'react'
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
  Media,List,
  DropdownItem,
  Label,Collapse
} from "reactstrap";
import Image from 'next/image'
import Sinput from '../../../src/components/forms/Sinput';

export default function CreatePortefeuilleD({nb,item,operateurChoix}) {
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const toggleCollapse = () => setIsOpenCollapse(!isOpenCollapse);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
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
      table{
        border:none !important;
      }
      `}
    />
    <Row style={{marginBottom:"0.5em"}}>
      <Col sm="2">
         <Image
         src="/assets/img/icons/retrait/wallet.svg"
         alt="..."
         height={20} width={20}
         />
      </Col>
      <Col sm="5"><p style={{color:"black",fontSize:"1em",fontWeight:100}}>{"Portefeuille"+nb}</p></Col>
      <Col sm="2">
      <Image
      src="/assets/img/arrowBottom.png"
      alt="..."
      height={10} width={15}
      onClick={toggleCollapse}
      />
      </Col>
    </Row>
    <Row style={{marginBottom:"0.5em"}}>
    <Collapse isOpen={isOpenCollapse}>
    <Row>
    <Col sm="4">
      <List type="unstyled">
        <li><strong>Nom</strong>
          <center>{item.nom}
          </center>
        </li>
      </List>
    </Col>
    <Col sm="4">
      <List type="unstyled">
        <li><strong>Adresse</strong>
          <center>{item.address}
          </center>
        </li>
      </List>
    </Col>
    <Col sm="4">
      <List type="unstyled">
        <li><strong>Montant</strong>
          <center>{item.montantUSD}
          </center>
        </li>
      </List>
    </Col>
    </Row>
    </Collapse>
    </Row>
    </>
  )
}

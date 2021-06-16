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
  Media,Table,
  DropdownItem,
  Label,Collapse
} from "reactstrap";
import Image from 'next/image'
import Sinput from '../../../src/components/forms/Sinput';

export default function CreatePortefeuilleD({nb,item,operateurChoix}) {
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const toggleCollapse = () => setIsOpenCollapse(!isOpenCollapse);
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
      <Col sm="5">
          <p style={{cursor:"pointer",marginLeft:"2em",fontSize:"1.1em",color:"black",fontWeight:"bold"}} onClick={toggleCollapse}>Ouvrir</p>
          <Collapse isOpen={isOpenCollapse}>
            <Card>
              <CardBody>
                <Table borderles>
                      <thead>
                        <tr>
                          <th>Nom</th>
                          <th>Adresse</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{item.nom}</td>
                          <td>{item.address}</td>
                        </tr>
                      </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Collapse>
      </Col>
    </Row>
    </>
  )
}

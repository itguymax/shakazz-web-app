import React from "react";
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
import { Badge } from 'reactstrap';
import Sinput from '../../src/components/forms/Sinput';
import { Table } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

// reactstrap components
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
// layout for this page
import Portal from "../../src/layouts/Portal.js";
import Image from 'next/image'
// core components
import UserHeader from "../../src/components/Headers/UserHeader.js";

function Daily_transactions() {

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
      {/* Page content */}
     
      <Global
      styles={css`
        .main-content{
          background-color:#143427 !important;
        }
        th{
          border:transparent !important;
        }
        .dt_rowBlock1{
          height:4em;
          background-color:#679966;
          padding:1em;
        }
         .dt_rowBlock2{
          margin-top:1.5em;
          height:50em;
          background-color:#679966;
          padding:1em;
        }
         .dt_rowBlock3{
          height:8em;
          padding:1em;
          padding-top:2em;
          padding-bottom:0em;
        }
         .dt_rowBlock3_col1 {
          margin-left:4em;
        }
         .dt_rowBlock3_col1 p{
          font-size:1em;
          color:white;
          font-weight:100 !important;
        }
        .dt_rowBlock1_col1 p{
          font-size:1.2em;
          color:white;
          font-weight:100 !important;
        }
        .dt_rowBlock1_col2 p{
          font-size:1.5em;
          color:white;
          font-weight:300 !important;
        }
        .dt_rowBlock1_col3{
          margin-left:-2em;
        }
        .dt_rowBlock1_col3 p{
          font-size:1.5em;
          color:white;
          font-weight:300 !important;
        }
        .dt_rowBlock1_col3 img{
          margin-top:0.5em !important;
          cursor:pointer;
        }
        .buttonCustom{
          background-color:#D20000 !important;
          width:15em !important;
          height:3em !important;
          margin-top:-0.5em !important;
          border-radius: 10px !important;
          padding:0.3em !important;
        }
        .buttonCustom:hover{
          color: #D20000 !important;
          background-color:white !important;
        }
        .dt_tableContainer{
          margin-top:-1em;
          width:95%;
          height:50em;
        }
        .dt_tableContainer th,tr{
          color:white !important;
          font-size:1em !important;
          font-weight:100 !important;
        }
        .dt_tableContainer tr{
          text-align:center;
        }
        ..dt_rowBlock3 .pagination{
          background-color:blue !important;
        }
        /*Responsive*/
        @media only screen and (max-width: 360px) {       
             
          }
        @media only screen and (max-width: 414px) {       
           
        }
        @media only screen and (max-width: 768px) {
            
        }
        @media only screen and (max-width: 1024px) {
         
        }
      `}
    />
    <Container>
        <p><span>
        </span>Retour
      </p>
      <Row className="dt_rowBlock1">
         <Col className="dt_rowBlock1_col1" xs="6" sm="4"><p>Package de sortie de composition</p></Col>
         <Col xs="6" sm="4"></Col>
         <Col sm="4"><Button className="buttonCustom">Arrêter de compiler</Button></Col>
      </Row>
       <Row className="dt_rowBlock2">
         <Col className="dt_rowBlock1_col2" xs="2" sm="2"><p>Résultats:</p>
          </Col>
          <Col className="dt_rowBlock1_col3" xs="2" sm="3">
              <Row>
               <Col className="dt_rowBlock1_col3" xs="2" sm="2"><p>50</p></Col>
               <Col xs="6" sm="2">
                    <Image 
                              src="/assets/img/icons/clic_button_down.svg"
                              alt="..." 
                              height={20} width={20}
                              style={{}}  
                              />
               </Col>
            </Row>
          </Col>
          <Container className="dt_tableContainer">
              <Row>
                  <Table borderless>
                      <thead>
                        <tr>
                          <th>S.NOM.</th>
                          <th><Image 
                              src="/assets/img/Down-1.png"
                              alt="..." 
                              height={15} width={15}
                              style={{}}  
                              /> PAIEMENT NOM</th>
                          <th><Image 
                              src="/assets/img/down up.png"
                              alt="..." 
                              height={15} width={15}
                              style={{}}  
                              /> DATE</th>
                          <th><Image 
                              src="/assets/img/down up.png"
                              alt="..." 
                              height={15} width={15}
                              style={{}}  
                              /> SORTIE COMPOSEE</th>
                          <th><Image 
                              src="/assets/img/down up.png"
                              alt="..." 
                              height={15} width={15}
                              style={{}}  
                              /> POURCENTAGE QUOTIDDIEN</th>
                          <th><Image 
                              src="/assets/img/down up.png"
                              alt="..." 
                              height={15} width={15}
                              style={{}}  
                              /> </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>20210305</td>
                          <td>5-mars-2021</td>
                          <td>3,23</td>
                          <td>0,65%</td>
                        </tr>
                      </tbody>
                    </Table>
             </Row>
          </Container>
       </Row>
       <Row className="dt_rowBlock3">
         <Col className="dt_rowBlock3_col1" xs="6" sm="4"><p>Affichage de page 1 sur 5</p></Col>
         <Col sm="6">
               <Row>
                 <Col xs="6" sm="2">
                      <Image 
                              src="/assets/img/Down.png"
                              alt="..." 
                              height={15} width={25}
                              style={{}}  
                              /> 
                 </Col>
                 <Col xs="6" sm="4">
                      <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                          <PaginationLink href="#">
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">
                            4
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">
                            5
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                 </Col>
                 <Col sm="2">
                     <Image 
                              src="/assets/img/Down-1.png"
                              alt="..." 
                              height={15} width={15}
                              style={{}}  
                              /> 
                 </Col>
              </Row>
         </Col>
      </Row>
    </Container>
    </>
  );
}

Daily_transactions.layout = Portal;

export default Daily_transactions;

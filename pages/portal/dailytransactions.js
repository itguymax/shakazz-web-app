import React, { useState } from "react";
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
import { Badge } from 'reactstrap';
import Sinput from '../../src/components/forms/Sinput';
import { Table } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import DropdownSample from '../../src/components/forms/dropdownSample'
import transactions from '../../src/helpers/transactions.js'
import {page_data,stakePeriode,portefeuille_data} from '../../src/__MOCK__/daily_transactions.js';
import withAuth from '../../src/hoc/withAuth';
import AdminBleu from '../../src/layouts/AdminBleu'
// reactstrap components
import {
 
  Container,
  Row,
  Col,

} from "reactstrap";
// layout for this page
import Bleu from "../../src/layouts/Bleu.js";
import Image from 'next/image'
// core components
import UserHeader from "../../src/components/Headers/UserHeader.js";

function Daily_transactions(props) {
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
let actual_page = {
  page:1,
  paginationId:"pagination1"
};
let table_transaction_state = {
  paiement_nom:'decroissant',
  date:'decroissant',
  sortie_composee:'decroissant',
  pourcentage_quotidien:'decroissant'
};
console.log("daily props", props);
  return (
    <AdminBleu menu>
      {/* Page content */}

      <Global
      styles={css`
        .bigContainer {
          width:90em !important;
          margin-top:5em;
        }
        .bigContainer h1{
          color:white;
          font-size:1.1em;
          font-weight:100;
          cursor:pointer;
        }
        .bigContainer img{
          cursor:pointer;
        }
        .main-content{
          background-color:#143427 !important;
        }
        th{
          border:transparent !important;
        }
        .dt_rowBlock1{
          height:7em;
          background-color:#679966;
          padding:2em;
          padding-right:0.1em;
        }
         .dt_rowBlock2{
          margin-top:1.5em;
          min-height:50em;
          height:auto;
          background-color:#679966;
          padding:1em;
        }
         .dt_rowBlock3{
          height:8em;
          padding:1em;
          padding-top:2em;
          padding-bottom:0em;
        }
        .dt_rowBlock3_col2{
        }
        .dt_rowBlock3_col2 img{
          cursor:pointer;
        }
        .dt_rowBlock3_col2 .page-link{
          background-color:transparent;
          border:none;
          color:white;
          width:1.4em;
          height:1.5em;
        }
         .numberActive{
          background-color:white;
          border-radius:50%;
          color:#143427;
        }
        .numberActive a{
          background-color:white;
          border-radius:50%;
          color:#143427 !important;
          font-weight:900;
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
          width:12em !important;
          height:2.8em !important;
          margin-top:-0.1em !important;
          border-radius: 10px !important;
          padding:0.3em !important;
          font-size:1em !important;
          float:right;
        }
        .buttonCustom2{
          background-color:#CC9933 !important;
          width:5em !important;
          height:2.8em !important;
          margin-top:-0.1em !important;
          border-radius: 10px !important;
          padding:0.3em !important;
          float:right;
        }
         .buttonCustom:hover{
          color:#D20000 !important;
          background-color:white !important;
        }
        .buttonCustom2:hover{
          color: #CC9933 !important;
          background-color:white !important;
        }

        .dt_tableContainer{
          margin-top:-1em;
          width:95%;
          height:auto;
          min-height:50em;
        }
        .dt_tableContainer th,tr,td{
          color:white !important;
          font-size:1em !important;
          font-weight:100 !important;
        }
        .dt_tableContainer tr{
          text-align:center;
        }
        .dropdown-item{
          background-color:transparent;
        }
        .dropdown-item:hover{
          background-color:transparent !important;
        }
        .dropdown-toggle::after {
            display: inline-block;
            margin-right: -15.5em;
            vertical-align: 7em !important;
            margin-top:-2.4em;
            content: "";
            border-top: 0.3em solid;
            border-right: 0.3em solid transparent;
            border-bottom: 0;
            border-left: 0.3em solid transparent;
        }
        .customDropdown .dropdown{
           background-color:transparent;
           width:15em;
        }
        .customDropdown .btn{
          background-color:#143427;
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
        /*Responsive*/
        @media only screen and (max-width: 360px) {

          }
        @media only screen and (max-width: 414px) {

        }
        @media only screen and (max-width: 768px) {

        }
        @media only screen and (max-width: 1024px) {
         .dt_rowBlock1_col1 p{
          font-size:0.9em;
          }
          .buttonCustom{
            width:10em !important;
            margin-right:-4em;
          }
          .buttonCustom2{
            width:5em !important;
            margin-right:-6em;
          }
          .dt_rowBlock3_col2{
            margin-right:-2em !important;
          }
        }
      `}
    />
    <Container className="bigContainer">
        <h1><span>
        <Image onClick={()=>{ window.history.back();}}
                              src="/assets/img/Down.png"
                              alt="..."
                              height={15} width={25}
                              style={{}}
                              />
        </span> Retour
      </h1>
      <Row className="dt_rowBlock1">
         <Col className="dt_rowBlock1_col1" xs="6" sm="4"><p>Package de sortie de composition</p></Col>
         <Col xs="6" sm="4">
            <Row>
               <Col className="customDropdown" xs="6" sm="6">
                   <DropdownSample idDd={"dt_portefeuilles"} selectedOption={ portefeuille_data[0]} handleOnSelect={()=>{}} options={ portefeuille_data||[]}/>
               </Col>
               <Col xs="6" sm="6">
                <Button onClick={()=>{transactions.getTransactions(page_data)}} className="buttonCustom2">Voir</Button>
               </Col>
            </Row>
         </Col>
         <Col xs="6" sm="3"><Button className="buttonCustom">Arrêter de compiler</Button></Col>
      </Row>
       <Row className="dt_rowBlock2">
         <Col className="dt_rowBlock1_col2" xs="2" sm="2"><p>Résultats:</p>
          </Col>
          <Col className="dt_rowBlock1_col3" xs="2" sm="3">
              <Row>
               <Col className="dt_rowBlock1_col3" xs="2" sm="2"><p>50</p></Col>
            </Row>
          </Col>
          <Container className="dt_tableContainer">
              <Row>
                  <Table borderless>
                      <thead>
                        <tr>
                          <th>S.NOM.</th>
                          <th><Image id="sortimgdate" onClick={()=>{
                                if(table_transaction_state['date'] == 'croissant'){
                                  table_transaction_state['date'] = 'decroissant';
                                  transactions.sortTransactions(page_data,'date',table_transaction_state['date']);
                                }else{
                                  table_transaction_state['date'] = 'croissant';
                                  transactions.sortTransactions(page_data,'date',table_transaction_state['date']);
                                }
                            }}
                              src="/assets/img/down up.png"
                              alt="..."
                              height={15} width={15}
                              style={{}}
                              /> DATE</th>
                          <th><Image id="sortimgsortie_composee" onClick={()=>{
                                if(table_transaction_state['sortie_composee'] == 'croissant'){
                                  table_transaction_state['sortie_composee'] = 'decroissant';
                                  transactions.sortTransactions(page_data,'sortie_composee',table_transaction_state['sortie_composee']);
                                }else{
                                  table_transaction_state['sortie_composee'] = 'croissant';
                                  transactions.sortTransactions(page_data,'sortie_composee',table_transaction_state['sortie_composee']);
                                }
                            }}
                              src="/assets/img/down up.png"
                              alt="..."
                              height={15} width={15}
                              style={{}}
                              /> GAIN JOURNALIER</th>
                          <th><Image id="sortimgpourcentage_quotidien" onClick={()=>{
                                 if(table_transaction_state['pourcentage_quotidien'] == 'croissant'){
                                  table_transaction_state['pourcentage_quotidien'] = 'decroissant';
                                  transactions.sortTransactions(page_data,'pourcentage_quotidien',table_transaction_state['pourcentage_quotidien']);
                                }else{
                                  table_transaction_state['pourcentage_quotidien'] = 'croissant';
                                  transactions.sortTransactions(page_data,'pourcentage_quotidien',table_transaction_state['pourcentage_quotidien']);
                                }
                            }}
                              src="/assets/img/down up.png"
                              alt="..."
                              height={15} width={15}
                              style={{}}
                              /> POURCENTAGE QUOTIDIEN</th>
                        </tr>
                      </thead>
                      <tbody id="table_body">
                      </tbody>
                    </Table>
             </Row>
          </Container>
       </Row>
       <Row className="dt_rowBlock3">
         <Col className="dt_rowBlock3_col1" xs="6" sm="3"><p id="update_actual_page" >Affichage de page 1 sur 5</p></Col>
         <Col className="dt_rowBlock3_col2" sm="8">
               <Row>
                 <Col xs="6" sm="2">
                      <Image onClick={()=>{
                        if(actual_page['page'] > 1){
                          transactions.navigationPage(actual_page,"prev",actual_page["page"]);
                          actual_page['page'] --;
                          actual_page['paginationId'] = "pagination"+actual_page['page'];
                        }
                      }}
                              src="/assets/img/Down.png"
                              alt="..."
                              height={15} width={25}
                              style={{}}
                              />
                 </Col>
                 <Col xs="6" sm="3" style={{marginLeft:"-2em"}}>
                      <Pagination aria-label="Page navigation example">
                        <PaginationItem id="pagination1" className="numberActive">
                          <PaginationLink onClick={()=>{
                                actual_page['page'] = 1;
                                transactions.changePage("pagination1",actual_page['paginationId'],actual_page["page"]);
                                actual_page['paginationId'] = "pagination1";
                            }} href="#">
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem id="pagination2">
                          <PaginationLink onClick={()=>{
                                actual_page['page'] = 2;
                                transactions.changePage("pagination2",actual_page['paginationId'],actual_page["page"]);
                                 actual_page['paginationId'] = "pagination2";
                            }} href="#">
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem id="pagination3">
                          <PaginationLink href="#" onClick={()=>{
                                actual_page['page'] = 3;
                                transactions.changePage("pagination3",actual_page['paginationId'],actual_page["page"]);
                                actual_page['paginationId'] = "pagination3";
                            }}>
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem id="pagination4">
                          <PaginationLink href="#" onClick={()=>{
                                actual_page['page'] = 4;
                                transactions.changePage("pagination4",actual_page['paginationId'],actual_page["page"]);
                                actual_page['paginationId'] = "pagination4";
                            }}>
                            4
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem id="pagination5">
                          <PaginationLink href="#" onClick={()=>{
                                actual_page['page'] = 5;
                                transactions.changePage("pagination5",actual_page['paginationId'],actual_page["page"]);
                                actual_page['paginationId'] = "pagination5";
                            }}>
                            5
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                 </Col>
                 <Col sm="2">
                     <Image
                              onClick={()=>{
                                  if(actual_page['page'] < 5){
                                    transactions.navigationPage(actual_page,"next",actual_page["page"]);
                                    actual_page['page'] ++;
                                    actual_page['paginationId'] = "pagination"+actual_page['page'];
                                  }
                                 }
                              }
                              src="/assets/img/Down@2x.png"
                              alt="..."
                              height={15} width={25}
                              style={{}}
                              />
                 </Col>
              </Row>
         </Col>
      </Row>
    </Container>
    </AdminBleu>
  );
}

// Daily_transactions.layout = Bleu;

export default withAuth(Daily_transactions);

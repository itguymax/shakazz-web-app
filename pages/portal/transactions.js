import React, { useState, useEffect} from "react";
import withAuth from '../../src/hoc/withAuth'
// reactstrap components
import {
  Container,
  Row,
  
} from "reactstrap";
// layout for this page
import Portal from "../../src/layouts/Portal.js";
// core components
import Text from "../../src/components/transaction/divText";
import Button from "../../src/components/transaction/button";
import NavPil from "../../src/components/transaction/navPil";
import FakeData from "../../src/__MOCK__/transaction"
import  { Link } from "../../src/components/Link";

function Transactions() {
  const [currentHTabsIcons, setHTabsIcons] = useState("hTabsIcons-1");
  const [activeButton, setActiveButton] = useState("");
  function indexPrimaty(tabIndex){
    
      setHTabsIcons("hTabsIcons-1");
    
  }

  const handleSetHTabs = (indic) => { 
    setHTabsIcons(indic);
  }

  let data = FakeData();
  
  return (
    <Portal>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Text text = "Faites une transaction:"/>
        </Row>
        <Row className="justify-content-md-center">
          <Link label="Dépot" path="/portal/depot" style={{ margin: '10px',height:'35px' ,backgroundColor: '#007A5E', cursor:'pointer', padding:'8px', borderRadius:'10px', width:'9em',fontStyle :'normal', fontSize:'15px', color:'#FFFFFF', fontFamily:'Ubuntu', fontWeight:'bold', textAlign:'center'}}/>
          <Link label="Retrait" path="/portal/retrait" style={{ margin: '10px',height:'35px' ,backgroundColor: '#CE1126', cursor:'pointer', padding:'8px', borderRadius:'10px', width:'9em',fontStyle :'normal', fontSize:'15px', color:'#FFFFFF', fontFamily:'Ubuntu', fontWeight:'bold', textAlign:'center'}}/>
          <Link label="Transfert" path="/portal/transfert" style={{ margin: '10px',height:'35px' ,backgroundColor: '#CC9933', cursor:'pointer', padding:'8px', borderRadius:'10px', width:'9em',fontStyle :'normal', fontSize:'15px', color:'#FFFFFF', fontFamily:'Ubuntu', fontWeight:'bold', textAlign:'center'}}/>
        </Row>
        <Row clbt-3assName="">
          <Text text = "Historique"/>
        </Row>
        <NavPil data = {data} handleSetHTabs =  {handleSetHTabs}  currentHTabsIcons =  {currentHTabsIcons}/>
      </Container>
      </Portal>
  );
}


export default  withAuth(Transactions);

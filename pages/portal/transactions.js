import React, { useState, useEffect} from "react";

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

function Transactions() {
  const [currentHTabsIcons, setHTabsIcons] = useState("hTabsIcons-1");
  // const [hTabsIcons, setHTabsIcons] = React.useState("hTabsIcons-1");
  const [activeButton, setActiveButton] = useState("");
  function indexPrimaty(tabIndex){
    
      setHTabsIcons("hTabsIcons-1");
    
  }

  const handleSetHTabs = (indic) => { 
    setHTabsIcons(indic);
  }

  let data = FakeData();
  console.log('ici ici ici ici ici ici ici ici ici', data)
  
  return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Text text = "WalletHistorique de vos transactions:"/>
        </Row>
        <Row className="justify-content-md-center">
          <Button index="bt-1" setTab={indexPrimaty} color = "#007A5E" nom = "Dépot"/>
          <Button index="bt-2" setTab={indexPrimaty} color = "#CE1126"  nom = "Retrait"/>
          <Button index="bt-3" setTab={indexPrimaty} color = "#CC9933"  nom = "Transfert"/>
        </Row>
        <Row clbt-3assName="">
          <Text text = "Historique"/>
        </Row>
        <NavPil data = {data} handleSetHTabs =  {handleSetHTabs}  currentHTabsIcons =  {currentHTabsIcons}/>
      </Container>
  );
}

Transactions.layout = Portal;

export default Transactions;

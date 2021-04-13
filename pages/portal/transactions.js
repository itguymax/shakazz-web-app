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

function Transactions() {
  const [currentHTabsIcons, setHTabsIcons] = useState("hTabsIcons-1");
  
  function indexPrimaty(tabIndex){
    console.log('le le le le le :',tabIndex)
    setHTabsIcons(tabIndex);
  }

  useEffect(() => {

  });
  
  return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Text text = "Historique de vos transactions:"/>
        </Row>
        <Row className="justify-content-md-center">
          <Button index="hTabsIcons-1" setTab={indexPrimaty} color = "#007A5E" nom = "Dépot"/>
          <Button index="hTabsIcons-2" setTab={indexPrimaty} color = "#CE1126"  nom = "Retrait"/>
          <Button index="hTabsIcons-3" setTab={indexPrimaty} color = "#CC9933"  nom = "Transfert"/>
        </Row>
        <Row className="">
          <Text text = "Historique"/>
        </Row>
        <NavPil currentHTabsIcons =  {currentHTabsIcons}/>
      </Container>
  );
}

Transactions.layout = Portal;

export default Transactions;

import React, { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  
} from "reactstrap";
// layout for this page
import Portal from "../../layouts/Portal";
// core components
import Header from "../../components/Headers/Header.js";

const Crowdlending = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      {/* <Header /> */}
      {/* Page content */}
      <Container fluid>
     
     <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}>
       <p> Crowdlending</p>
     </div>
                   
      </Container>
    </>
  );
};

Crowdlending.layout = Portal;

export default Crowdlending;

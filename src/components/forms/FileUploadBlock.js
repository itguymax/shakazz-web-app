import { Flex } from "@theme-ui/components";
import React, {useState, useEffect} from "react";
import {Global,css} from "@emotion/react"
import { Badge } from 'reactstrap';
import styled from '@emotion/styled'
// reactstrap components
import {
  DropdownToggle,
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";
import Image from 'next/image';

function FileUploadBlock({text}) {
	
  const launchUpload = () => {
    
    const source_file = document.createElement("input");
    source_file.type = "file";
    source_file.multiple = "false";
    source_file.click();
  };
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
         <Row className="wrapper"  style={{marginBottom:"1em"}}>
           <Col className="colLeft" xs="5" style={{border:"1px solid #e5e5e5",borderRadius:"10px",paddingLeft:"8em",paddingTop:"0.5em",paddingBottom:"0.5em"}}>
                <h4>{text}<Badge style={{padding:"0.3em",backgroundColor:"#FF0000"}}color="success"> </Badge>
                <Badge style={{float:"right",padding:"0.4em",backgroundColor:"#32DC00"}}color="success"> </Badge></h4>
                    <Row>                  
                       <Col xs="12"><Button onClick={() => launchUpload()} style={{padding:"0.4em",borderRadius:"10px",marginRight:"0.8em"}}>Ajouter</Button><span> Aucun fichier choisit</span></Col>
                    </Row>
           </Col>
        </Row>
  );
}

export default FileUploadBlock;
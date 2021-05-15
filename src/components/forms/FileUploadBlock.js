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

function FileUploadBlock({text,id,idResponse}) {
  function uploadFiles(files,idResponse){
    const kyc_display = document.getElementById("kyc_display");
	 	let elt = "";
		let reader = new FileReader();
    	reader.addEventListener("load", function(){
        requestAnimationFrame(()=>{
          idResponse.innerHTML = "Un fichier a été selectionné";
          kyc_display.src = this.result;
          kyc_display.style.visibility = "visible";
        });
    	},false);
    	reader.readAsDataURL(files);
    }
  const launchUpload = (id,idResponse) => {
    const response = document.getElementById(idResponse);
    const source_file = document.createElement("input");
    source_file.type = "file";
    source_file.multiple = "false";
    source_file.click();
    source_file.addEventListener("change",()=>{
  		uploadFiles(source_file.files[0],response);
  	});
    return source_file;
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
                <h4 style={{color:"black"}}>{text}<Badge style={{padding:"0.3em",backgroundColor:"#FF0000"}}color="success"> </Badge>
                <Badge style={{float:"right",padding:"0.4em",backgroundColor:"#32DC00"}}color="success"> </Badge></h4>
                    <Row>
                       <Col xs="12"><Button onClick={() => launchUpload(id,idResponse)} style={{padding:"0.4em",borderRadius:"10px",marginRight:"0.8em"}}>Ajouter</Button><span id={idResponse}> Aucun fichier choisit</span></Col>
                    </Row>
           </Col>
        </Row>
  );
}

export default FileUploadBlock;

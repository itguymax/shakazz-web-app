import { Flex } from "@theme-ui/components";
import React, {useState, useEffect} from "react";
import {Global,css} from "@emotion/react"
import { Badge } from 'reactstrap';
import styled from '@emotion/styled'
import {useMutation, useQueryClient} from 'react-query';
import {useAppContext} from "../../context";
import {serviceKyc} from '../../services/kyc.service'
import {profileUserInfos} from '../../services/profileUserInfos.service'
import {useServiceKyc} from '../../hooks';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { kycSchema } from "../../validations";
import { useRouter } from 'next/router';
// reactstrap components
import {
  DropdownToggle,
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
  Spinner
} from "reactstrap";
import Image from 'next/image';


function FileUploadBlock({setColorAlert,setResponseAlert,setVisibleAlert,text,id,idSend,idResponse}) {
const {mutateAsync:cpc, isLoading:icpc}  = useServiceKyc();
const context = useAppContext();
const router = useRouter();
const { register, handleSubmit , errors} = useForm({
  resolver: yupResolver(kycSchema),
});
const [datasending, setDatasending] = useState("");
const [bucket, setBucket] = useState("");
const [responseToast, setResponseToast] = useState("");
const [submitting, setSubmitting] = useState(false);
const FormData = require('form-data');
const form = new FormData();
const onSubmit = async ()  => {
  form['bucket'] = bucket;
  form['file'] = datasending;
  const body = {
    form
    }
      //setSubmitting(isLoading);
      /*const { kyc_display_input} = hookData;
      userdata = {kyc_display_input};*/
      //setDatasending(hookData.kyc_display_input)
      const res = await cpc({accessToken: context.appState.accessToken ,data:body});
      if(res.error && !res.success){
        setColorAlert("primary");
        setResponseAlert(res.message);
        setVisibleAlert(true);
         } else {
           setShowToast(true);
           setColorAlert("danger");
           setResponseAlert(res.message);
           setVisibleAlert(true);
       }
};

  function uploadFiles(files,idResponse){
  
    const kyc_display = document.getElementById("kyc_display");
	 	let elt = "";
		let reader = new FileReader();
    	reader.addEventListener("load", function(){
        setBucket(id);
        requestAnimationFrame(()=>{
          idResponse.innerHTML = files.name;
          kyc_display.src = this.result;
          setDatasending(this.result);
          kyc_display.style.visibility = "visible";
        });
    	},false);
    	reader.readAsDataURL(files);
    }
  const launchUpload = (id,idResponse) => {
    const response = document.getElementById(idResponse);
    const send = document.getElementById(idSend);
    const source_file = document.createElement("input");
    source_file.type = "file";
    source_file.accept = "image/png, image/jpeg";
    source_file.multiple = "false";
    source_file.click();
    source_file.addEventListener("change",()=>{

      console.log("fillllllle",source_file.files[0],response);

        setSubmitting(true);
        requestAnimationFrame(()=>{
          send.style.display = "block";
        })
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

                       <Col xs="12"><span onClick={() =>{
                         launchUpload(id,idResponse);
                       }} style={{backgroundColor:"#669965",color:"white",cursor:"pointer",padding:"0.4em",borderRadius:"10px",marginRight:"0.8em"}}>Ajouter</span><span id={idResponse}> Aucun fichier choisit</span></Col>
                    </Row><br/>
                    <Row>
                       <Col xs="12"><span style={{display:"none",backgroundColor:"#c89631",width:"4.5em",color:"white",cursor:"pointer",padding:"0.4em",borderRadius:"10px",marginRight:"0.8em"}} onClick={() =>{onSubmit()}} id={idSend}>
                       {icpc? <Spinner size="sm" color="#cc993a" />: "Envoyer"}
                       </span></Col>

                    </Row>
           </Col>
        </Row>
  );
}

export default FileUploadBlock;

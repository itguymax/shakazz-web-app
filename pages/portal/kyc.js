import React, {useRef, useState, useEffect} from "react";
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
import { Badge } from 'reactstrap';
import Sinput from '../../src/components/forms/Sinput';
import CreatePortefeuille from '../../src/components/common/createPortefeuille';
import FileUploadBlock from '../../src/components/forms/FileUploadBlock';
import country from '../../src/helpers/countries.js';
import withAuth from '../../src/hoc/withAuth';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { kycSchema } from "../../src/validations";
import { useRouter } from 'next/router';
import {useMutation, useQueryClient} from 'react-query';
import {useAppContext} from "../../src/context";
import {serviceKyc} from '../../src/services/kyc.service'
import {useServiceKyc} from '../../src/hooks';
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
  Spinner,
  Toast,
  ToastBody,
  ToastHeader
} from "reactstrap";
// layout for this page
import Portal from "../../src/layouts/Portal";
import Image from 'next/image'
// core components
import UserHeader from "../../src/components/Headers/UserHeader.js";

function Kyc() {
  const {mutateAsync:cpc, isLoading:icpc}  = useServiceKyc();
const context = useAppContext();
const router = useRouter();
const { register, handleSubmit , errors} = useForm({
  resolver: yupResolver(kycSchema),
});
const [datasending, setDatasending] = useState("");
const [showToast, setShowToast] = useState(false);
const [bucket, setBucket] = useState("");
const [responseToast, setResponseToast] = useState("");
const toggle = () => setShowToast(!showToast);
const [submitting, setSubmitting] = useState(false);
const onSubmit = async (hookData)  => {
  const body = {
    data: {
      file: datasending,
      bucket: bucket
      }
    }
    console.log("file upload", body);
      //setSubmitting(isLoading);
      /*const { kyc_display_input} = hookData;
      userdata = {kyc_display_input};*/
      setDatasending(hookData.kyc_display_input)
      const res = await cpc({accessToken: context.appState.accessToken ,data:body});
      if(res.error && !res.success){
        console.log(res.message)
        setShowToast(true);
        setResponseToast(res.message)

         } else {
           setShowToast(true);
           setResponseToast(res.message)
       }
};
//
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
    <Portal>
      {/* Page content */}

      <Global
      styles={css`
        /*Responsive*/
        @media only screen and (max-width: 360px) {

          }
        @media only screen and (max-width: 414px) {
           .wrapper{
              padding-left:1em !important;
              display: flex;

            }
            .colLeft{
              width:30em !important;
              padding-left:2em !important;
            }
            .colLeft button{
              padding:0.2em !important;
              margin:auto !important;
              width:5em;
            }
        }
        @media only screen and (max-width: 768px) {
            .wrapper{
              padding-left:1em !important;
              display: flex;

            }
            .colLeft{
              width:30em !important;
              padding-left:2em !important;
            }
        }
        @media only screen and (max-width: 1024px) {

        }
      `}
    />
     <Container fluid>
        <h2 style={{color:"black"}}>IMPORTER LES DOCUMENTS</h2>
        <FileUploadBlock setBucket={setBucket} id="passport" idResponse="kyc_infos_fichier1" text="Votre passport ou CNI"/>
        <FileUploadBlock setBucket={setBucket} id="plan" idResponse="kyc_infos_fichier2" text="Votre plan de localisation"/>
        <FileUploadBlock setBucket={setBucket} id="facultatif" idResponse="kyc_infos_fichier3" text="Documents facultatifs"/>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <Col style={{float:"right",marginTop:"-15em",textAlign:"center"}} xs="6"><h2 style={{color:"black",fontWeight:"100"}}>
              Le KYC nous permet de vérifier votre identité et mieux sécuriser votre compte.</h2>
              <Sinput
                label=""
                name="kyc_display_input"
                id="kyc_display_input"
                placeholder=""
                register={register}
                iStyle={{visibility:"hidden",borderRadius:"15px", overflow:"hidden"}}
                inputBg="#fff"
                type="text"
                handleOnchange={()=>{}}
                />
               <img
                name="kyc_display"
                id="kyc_display"
                src=""
                handleOnchange={()=>{}}
                style={{visibility:"hidden",margin:"auto",width:"15em",height:"15em"}}
               />
        </Col>
        <Button type="submit">Envoyez!</Button>
        </form>
        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
          <Toast isOpen={showToast}>
           <ToastHeader toggle={toggle} icon="secondary">Message</ToastHeader>
           <ToastBody>
              {responseToast}
           </ToastBody>
         </Toast>
        </div>
      </Container>
    </Portal>
  );
}
//Kyc.layout = Portal;

export default withAuth(Kyc);

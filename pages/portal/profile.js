import React, {useState, useRef, useEffect } from "react";
import {Global,css} from "@emotion/react";
import styled from '@emotion/styled';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from "../../src/validations";
import { useUpdateUser } from '../../src/hooks';
import withAuth from '../../src/hoc/withAuth';
import Sinput from '../../src/components/forms/Sinput';
import { device } from '../../src/lib/device.js';
import {useAppContext} from "../../src/context";
import DropDownC from '../../src/components/forms/Dropdownc'
import DropDownPhone from '../../src/components/forms/DropDownPhone'
import country from '../../src/helpers/countries.js'
// reactstrap components
import {
  Alert,
  Button,
  FormGroup,
  Form,
  Container,
  Row,
  Col,
  Spinner
} from "reactstrap";
// layout for this page
import Portal from "../../src/layouts/Portal";

// core components
import Possa from "../../src/components/possa";
import ProfileForm from '../../src/components/forms/Profileform';
import ProfileUpload from '../../src/components/forms/ProfileUpload';
import { useRouter } from 'next/router'
function Profile() {
  const router = useRouter();
   const context = useAppContext();
   const [visible, setVisible] = useState(false);
   const [colorAlert, setColorAlert] = useState("primary");
   const [responseAlert, setResponseAlert] = useState("");
   const onDismiss = () => setVisible(false);
  const [verified, setVerified]= useState(false);
  const [errormsg, setErrormsg]= useState(null);
  const [successmsg, setSuccessmsg]= useState(null);
  const [additionaldata, setUserAdditionalData] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { mutateAsync, isLoading } = useUpdateUser();
  const [isAccount,setAccountType]= useState("");
  let account_type = [{val:'Personnel'},{val:'Particulier'}];
  let sexe = [{val:'Homme'},{val:'Femme'}];
  let currency = [{val:'USD'}];
  const { register, handleSubmit, watch, errors } = useForm({
      resolver: yupResolver(profileSchema),
    });
  //

  return (
    <Portal>
      {/* Page content */}
      <Container>
      <Global
      styles={css`
        h2{
          color:#444444 !important;
        }
        img{
          cursor:pointer;
          transition: all .8s ease-in-out;
        }
        img[id="profile_photo"]:hover{
          transform: scale(1.5);
        }
        input{
          background-color: #f0f0f0 !important;
          border:1px solid white !important;
          width:15em !important;
        }
        input[type="text"]{
          background-color: #f0f0f0 !important;
          border:1px solid white !important;
        }
        .dropdown-menu.show{
          max-height:'2em !important';
        }
        .profile_box_portefeuille_col3{
          margin-top:-0.7em;
          margin-left:0.7em;
        }
        .profile_box_portefeuille_col2{
          margin-left:-3em;
        }
        .dropdown button{
          height:3em !important;
        }
        .dropdown-menu{
          max-height:23em !important;
        }
        button[id="navbarDropdownMenuLink2"]{
          background-color: #f0f0f0 !important;
          border:1px solid #f0f0f0 !important;
          width:10em !important;
          border-radius: 15px !important;
          padding-right:1em !important;
          padding-right:1em !important;
        }
        .profileCol{
          background-color:white;
          padding-top:1em;
          width:25em;
          margin-bottom:0.5em;
        }
        .profileCol:hover{
          cursor:pointer;
        }
        #navbarDropdownMenuLink2{
          min-width:3em !important;
          width:auto !important;
        }
        /*Responsive*/
        @media ${device.mPhone}{
             .profileColWrapper{
               display:flex;
               flex-direction: column;
             }
             .createPortefeuille{
               width:14em !important;
             }
             #navbarDropdownMenuLink2{
                width:17em !important;
              }
          }
        @media ${device.bPhone} {
             .profileColWrapper{
               display:flex;
               flex-direction: column;
             }
          .createPortefeuille{
            width:20em !important;
          }
          .text-muted.font-italic.form-control{
            width:14em !important;
          }
          .profile_box_portefeuille_col2{
            margin-left:1em !important;
            margin-top:-2em;
          }
          input[type="text"]{
            width:8em !important;
          }
          .row_section4{
            width:10em;
            height:10em;
          }
          .row_section4 .row{
            width:20em;
            display: flex;
            flex-wrap: nowrap;
          }
        }
        @media ${device.sTablet} {
          input[type="text"]{
            width:6em !important;
          }
          #navbarDropdownMenuLink2{
            width:13em !important;
          }
          .profile_box_portefeuille_col1{
            margin-left:-2em;
          }
          .profile_box_portefeuille_col2{
            margin-left:-2em;
          }
          .profile_box_portefeuille_col3{
            margin-top:-0.7em;
            margin-left:3.5em !important;
          }
        }
        @media ${device.bTablet} {
          .createPortefeuille{
            height:17em !important;
          }
          .profile_box_portefeuille_col3{
            margin-top:-0.7em;
            margin-left:2em;
          }
          .profile_box_portefeuille_col2{
            margin-left:-1.9em;
          }
        }
      `}
    /><div style={{position:"fixed",bottom:"20px",right:"20px",zIndex:"900"}}>
      <Alert style={{marginLeft:"1em",width:"20em"}} color={colorAlert} isOpen={visible} toggle={onDismiss} fade={false}>
        {responseAlert}
      </Alert>
    </div>
      <h2>INFORMATIONS PERSONNELLES</h2>
      <ProfileForm isAccount={isAccount} setAccountType={setAccountType}/>
       {/* <Col sm="4"> */}
           <ProfileUpload/>
          {/* </Col> */}
      </Container>
      <Possa/>
    </Portal>
  );
}

export default withAuth(Profile);

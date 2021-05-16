import React, {useState, useRef, useEffect } from "react";
import {Global,css} from "@emotion/react";
import styled from '@emotion/styled';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from "../../src/validations";
import { useUpdateUser } from '../../src/hooks';
import withAuth from '../../src/hoc/withAuth';
import { device } from '../../src/lib/device.js';
import {useAppContext} from "../../src/context";
// reactstrap components
import {
  FormGroup,
  Form,
  Container,
  Row,
  Col,

} from "reactstrap";
// layout for this page
import Portal from "../../src/layouts/Portal";

// core components
import Possa from "../../src/components/possa";
import ProfileForm from '../../src/components/forms/Profileform';
import { useRouter } from 'next/router'
function Profile() {
  const router = useRouter();
   const context = useAppContext();
  const [verified, setVerified]= useState(false);
  const [errormsg, setErrormsg]= useState(null);
  const [successmsg, setSuccessmsg]= useState(null);
  const [additionaldata, setUserAdditionalData] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { mutateAsync, isLoading } = useUpdateUser();

   const onSubmit =  async (data) => {
     const body = {
    data : {
        address : {
            country:{
            name : "manathan",
            indicatif : "+237",
            flag : "src/img/cameroun.jpg"
            },
        state : "centre",
        city : "yaounde",
        street : "ekie"
        },
        profil : "Personnel",
        companyName:"umdeny",
        name: "ludovic",
        firstName:"nziko",
        lastName:"feutse",
        userName: "le nid1",
        birthday : "2021-05-03",
        email : "feutseludovic@gmail.com"
        }
      }
    setSubmitting(true);
    alert("before send request")
    let userdata;
    const {name,dob,adresse,email,pseudo} = data;
    userdata = {...additionaldata,name,dob,adresse,email,pseudo};
    //const res = mutatesAsync({accessToken: context.appState.accessToken,data: body});
    alert("before send request")
     if(res.error && !res.success){alert("if")
          //setLoadingC(false);
          //seterrorMsgC(res.message)
          //setsuccessMsgC('')
          return;
        } else {alert("else")
        //setLoadingC(false)
        //seterrorMsgC('')
        //setsuccessMsgC(res.message)
          return;

      }
      //console.log(" chahhhhhhcccc",data, res);
  };
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
    />
      <h2>INFORMATIONS PERSONNELLES</h2>
      <ProfileForm/>
      <Row>
        <Col xs="9">
        <Form role="form" className="my-3" onSubmit={()=>{handleSubmit(onSubmit)}}><Row>
          <Col xs="5">
              <DropDownC name="account_type" idDd={"profile_type_de_compte"} label="Type de compte:" register={()=>{}} name="canal" selectedOption={account_type[0]} handleOnSelect={()=>{}} options={account_type||[]}/>
              <Sinput
              label="Nom complet"
              placeholder='entrez le nom complet'
              name="name"
              register={register}
              iStyle={{borderRadius:"15px", overflow:"hidden"}}
              inputBg="#fff"
              type="text"
              handleOnchange={()=>{}}
              />
              <Sinput
              name="dob"
             label="Date de naissance"
             placeholder='entrez le nom complet:'
             register={register}
             iStyle={{borderRadius:"15px", overflow:"hidden"}}
             inputBg="#fff"
             type="date"
             handleOnchange={()=>{}}
             />
             <DropDownPhone name="country" country idDdM={"dt_country_img_1"} idDd={"dt_country_flag"} label="Pays:" flag register={()=>{}} name="canal" selectedOption={country[41].name} handleOnSelect={()=>{}} options={country||[]}/>
             <Sinput
             label="Adresse"
             name="adresse"
             register={register}
             iStyle={{borderRadius:"15px", overflow:"hidden"}}
             inputBg="#fff"
             type="text"
             handleOnchange={()=>{}}
             />
             <Button type="submit">Vérification</Button>
          </Col>
          <Col xs="5">
            <Sinput
            label='E-mail'
            name="email"
            placeholder="entrez votre e-mail"
            register={register}
            iStyle={{borderRadius:"15px", overflow:"hidden"}}
            inputBg="#fff"
            type="text"
            handleOnchange={()=>{}}
            />
            <DropDownPhone name="phone_number" idDdM={"dt_phone_img_1"} idDd={"dt_phone_number"} label="Numéro de téléphone" phone register={()=>{}} name="canal" selectedOption={country[41]} handleOnSelect={()=>{}} options={country||[]}/>
            <DropDownC name="sexe" idDd={"profile_sexe"} label="Sexe:" register={()=>{}} name="canal" selectedOption={sexe[0]} handleOnSelect={()=>{}} options={sexe||[]}/>
            <DropDownC name="currency" idDd={"profile_monaie"} label="Monnaie:" register={()=>{}} name="canal" selectedOption={currency[0]} handleOnSelect={()=>{}} options={currency||[]}/>
            <Sinput
              label='Pseudo'
              name="pseudo"
              placeholder=""
              register={register}
              iStyle={{borderRadius:"15px", overflow:"hidden"}}
              inputBg="#fff"
              type="text"
              handleOnchange={()=>{}}
              />
          </Col>
          </Row></Form>
        </Col>
        <Col xs="3">
        <Form role="form" onSubmit={()=>{}}>
          <Row>
            <Image
            id="profile_photo"
            src="/assets/img/photoequipe/bisso.png"
            alt="..."
            className="rounded-circle"
            height={200} width={200}
            style={{backgroundColor:"#000",margin:"auto"}}
            />
             <Image
              src="/assets/img/free-badge-icon-1361-thumb@2x.png"
              alt="..."                 height={150} width={150}
              style={{backgroundColor:"#000",margin:"auto",marginTop:"1em"}}
              />
              <Button type="submit">Vérification</Button>
          </Row>
        </Form>
        </Col>
      </Row>
        <Row>
          <Col xs="6" sm="4">
                   <Col md={12} className="row_section4" style={{marginTop:"3em"}}>
                     <Row>
                       <Col xs="6" sm="2">
                          <Image
                          src="/assets/img/icons/retrait/wallet.svg"
                          alt="..."
                          height={40} width={40}
                          style={{backgroundColor:"#000",margin:"auto"}}
                          />
                       </Col>
                       <Col xs="6" sm="6"><p style={{color:"black",marginTop:"-0.5em",fontSize:"1.8em",fontWeight:300}}>Portefeuille</p></Col>

                       <Col xs="6" sm="3">
                        <Image
                          src="/assets/img/icons/clic_button_down.svg"
                          alt="..."
                          height={20} width={20}
                          style={{backgroundColor:"#000",margin:"auto"}}
                          />
                       </Col>

                     </Row>
                  <Row>
                   <Col xs="6" sm="6"><p>Portefeuille</p></Col>

                   <Col xs="6" sm="2">
                    <Image
                      src="/assets/img/icons/add.svg"
                      alt="..."
                      height={20} width={20}
                      style={{backgroundColor:"#000",margin:"auto"}}
                      />
                   </Col>
                 </Row>
                  </Col>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="profileColWrapper" >
            <Col xs="6" sm="5" style={{marginBottom:"3em"}}>

                      <CreatePortefeuille/>
            </Col>
            <Col xs="6" sm="6" style={{marginBottom:"3em"}}>
                <Container className="" style={{
                      width:"100%",
                      height:"14em",
                      marginLeft:"2em",
                      backgroundColor:"white",
                      borderRadius:"16px",
                      padding:"1em"}}>
                        <CreatePortefeuilleD nb={"1"}/>
                        <CreatePortefeuilleD nb={"2"}/>
                        <CreatePortefeuilleD nb={"3"}/>
                        <CreatePortefeuilleD nb={"4"}/>
                      </Container>
            </Col>
        </Row>
      </Container>
      <Possa/>
    </Portal>
  );
}

//Profile.layout = Portal;

export default withAuth(Profile);

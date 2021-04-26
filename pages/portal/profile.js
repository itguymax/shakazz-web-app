import React from "react";
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
import Sinput from '../../src/components/forms/Sinput';
import CreatePortefeuille from '../../src/components/common/createPortefeuille';
import DropDownC from '../../src/components/forms/Dropdownc'
import country from '../../src/helpers/countries.js'

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
} from "reactstrap";
// layout for this page
import Portal from "../../src/layouts/Portal.js";
import Image from 'next/image'
// core components
import UserHeader from "../../src/components/Headers/UserHeader.js";

function Profile() {
  let account_type = [{val:'Personnel'},{val:'Particulier'}];
  let currency = [{val:'USD'}];
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
    <>
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
        img:hover{
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
        @media only screen and (max-width: 360px) {
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
        @media only screen and (max-width: 414px) {
             .profileColWrapper{
               display:flex;
               flex-direction: column;
             }
          .createPortefeuille{
            width:22em !important;
          }
          .profileCol{
            width:7em;
          }
        }
        @media only screen and (max-width: 768px) {
          input[type="text"]{
            width:13em !important;
          }
          #navbarDropdownMenuLink2{
            width:13em !important;
          }
        }
        @media only screen and (max-width: 1024px) {
          .createPortefeuille{
            height:17em !important;
          }
        }
      `}
    />
      <h2>INFORMATIONS PERSONNELLES</h2>
        <Row>
          <Col xs="6" sm="4">
              <Form>
                <Row form>
                  <Col md={12}>
                        <DropDownC idDd={"profile_type_de_compte"} label="Type de compte:" register={()=>{}} name="canal" selectedOption={account_type[0]} handleOnSelect={()=>{}} options={account_type||[]}/>
                  </Col>
                  <Col md={12} className="profileCol">
                      <Sinput
                      label="Nom complet"
                      placeholder='entrez le nom complet'
                      name="name"
                      register={()=>{}}
                      iStyle={{borderRadius:"15px", overflow:"hidden"}}
                      inputBg="#fff"
                      type="text"
                      handleOnchange={()=>{}}
                      />
                  </Col>
                   <Col md={12}>
                       <Sinput
                      label="Date de naissance"
                      placeholder='entrez le nom complet:'
                      name="name"
                      register={()=>{}}
                      iStyle={{borderRadius:"15px", overflow:"hidden"}}
                      inputBg="#fff"
                      type="date"
                      handleOnchange={()=>{}}
                      />
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                        <DropDownC idDd={"profile_pays"} label="Pays:" flag register={()=>{}} name="canal" selectedOption={country[41].name} handleOnSelect={()=>{}} options={country||[]}/>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                        <Sinput
                        label="Adresse"
                        name="name"
                        register={()=>{}}
                        iStyle={{borderRadius:"15px", overflow:"hidden"}}
                        inputBg="#fff"
                        type="text"
                        handleOnchange={()=>{}}
                        />
                  </Col>
                </Row>
                <Button>Vérification</Button>
                   <Col md={12} style={{marginTop:"3em"}}>
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
                   <Col xs="6" sm="2">

                   </Col>
                   <Col xs="6" sm="6"><p>Portefeuille</p></Col>

                   <Col xs="6" sm="2">
                    <Image
                      src="/assets/img/icons/clic_button_down.svg"
                      alt="..."
                      height={20} width={20}
                      style={{backgroundColor:"#000",margin:"auto"}}
                      />
                   </Col>

                 </Row>
                  </Col>
              </Form>
          </Col>
          <Col xs="6" sm="4">
               <Form>
                <Row form>
                  <Col md={12}>
                        <Sinput
                        label='E-mail'
                        name="name"
                        placeholder="entrez votre e-mail"
                        register={()=>{}}
                        iStyle={{borderRadius:"15px", overflow:"hidden"}}
                        inputBg="#fff"
                        type="text"
                        handleOnchange={()=>{}}
                        />
                  </Col>
                  <Col md={12} style={{display:"flex"}}>
                     <Row>
                        <Col sm={6}>
                          <DropDownC  idDd={"dt_phone_number"} label="Numéro de téléphone" phone register={()=>{}} name="canal" selectedOption={country[41]} handleOnSelect={()=>{}} options={country||[]}/>
                        </Col>
                        <Col sm={6}>
                           <Sinput
                              label=""
                              name="name"
                              register={()=>{}}
                              iStyle={{borderRadius:"15px", overflow:"hidden",marginTop:"2.9em"}}
                              inputBg="#fff"
                              type="text"
                              handleOnchange={()=>{}}
                              />
                        </Col>
                     </Row>
                  </Col>
                  <Col md={12}>
                          <Sinput
                            label='Pseudo'
                            name="name"
                            placeholder=""
                            register={()=>{}}
                            iStyle={{borderRadius:"15px", overflow:"hidden"}}
                            inputBg="#fff"
                            type="text"
                            handleOnchange={()=>{}}
                            />
                   </Col>
                   <Col md={6}>
                        <DropDownC idDd={"profile_monaie"} label="Monnaie:" register={()=>{}} name="canal" selectedOption={currency[0]} handleOnSelect={()=>{}} options={currency||[]}/>
                   </Col>
                </Row>
              </Form>
          </Col>
          <Col sm="4">
            <Col md={12} style={{textAlign:"center"}} >
              <Image
              src="/assets/img/photoequipe/bisso.png"
              alt="..."
              className="rounded-circle"
              height={200} width={200}
              style={{backgroundColor:"#000",margin:"auto"}}
              />
                      <FormGroup>
                        <Button>Vérification</Button>
                      </FormGroup>
               <Image
                src="/assets/img/free-badge-icon-1361-thumb@2x.png"
                alt="..."                 height={150} width={150}
                style={{backgroundColor:"#000",margin:"auto",marginTop:"1em"}}
                />
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
                <Container style={{
                      width:"100%",
                      height:"14em",
                      marginLeft:"2em",
                      backgroundColor:"white",
                      borderRadius:"16px",
                      padding:"1em"}}>

                      </Container>
            </Col>
        </Row>
      </Container>
    </>
  );
}

//Profile.layout = Portal;

export default Profile;

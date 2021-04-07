import React from "react";
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
import Sinput from '../../src/components/forms/Sinput';
import DropDownC from '../../src/components/forms/Dropdownc'

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
  let country = [{val:'Cameroun'}];
  let country_indicatif = [{val:'+237'}];
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
        input{
          background-color: #f0f0f0 !important;
          border:1px solid white !important;
          width:17em !important;
        }
        input[type="text"]{
          background-color: #f0f0f0 !important;
          border:1px solid white !important;
        }
        button[id="navbarDropdownMenuLink2"]{
          background-color: #f0f0f0 !important;
          border:1px solid #f0f0f0 !important;
          width:18em !important;
          border-radius: 15px !important;
          padding-right:1em !important;
        }
      `}
    />
      <h2>INFORMATIONS PERSONNELLES</h2>
        <Row>
          <Col xs="6" sm="4">
              <Form>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <FormGroup>
                      <Label for="exampleDate">Type de compte:</Label>
                        <DropDownC register={()=>{}} name="canal" selectedOption={account_type[0]} handleOnSelect={()=>{}} options={account_type||[]}/>
                    </FormGroup>

                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                    <Label for="exampleDate">Nom complet:</Label>
                      <Sinput
                      placeholder='entrez le nom complet:'
                      name="name"
                      register={()=>{}}
                      iStyle={{width:"15em",borderRadius:"15px", overflow:"hidden"}}
                      inputBg="#fff"
                      type="text"
                      handleOnchange={()=>{}}
                      />
                    </FormGroup>
                  </Col>
                   <Col md={12}>
                     <FormGroup>
                        <Label for="exampleDate">Date de naissance:</Label>
                        <Input
                          type="date"
                          name="date"
                          id="exampleDate"
                          placeholder=""
                        />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                        <Label for="exampleDate">Pays:</Label>
                        <DropDownC register={()=>{}} name="canal" selectedOption={country[0]} handleOnSelect={()=>{}} options={country||[]}/>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                     <Label for="exampleDate">Adresse</Label>
                     <FormGroup>
                        <Sinput
                        label=''
                        name="name"
                        register={()=>{}}
                        iStyle={{width:"15em",borderRadius:"15px", overflow:"hidden"}}
                        inputBg="#fff"
                        type="text"
                        handleOnchange={()=>{}}
                        />
                      </FormGroup>
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
                    <FormGroup>
                      <Label for="exampleDate">E-mail:</Label>
                        <Sinput
                        label='Nom complet:'
                        name="name"
                        placeholder="entrez votre e-mail"
                        register={()=>{}}
                        iStyle={{width:"15em",borderRadius:"15px", overflow:"hidden"}}
                        inputBg="#fff"
                        type="text"
                        handleOnchange={()=>{}}
                        />
                      </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                        <Label>Numéro de téléphone:</Label>
                        <DropDownC register={()=>{}} name="canal" selectedOption={country_indicatif[0]} handleOnSelect={()=>{}} options={country_indicatif||[]}/>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                      <FormGroup>
                        <Label>Pseudo:</Label>
                        <FormGroup>
                          <Sinput
                            label='Pseudo:'
                            name="name"
                            placeholder=""
                            register={()=>{}}
                            iStyle={{width:"15em",borderRadius:"15px", overflow:"hidden"}}
                            inputBg="#fff"
                            type="text"
                            handleOnchange={()=>{}}
                            />
                        </FormGroup>
                      </FormGroup>
                   </Col> 
                   <Col md={12}>
                    <FormGroup>
                        <Label>Monnaie:</Label>
                        <DropDownC register={()=>{}} name="canal" selectedOption={currency[0]} handleOnSelect={()=>{}} options={currency||[]}/>
                    </FormGroup>
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
        <Row>
            <Col xs="6" sm="5" style={{marginBottom:"3em"}}>
                      <Container style={{
                      width:"100%",
                      height:"15em",
                      marginLeft:"2em",
                      backgroundColor:"#f0f0f0",
                      borderRadius:"16px",
                      padding:"1em",paddingTop:"2em"}}>
                       <Row style={{display:"flex",
                      justifyContent: "space-around"}}>
                        <Label>Projet d'études:</Label>
                        <Sinput
                          name="name"
                          placeholder="projet d'études"
                          register={()=>{}}
                          iStyle={{width:"10em",
                             backgroundColor:"#d9d2d2 !important",width:"10em !important",border:"1px solid #d9d2d2",
                             borderRadius:"15px", marginTop:"-1.3em",overflow:"hidden"}}
                          inputBg="#fff"
                          type="text"
                          handleOnchange={()=>{}}
                        />
                         </Row>
                        <Row>
                          <Label>Projet d'études:</Label>
                          <Sinput
                            name="name"
                            placeholder="projet d'études"
                            register={()=>{}}
                            iStyle={{width:"10em",
                               backgroundColor:"#d9d2d2 !important",width:"10em !important",border:"1px solid #d9d2d2",
                               borderRadius:"15px", marginTop:"-1.3em",overflow:"hidden"}}
                            inputBg="#fff"
                            type="text"
                            handleOnchange={()=>{}}
                          />
                       </Row>
                       <Row>
                          <Button style={{margin:"auto",marginTop:"1em"}}>Confirmer</Button>
                       </Row>
                      </Container>
            </Col>
            <Col xs="6" sm="6">                           
            </Col>
        </Row>
      </Container>
    </>
  );
}

Profile.layout = Portal;

export default Profile;

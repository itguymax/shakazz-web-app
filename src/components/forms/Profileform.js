import React from 'react'
import {
  FormGroup,
  Form,
  Container,
  Row,
  Col,
} from "reactstrap";
import Sinput from './Sinput';
import CreatePortefeuille from '../common/createPortefeuille';
import CreatePortefeuilleD from '../common/createPortefeuilleD';
import CustomDropdown from '../common/CustomDropdown';
import DropDownC from './Dropdownc';
import DropDownPhone from './DropDownPhone';
import country from '../../helpers/countries.js';
import ProfileUpload from './ProfileUpload';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from "../../validations";
import { useAppContext } from '../../context';
import {useMutation, useQueryClient} from 'react-query';

let account_type = [{val:'Personnel'},{val:'Particulier'}];
  let sexe = [{val:'Homme'},{val:'Femme'}];
  let currency = [{val:'USD'}];

    const SButton = styled.button`
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
export default function Profileform({updateProfile}) {
  const context = useAppContext();
  const { mutateAsync, isLoading, isError, isSuccess} = useMutation("Profile User",{})
      const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(profileSchema),
    });

  return (
    <Form onSubmit={handleSubmit(updateProfile)}>
        <Row>
          <Col xs="6" sm="4">
                <Row>
                  <Col md={12}>
                        <DropDownC name="account_type" idDd={"profile_type_de_compte"} label="Type de compte:" register={()=>{}} name="canal" selectedOption={account_type[0]} handleOnSelect={()=>{}} options={account_type||[]}/>
                  </Col>
                  <Col md={12} className="profileCol">
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
                      {errors.name && <div className="text-muted font-italic">

                           <span className="text-danger font-weight-700">{errors.name.message}</span>

                       </div> }
                  </Col>
                   <Col md={12}>
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
                      {errors.dob && <div className="text-muted font-italic">

                           <span className="text-danger font-weight-700">{errors.dob.message}</span>

                       </div> }
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                        <DropDownPhone name="country" country idDdM={"dt_country_img_1"} idDd={"dt_country_flag"} label="Pays:" flag register={()=>{}} name="canal" selectedOption={country[41].name} handleOnSelect={()=>{}} options={country||[]}/>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                        <Sinput
                        label="Adresse"
                        name="adresse"
                        register={register}
                        iStyle={{borderRadius:"15px", overflow:"hidden"}}
                        inputBg="#fff"
                        type="text"
                        handleOnchange={()=>{}}
                        />
                        {errors.adresse && <div className="text-muted font-italic">

                             <span className="text-danger font-weight-700">{errors.adresse.message}</span>

                         </div> }
                  </Col>
                </Row>
                <SButton type="submit"  style={{margin:"auto",marginTop:"1em"}}>
                    {isLoading? <Spinner size="sm" color="#cc993a" />: "Modifier"}
                </SButton>
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
                   <Col xs="6" sm="2">

                   </Col>
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
          <Col xs="6" sm="4">
                <Row>
                  <Col md={12}>
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
                        {errors.email && <div className="text-muted font-italic">

                             <span className="text-danger font-weight-700">{errors.email.message}</span>

                         </div> }
                  </Col>
                  <Col md={12}>
                     <Row>
                        <Col sm={12}>
                          <DropDownPhone name="phone_number" idDdM={"dt_phone_img_1"} idDd={"dt_phone_number"} label="Numéro de téléphone" phone register={()=>{}} name="canal" selectedOption={country[41]} handleOnSelect={()=>{}} options={country||[]}/>
                        </Col>

                     </Row>
                  </Col>
                  <Col md={6}>
                  <br/>
                       <DropDownC name="sexe" idDd={"profile_sexe"} label="Sexe:" register={()=>{}} name="canal" selectedOption={sexe[0]} handleOnSelect={()=>{}} options={sexe||[]}/>
                  </Col>
                  <Col md={12}>
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
                            {errors.pseudo && <div className="text-muted font-italic">

                                 <span className="text-danger font-weight-700">{errors.pseudo.message}</span>

                             </div> }
                   </Col>
                   <Col md={6}>
                        <DropDownC name="currency" idDd={"profile_monaie"} label="Monnaie:" register={()=>{}} name="canal" selectedOption={currency[0]} handleOnSelect={()=>{}} options={currency||[]}/>
                   </Col>

                </Row>
          </Col>
          <Col sm="4">
           <ProfileUpload/>
          </Col>
        </Row>
        </Form>
  )
}

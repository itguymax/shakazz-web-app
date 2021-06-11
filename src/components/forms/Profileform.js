import React, {useState, useRef, useEffect } from "react";
import {
  FormGroup,
  Form,
  Container,
  Row,
  Col,
  Spinner
} from "reactstrap";
import Sinput from './Sinput';
import CreatePortefeuille from '../common/createPortefeuille';
import CreatePortefeuilleD from '../common/createPortefeuilleD';
import CustomDropdown from '../common/CustomDropdown';
import DropDownC from './Dropdownc';
import Sdropdown from './Sdropdown';
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
import {useProfileUserInfos} from '../../hooks';
import Toast from "./Toast";
import config from '../../config';

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
export default function Profileform({isAccount,setAccountType}) {
  const context = useAppContext();
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState({});
  const [userinfo, setUserInfos]= useState({});
  const onDismiss = () => setAlertVisible(false);
  const {mutateAsync, isLoading, isError, isSuccess}  = useProfileUserInfos();
  const [phone, setPhone] = useState();
  const [selectedCountry, setSelectedCountry] = useState(country[41]);
  const [profile, setProfile] = useState({});
  const [gender, setGender] = useState({});
  const [countryIndic, setCountryIndic ] = useState({flag: selectedCountry.flag, code: selectedCountry.callingCodes[0] });
  const { register, handleSubmit, errors ,setValue} = useForm({
      resolver: yupResolver(profileSchema),
      mode: 'onBlur',
    });
    const updateProfile =  async (data) => {
      console.log(data);
      const { name, dob, adresse, phone, pseudo, email, account_type } = data;
      const body = {
     data : {
         address : {
             country:{
             name : selectedCountry,
             indicatif : countryIndic.code,
             flag : countryIndic.flag
             },
         state : selectedCountry,
         city : adresse.split(",")[0],
         street : adresse.split(",")[2]
         },
         profil: account_type,
         companyName:"",
         name: name,
         firstName:name,
         lastName:name,
         userName: pseudo,
         birthday : dob,
         gender: gender.val || "Homme",
         email : email,
         phone: phone,
         }
    }
    console.log(body.data);
    const res = await mutateAsync({accessToken: context.appState.accessToken ,data:body});
    setVisible(true);
    if(res.error && !res.success){
      setResponseAlert(res);
      setAlertVisible(true);
       } else {
         setResponseAlert(res);
         setAlertVisible(true);
     }
  }
  useEffect(()=>{
   if(typeof window !== "undefined" && localStorage.getItem(config.info)){
     const lgrade = JSON.parse(localStorage.getItem(config.info));
     setValue( "pseudo", lgrade.psedo);
     setValue( "email", lgrade.email);
     setValue("name",lgrade.lastName +" "+ lgrade.firstName);
     setValue("account_type", lgrade.typeprofile);
     setValue("dob", lgrade?.dateOfbirth);
     setValue("telephone",lgrade?.phone);
     setProfile({val: lgrade.typeprofile});
     setGender({val: lgrade.gender});
    //  setUserInfos(lgrade);
   }
 })
  useEffect(()=> {
    setAccountType(account_type[0].val);
  },[])
  const handleCountryOption = (value) => {
  setSelectedCountry(value);
  setCountryIndic({flag: value.flag, code: value.callingCodes[0]});
  console.log("country option", value);
}
const handlePickPhone = (e) => {
  console.log("valllllll phone", e.target.value);
  setPhone(e.target.value);
}

console.log("countryIndic",countryIndic);
console.log("selectedCountry",selectedCountry);

  return (
    <Form onSubmit={handleSubmit(updateProfile)} className="col-lg-6col-md-12">
    {/* 1 */}
              <Row>
                  <Col md={12} lg="6">
                        <DropDownC name="account_type" idDd={"profile_type_de_compte"} label="Type de compte:" register={register} selectedOption={profile || account_type[0]} handleOnSelect={()=>{}} options={account_type||[]}/>
                  </Col>
                   <Col md={12} lg="6">
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
                </Row>
                {/* 2 */}
                <Row> 
                  
                   <Col md={12} lg={6}>
                    <FormGroup>
                        {/* <DropDownPhone name="country" country idDdM={"dt_country_img_1"} idDd={"dt_country_flag"} label="Pays:" flag register={()=>{}} name="canal" selectedOption={country[41].name} handleOnSelect={()=>{}} options={country||[]}/> */}
                         <DropDownPhone name="nationnalite" country idDdM={"dt_country_img_1"} idDd={"dt_country_flag"} label="Pays:" flag register={register} selectedOption={selectedCountry} handleOnSelect={handleCountryOption} options={country||[]}/>
                              {errors.nationnalite && <div className="text-muted font-italic">
                                  <span className="text-danger font-weight-700">{errors.nationnalite.message}</span>
                              </div> }
                    </FormGroup>
                  </Col>
                   <Col md={12} lg={6}>
                      <DropDownPhone phoneName="telephone" phoneValue={phone} pickPhone={handlePickPhone} idDdM={"dt_phone_img_1"} idDd={"dt_phone_number"} label="Numéro de téléphone" phone register={register} name="canal" selectedOptionP={countryIndic} handleOnSelect={()=>{}} options={country||[]}/>
                        {errors.canal && <div className="text-muted font-italic">
                                    <span className="text-danger font-weight-700">{errors.canal.message}</span>
                          </div> }
                  </Col>
                </Row>
                {/* 3 */}
                <Row>
                    <Col md={12} lg={6}>
                        <br/>
                       <DropDownC name="sexe" idDd={"profile_sexe"} label="Sexe:" register={()=>{}} name="canal" selectedOption={gender || sexe[0]} handleOnSelect={()=>{}} options={sexe||[]}/>
                    </Col>
                   <Col md={12} lg={6}>
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
                </Row>
                {/* 4 */}
                <Row>
                   <Col md={12} lg={6}>
                          <Sinput
                            label='Pseudo'
                            name="pseudo"
                            placeholder=""
                            register={register}
                            iStyle={{borderRadius:"15px", overflow:"hidden"}}
                            inputBg="#fff"
                            type="text"
                            disabled
                            handleOnchange={()=>{}}
                            />
                            {errors.pseudo && <div className="text-muted font-italic">

                                 <span className="text-danger font-weight-700">{errors.pseudo.message}</span>

                             </div> }
                   </Col>
                    <Col md={12} lg={6} className="profileCol">
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
                </Row>
                {/* 5 */}
                <Row>
                  <Col md={12} lg={6}>
                        <Sinput
                        label="Adresse"
                        name="adresse"
                        placeholder="ville, pays, quartier"
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
                   <Col md={12} lg={6}>
                        <DropDownC name="currency" idDd={"profile_monaie"} label="Monnaie:" register={()=>{}} name="canal" selectedOption={currency[0]} handleOnSelect={()=>{}} options={currency||[]}/>
                   </Col>
                </Row>

                {/* end of rows */}
                <SButton type="submit"  style={{margin:"auto",marginTop:"1em"}}>
                    {isLoading? <Spinner size="sm" color="#cc993a" />: "Modifier"}
                </SButton>
          
          {/* second column */}
        
      </Form>
      
  )
}

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
  const [uname,setname] = useState();
  const [username, setusername] = useState();
  const [dobirth, setdobirth] = useState();
  const [countryIndic, setCountryIndic ] = useState({name: selectedCountry.name, flag: selectedCountry.flag, code: selectedCountry.callingCodes[0] });
  const { register, handleSubmit, errors ,setValue} = useForm({
      resolver: yupResolver(profileSchema)
    });
    const updateProfile =  async (data) => {
      //console.log("updateProfile",data);
      const { name, dob, adresse, telephone,  email, account_type } = data;
      const body = {
     data : {
         address : {
             country:{
             name : countryIndic.name,
             indicatif : countryIndic.code,
             flag : countryIndic.flag
             },
         state : countryIndic.name,
         city : adresse.split(",")[0],
         street : adresse.split(",")[2]
         },
         profil: profile.val,
         companyName:"",
         name: uname || name,
         userName: username,
         birthday : dobirth || dob,
         gender: gender.val,
         email : email,
         phone: telephone,
         }
    }
    console.log(body.data);
    const res = await mutateAsync({accessToken: context.appState.accessToken ,data:body});
    // setVisible(true);
    if(res.error && !res.success){
      setResponseAlert(res);
      setAlertVisible(true);
       } else {
         setResponseAlert(res);
         setAlertVisible(true);
     }
  }

  useEffect(()=> {
     const lgrade = JSON.parse(localStorage.getItem(config.info));
     setValue("username", lgrade.psedo);
     setValue( "email", lgrade.email);
     setValue("name",lgrade.lastName +" "+ lgrade.firstName);
     setValue("account_type", lgrade.typeprofile);
     setValue("dob", lgrade?.dateOfbirth);
     setValue("telephone",lgrade?.phone);
     setValue("sexe",lgrade?.gender);
     setValue("adresse", (lgrade?.address.city && lgrade?.address.country.name && lgrade?.address.street) ?lgrade?.address.city + ", "+lgrade?.address.country.name +", "+ lgrade?.address.street : '');
     setProfile({val: lgrade?.typeprofile || profile.val});
     setGender({val: lgrade?.gender || gender.val});
     setCountryIndic({name: lgrade?.address.country.name || selectedCountry.name, flag: lgrade?.address.country.flag || selectedCountry.flag, code: lgrade?.address.country.indicatif || selectedCountry.callingCodes[0]});
     setusername(lgrade?.psedo);
     setname(lgrade.lastName +" "+ lgrade.firstName);
     setdobirth(lgrade?.dateOfbirth);
  },[])

  const handleCountryOption = (value) => {
  setSelectedCountry(value);
  setCountryIndic({flag: value.flag, name:value.name, code: value.callingCodes[0]});
}
const handleprofile = (e) => {
   setProfile( e)
  console.log("valllllll profile",e,  e);
}
const handlesex = (e) => {
  console.log("e.target.value",e);
  setGender(e);
}

console.log("gender",gender);
console.log("countryIndic",countryIndic);
console.log("selectedCountry",selectedCountry);

  return (
    <Form onSubmit={handleSubmit(updateProfile)} className="col-lg-6col-md-12">
    {/* 1 */}
              <Row>
                  <Col md={12} lg="6">
                        <DropDownC sample name="account_type" idDd={"profile_type_de_compte"} label="Type de compte" register={register} selectedOption={profile || account_type[0]} handleOnSelect={handleprofile} options={account_type||[]}/>
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
                         <DropDownPhone phoneName="nationnalite" name="nationnalite" country idDdM={"dt_country_img_1"} idDd={"dt_country_flag"} label="Pays" flag register={register} selectedOption={ countryIndic || selectedCountry } handleOnSelect={handleCountryOption} options={country||[]}/>
                              {errors.nationnalite && <div className="text-muted font-italic">
                                  <span className="text-danger font-weight-700">{errors.nationnalite.message}</span>
                              </div> }
                    </FormGroup>
                  </Col>
                   <Col md={12} lg={6}>
                      <DropDownPhone phoneName="telephone" pickPhone={()=>{}} idDdM={"dt_phone_img_1"} idDd={"dt_phone_number"} label="Numéro de téléphone" phone register={register} name="canal" selectedOptionP={countryIndic} handleOnSelect={()=>{}} options={country||[]}/>
                        {errors.canal && <div className="text-muted font-italic">
                                    <span className="text-danger font-weight-700">{errors.canal.message}</span>
                          </div> }
                  </Col>
                </Row>
                {/* 3 */}
                <Row>
                    <Col md={12} lg={6}>
                        <br/>
                       <DropDownC sample name="sexe" idDd={"profile_sexe"} label="Sexe" register={register}  selectedOption={gender || sexe[0]} handleOnSelect={handlesex} options={sexe||[]}/>
                    </Col>
                   <Col md={12} lg={6}>
                       <Sinput
                       name="dob"
                      label="Date de naissance"
                      placeholder='YYYY/MM/DD'
                      register={register}
                      iStyle={{borderRadius:"15px", overflow:"hidden"}}
                      inputBg="#fff"
                      type="text"
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
                            name="username"
                            placeholder=""
                            register={register}
                            iStyle={{borderRadius:"15px", overflow:"hidden"}}
                            inputBg="#fff"
                            type="text"
                            disabled
                            handleOnchange={()=>{}}
                            />
                            {errors.username && <div className="text-muted font-italic">

                                 <span className="text-danger font-weight-700">{errors.username.message}</span>

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
                      disabled
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
                        {/* <DropDownC name="currency" idDd={"profile_monaie"} label="Monnaie:" register={()=>{}} name="canal" selectedOption={currency[0]} handleOnSelect={()=>{}} options={currency||[]}/> */}
                   </Col>
                </Row>

                {/* end of rows */}
                <SButton type="submit"  style={{margin:"auto",marginTop:"1em"}}>
                    {isLoading? <Spinner size="sm" color="#cc993a" />: "Modifier"}
                </SButton>

          {/* second column */}
          <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
      </Form>

  )
}

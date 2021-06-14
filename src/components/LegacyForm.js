import React, {useState} from 'react'
import { Row , Col, Container, Form, Button} from 'reactstrap';
import Sinput from './forms/Sinput';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { legacySchema } from "../../src/validations";
import FileUPloader from './FileUpload';
import DropDownPhone from './forms/DropDownPhone';
import country from '../../src/helpers/countries';

export default function LegacyForm({onSubmit, percentage, setPercentage,handleOnFileSelect}) {
   const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(legacySchema),
  });
  
  const [selectedCountry, setSelectedCountry] = useState(country[41]);
  const [countryIndic, setCountryIndic ] = useState({flag: selectedCountry.flag, name: selectedCountry.name, code: selectedCountry.callingCodes[0] });
  const [value, setValue] = useState();
  const [phone, setPhone] = useState();
  const [address, setFullAddress] = useState();
  const [dateOfb, setDateOfb] = useState();
  const [lien, setParente] = useState();
  const [fullName, setFullName] = useState();

const handlePickPhone = (e) => {
  console.log("valllllll phone", e.target.value);
  setPhone(e.target.value);
}
const handleCountryOption = (value) => {
  setSelectedCountry(value);
  setCountryIndic({flag: value.flag,name:value.name,code: value.callingCodes[0]});
  console.log("country option", value);
}
const handlephonechange = (data)=> {
  console.log("phone", data);
  setValue()
}
const onPercentageInputChange = (event)=> {

     let x = parseInt(event.target.value);

     if(x==="NaN"){
       setPercentage(0);
     } else {
       setPercentage(x);
     }
}

const handleOnsub = () => {
       const body= {
    data : {
        legacy: {
            name: fullName,
            address : address,
            lien : lien,
            naissance : dateOfb,
            percentage : percentage,
            phone: phone,
            country : {
                name: countryIndic.name,
                code: "+" + countryIndic.code ,
                flat: countryIndic.flag,
            }
        }
    }
}
onSubmit(body);
}
  return (
    <Form   className="col-xl-7" role="form" >
          <Row>
            <Col>
              <Sinput
                name="name"
                placeholder="Entrer le nom complet"
                type="text"
                register={register}
                inputBg="#F0F0F0"
                label="Nom complet"
                inputvalue={fullName}
                required
                handleOnchange={(e)=>{ setFullName(e.target.value) }}

              />
              {errors.name && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.name.message}</span>

              </div> }
              <Sinput
                name="dateDeNaissance"
               label="Date de naissance"
               placeholder='Entrer la date de naissance'
               register={register}
               iStyle={{borderRadius:"15px", overflow:"hidden"}}
               inputBg="#fff"
               type="date"
               inputvalue={dateOfb}
               handleOnchange={(e) => { setDateOfb(e.target.value) }}
               />
              {errors.dateDeNaissance && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.dateDeNaissance.message}</span>

              </div> }
              <DropDownPhone name="nationnalite" country idDdM={"legacy_country_img_1"} idDd={"legacy_country_flag"} label="Pays:" flag register={register}  selectedOption={selectedCountry} handleOnSelect={handleCountryOption} options={country||[]}/>
              {errors.nationnalite && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.nationnalite.message}</span>

              </div> }

              <FileUPloader placeholder="Documents officiels"  label="Documents officiels" register={register} name="documentsOfficiels" onFileSelect = {(file)=> handleOnFileSelect(file)} />
              {/*errors.pourcentageHeritage && <div className="text-muted font-italic">
                  <span className="text-danger font-weight-700">{errors.pourcentageHeritage.message}</span>
              </div> */}
            </Col>
            <Col><br/>
              {/* <DropDownPhone name="legacy_adresse_img_1" country idDdM={"legacy_adresse_img_1"} idDd={"legacy_adresse_flag"} label="Adresse:" flag register={()=>{}} name="canal" selectedOption={country[41].name} handleOnSelect={()=>{}} options={country||[]}/> */}
               <Sinput
                name="adresse"
                placeholder="TiTi garage "
                type="text"
                register={register}
                inputBg="#F0F0F0"
                label="Adresse"
                info={true}
                required
                handleOnchange={(e) => { setFullAddress(e.target.value) }}
              />
              {errors.adresse && <div className="text-muted font-italic">
                  <span className="text-danger font-weight-700">{errors.adresse.message}</span>
              </div>}
              <br/>
                
                <DropDownPhone phoneName="telephone" phoneValue={phone} pickPhone={handlePickPhone} idDdM={"lg_phone_img_1"} idDd={"lg_phone_number"} label="Numéro de téléphone" phone register={register} name="canal" selectedOptionP={countryIndic} handleOnSelect={()=>{}} options={country||[]}/>
              {errors.canal && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.canal.message}</span>

              </div> }
              <br/>
              <Sinput
                name="parente"
                placeholder="Quel est votre lien de parentee ?"
                type="text"
                register={register}
                inputBg="#F0F0F0"
                label="Lien de parenté"
                info={true}
                required
                handleOnchange={(e)=> { setParente(e.target.value) }}
              />
               <Sinput
                name="pourcentageHeritage"
                placeholder="pourcentage des droits"
                type="number"
                register={register}
                inputBg="#F0F0F0"
                label="pourcentage des droits"
                info={true}
                required
                handleOnchange={onPercentageInputChange}
              />
            </Col>
          </Row>
       <Button className="mt-3 mb-1"   onClick={handleOnsub} style={{ backgroundColor:'#CC9933', borderColor:'#CC9933', borderRadius:'40px', width:'200px'}} >
           Valider
        </Button>
    </Form>
  )
}

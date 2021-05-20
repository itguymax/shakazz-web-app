import React, {useState, useEffect} from 'react';
import { Row , Col, Container, Form, Button} from 'reactstrap';
import {Global,css} from "@emotion/react";
import Portal from "../../src/layouts/Portal.js";
import Sinput from "../../src/components/forms/Sinput";
import DropDownPhone from '../../src/components/forms/DropDownPhone';
import LegacyBlock from '../../src/components/common/legacyBlock';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { legacySchema } from "../../src/validations";
import LinearProgress from "../../src/components/common/linearProgress";
import country from '../../src/helpers/countries';
import withAuth from '../../src/hoc/withAuth';
import { device } from '../../src/lib/device';
import { useFetchAllLegacy, useAddLegacy, useDeleteLegacy,useUpdateLegacy,} from '../../src/hooks';
import {useAppContext} from "../../src/context";
import LegacyImage from "../../src/components/LegacyImage";
import LegacyBox from "../../src/components/LegacyBox";
import Line from '../../src/components/common/line';
import FileUPloader from '../../src/components/FileUpload';
import PhoneInput from 'react-phone-number-input'


function Legacy() {
   const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(legacySchema),
  });
  const context =  useAppContext();
  const { data: legacyData, isLoading: loadLegacydata } = useFetchAllLegacy(context.appState.accessToken);
  const { mutateAsync:addMutatioData, isLoading:loadMutatioData } = useAddLegacy();
  const { mutateAsync: delMutation, isLoading: loadDelMutation } = useDeleteLegacy();
  const [legacies, setLegacies] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(country[41])
  const [countryIndic, setCountryIndic ] = useState({flag: selectedCountry.flag, code: selectedCountry.callingCodes[0] })
  const [value, setValue] = useState();
  const [phone, setPhone] = useState();
  const [address, setFullAddress] = useState();
  const [ dateOfb, setDateOfb] = useState();
  const [lien, setParente] = useState();
  const [fullName, setFullName] = useState();
  const [selectedOfficialFile, setSelectedOfficialFile] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

   const onSubmit = async (data) =>{
     
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
                name: selectedCountry.name,
                code: "+" + countryIndic.code ,
                flat: countryIndic.flag,
            }
        }
    }
}

try{
  const res = await addMutatioData({accessToken: context.appState.accessToken, data: body});
  console.log("Legacy req", res);
} catch(err){
  console.log(err);
}


console.log("legacy data", body);
    //  if(legacies.length >= 1){
    //     let sumper = legacies.reduce( function(a, b){
    //     return a + b['pourcentageHeritage'];
    // }, 0);
    //     if(sumper === 100){
    //       alert("la somme doit etre egal a cent ")
    //     }

    //     return;
    //  }
    //  let ldata = [...legacies,data]
    //   setLegacies(ldata);

  };
  const onPercentageInputChange = (event)=> {

     let x = parseInt(event.target.value);

     if(x==="NaN"){
       setPercentage(0);
     } else {
       setPercentage(x);
     }
}
const handleEdition = (item) => {
 console.log("edit legacy", item);
}
const handleDelete = async (name) => {
  console.log("delete legacy", name);
   alert(`Supprimer ${name}`)
  const body = {
    data : {
        legacy : {
            id: name
        }
       
    }
};

try {
  const res = await delMutation({ accessToken: context.appState.accessToken, data: body});
console.log("del ayant droit ", res);
  if(res.success && !res.error){
    console.log("deleted successfully")
  } else {
    console.log("deleted error");
  }

} catch(err){
  console.log(err);
}
  
  
  // const newList = legacies.filter((item) => item.name !== name);
  // setLegacies(newList);

}
const handlePickPhone = (e) => {
  console.log("valllllll phone", e.target.value);
  setPhone(e.target.value);
}
const handleCountryOption = (value) => {
  setSelectedCountry(value);
  setCountryIndic({flag: value.flag, code: value.callingCodes[0]});
  console.log("country option", value);
}
const handlephonechange = (data)=> {
  console.log("phone", data);
  setValue()
}
useEffect((data)=>{
  if(legacies.length <= 1){
    setPercentage(100);
  }

},[legacies])
console.log("ayants droit", legacyData);
const onFileSelect = (file) => {
  setSelectedOfficialFile(file);
  console.log("file", file);
}
const submitOfficialDoc =  (file) => {
  console.log("file to submit", selectedOfficialFile);
  const formData = new FormData();
  formData.append('doc', 'facultafif');
  formData.append('file', selectedOfficialFile);
  formData.append('bucket', 'legacys-shakazz');
  formData.append('id', '60a5fd07b5f28807b43082ed');
     console.log("form data", formData);
     const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        auth_token: context.appState.accessToken,
        
      },
      body: formData
    }
  
    fetch('http://localhost:5000/api/v1/services/uploads/legacy/document', params)
    .then((res) => {
      console.log("res fillll", res)
      alert("File Upload success");
    })
    .catch((err) => alert("File Upload Error"));
};
const submitLegacyPhoto =  (file) => {
  console.log("file to submit", selectedOfficialFile);
  const formData = new FormData();
  formData.append('doc', 'profil');
  formData.append('file', selectedOfficialFile);
  formData.append('bucket', 'legacys-shakazz');
  formData.append('id', '60a5fd07b5f28807b43082ed');
     console.log("form data", formData);
     const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        auth_token: context.appState.accessToken,
        
      },
      body: formData
    }
  
    fetch('http://localhost:5000/api/v1/services/uploads/legacy/profil', params)
    .then((res) => {
      console.log("res fillll", res)
      alert("File Upload success");
    })
    .catch((err) => alert("File Upload Error"));
};

  return (
    <>
    <Global
    styles={css`
      img{
        cursor:pointer;
        transition: all .8s ease-in-out;
      }
      img[id="profile_photo"]:hover{
        transform: scale(1.5);
      }
      img[alt="profile_photo_legacy"]:hover{
        transform: rotate(360deg);
      }
      .legacy_block_container{
        margin-top:1em;
        border-top:3px solid #e5e5e5;
        padding-top:1em;
        padding-left:3em;
        padding-right:3em;
      }
      @media ${device.mPhone} {
        }
      @media ${device.bPhone} {
      }
      @media ${device.sTablet} {
      }
      @media ${device.bTablet} {
        .legacy_block_container{
          padding-left:1em;
          padding-right:1em;
        }
      }
    `}
    />
  <Portal>
    <Container className="mb-4" fluid>
      <div className="d-flex justify-content-center text-center" style={{flexDirection:'column'}}>
        <p style={{ font: "normal normal normal 20px/25px Ubuntu", color: "#444", opacity: 1}}>
        Cet espace est dédié à vos bénéficiaires <br/> en cas d'inactivité, de décès ou autres.
        </p>
        <div>
          <a style={{ font: "normal normal bold 14px/15px Ubuntu", color: "#333"}}> En savoir plus</a>
        </div>
      </div>
      <div>
      <Row> <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#444"}}> Ajouter</h1></Row>
      <Row className="mt-4 justify-content-between">
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
               handleOnchange={(e) => { setDateOfb(e.target.value) }}
               />
              {errors.dateDeNaissance && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.dateDeNaissance.message}</span>

              </div> }
              <DropDownPhone name="nationnalite" country idDdM={"legacy_country_img_1"} idDd={"legacy_country_flag"} label="Pays:" flag register={register} name="canal" selectedOption={selectedCountry} handleOnSelect={handleCountryOption} options={country||[]}/>
              {errors.nationnalite && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.nationnalite.message}</span>

              </div> }

              <FileUPloader placeholder="Documents officiels"  label="Documents officiels" register={register} name="documentsOfficiels" onFileSelect = {(file)=> onFileSelect(file)} />
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
                {/* <PhoneInput
                 placeholder="numero de telephone"
                 value={value}
                 onChange={handlephonechange}
                 /> */}
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
       <Button className="mt-3 mb-1"   onClick={submitOfficialDoc} style={{ backgroundColor:'#CC9933', borderColor:'#CC9933', borderRadius:'40px', width:'200px'}} >
           Valider
        </Button>
        </Form>
        <Col xl="5">
          <Row>
           <Col xl="5">
              <LinearProgress label="Pourcentage héritage" val={percentage} pColor="#CC9933"/>
           </Col>
           <Col xl="7" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
               <LegacyImage/>
           </Col>
         </Row>
        </Col>
      </Row>
       {/* <Line bgc='#b7b7b7' height="1px"/> */}
        
        
      </div>
      <Container className="legacy_block_container">
      
        {
          legacyData?.data.legacys.length >= 1 ? <>
          {
              legacyData?.data.legacys.map((item ,key)=>  <LegacyBlock key={key} del={()=> handleDelete(item._id)} edit={ ()=> handleEdition(item) } item={item} />)
          }
        </>: <div> Aucun ayant droit</div>
        
        }
        

      
        
      </Container>
    </Container>
  </Portal>
  </>
  )
}



export default  withAuth(Legacy);

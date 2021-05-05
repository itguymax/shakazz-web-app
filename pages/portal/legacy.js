import React, {useState, useEffect} from 'react'
import { Row , Col, Container, Form, Button} from 'reactstrap';
import {Global,css} from "@emotion/react"
import Portal from "../../src/layouts/Portal.js";
import Sinput from "../../src/components/forms/Sinput"
import DropDownPhone from '../../src/components/forms/DropDownPhone'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { legacySchema } from "../../src/validations";
import LinearProgress from "../../src/components/common/linearProgress"
import Image from 'next/image'
import Line from '../../src/components/common/line'
import country from '../../src/helpers/countries.js'
import withAuth from '../../src/hoc/withAuth';

function Legacy() {
   const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(legacySchema),
  });
  const [legacies, setLegacies] = useState([]);
  const [percentage, setPercentage] = useState();

   const onSubmit = (data) =>{
     if(legacies.length >= 1){
        let sumper = legacies.reduce( function(a, b){
        return a + b['pourcentageHeritage'];
    }, 0);
        if(sumper === 100){
          alert("la somme doit etre egal a cent ")
        }

        return;
     }
     let ldata = [...legacies,data]
      setLegacies(ldata);

  };
  const onPercentageInputChange = (event)=> {

     let x = parseInt(event.target.value);

     if(x==="NaN"){
       setPercentage(0);
     } else {
       setPercentage(x);
     }
}
const handleEdition = (event) => {

}
const handleDelete = (name) => {
  const newList = legacies.filter((item) => item.name !== name);
  setLegacies(newList);

}
useEffect((data)=>{
  if(legacies.length <= 1){
    setPercentage(100);
  }

},[legacies])
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
      @media only screen and (max-width: 360px) {
        }
      @media only screen and (max-width: 414px) {
      }
      @media only screen and (max-width: 768px) {
      }
      @media only screen and (max-width: 1024px) {
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
        <Form   className="col-xl-7" role="form" onSubmit={handleSubmit(onSubmit)}>
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
               handleOnchange={()=>{}}
               />
              {errors.dateDeNaissance && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.dateDeNaissance.message}</span>

              </div> }
              <DropDownPhone name="legacy_country_img_1" country idDdM={"legacy_country_img_1"} idDd={"legacy_country_flag"} label="Pays:" flag register={()=>{}} name="canal" selectedOption={country[41].name} handleOnSelect={()=>{}} options={country||[]}/>
              {errors.nationnalite && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.nationnalite.message}</span>

              </div> }
              <Sinput
                name="pourcentageHeritage"
                placeholder="pourcentage d'heritage"
                type="number"
                register={register}
                inputBg="#F0F0F0"
                // disabled={legacies.length <= 1?true:false}
                label="Pourcentage d'heritage"
                required
                handleOnchange={onPercentageInputChange}
                inputvalue={percentage}
              />
              {errors.pourcentageHeritage && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.pourcentageHeritage.message}</span>

              </div> }
            </Col>
            <Col>
              <Sinput
                name="adresse"
                placeholder="Entrer l'adresse"
                type="text"
                register={register}
                inputBg="#F0F0F0"
                label="Adresse"
              />
              <DropDownPhone name="legacy_adresse_img_1" country idDdM={"legacy_adresse_img_1"} idDd={"legacy_adresse_flag"} label="Adresse:" flag register={()=>{}} name="canal" selectedOption={country[41].name} handleOnSelect={()=>{}} options={country||[]}/>
              {errors.adresse && <div className="text-muted font-italic">
                  <span className="text-danger font-weight-700">{errors.adresse.message}</span>
              </div>}
                <DropDownPhone idDdM={"lg_phone_img_1"} idDd={"lg_phone_number"} label="Numéro de téléphone" phone register={()=>{}} name="canal" selectedOption={country[41]} handleOnSelect={()=>{}} options={country||[]}/>
              {errors.nationnalite && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.nationnalite.message}</span>

              </div> }
              <Sinput
                name="parente"
                placeholder="Quel est votre lien de parentee ?"
                type="text"
                register={register}
                inputBg="#F0F0F0"
                label="Lien de parenté"
                info={true}
                required
              />
            </Col>
          </Row>
       <Button className="mt-3 mb-1"   type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933', borderRadius:'40px', width:'200px'}} >
           Valider
        </Button>
        </Form>
        <Col xl="5">
          <Row>
           <Col xl="5">
              <LinearProgress label="Pourcentage héritage" val={percentage} pColor="#CC9933"/>
           </Col>
           <Col xl="7" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

                  <div className="rounded-circle "style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:'200px', width:'200px'}}>
                  <a href="#itguymax">
                  <Image
                  id="profile_photo"
                  src="/assets/img/IMG_20181121_094329_174@2x.png"
                  alt="..."
                  className="rounded-circle"
                  height={200} width={200}
                  style={{backgroundColor:"#000",margin:"auto"}}
                  />
                  </a>
                </div>
                <Button className="mt-3 mb-1"   type="submit" style={{ backgroundColor:'#679966', borderColor:'#679966', borderRadius:'40px', }} >
                  Modifier
                </Button>

           </Col>
         </Row>
        </Col>
      </Row>
      {
        legacies.length >0 ? <>
        <Line bgc='#b7b7b7' height="1px"/>
         { legacies.map((item, key)=> <> <Container style={{ width:"70%"}} className="mb-3">
         <Row key={key} style={{backgroundColor:"#F0F0F0",height: '50px', borderRadius:"40px",overflow:'hidden'}} >
        <div style={{display:'flex', flexDirection:'row', justifyContent:"space-between", width:"100%", paddingTop:"10px" }}>
           <Image
            src="https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com/search%3Fq%3Dadd%2Bcountry%2Bflag%2Bin%2Bnext%2Bjs%26oq%3Dadd%2Bcontry%2Bflag%2Bin%2Bnext%26aqs%3Dchrome.1.69i57j33i10i160l3.12407j0j4%26sourceid%3Dchrome%26ie%3DUTF-8"
            alt="..."
            className="rounded-circle"
            height={45} width={45}
            style={{backgroundColor:"#000"}}
            />
            <p>{item.name}</p>
            <p>{item.telephone}</p>
            <p>{item.adresse}</p>
            <div className="rounded-circle" style={{backgroundColor: "#CC9933", marginTop:"-8px",marginRight:"2px", height: "45px",display:"flex", justifyContent:'center', alignItems:'center', width:"45px", fontSize:"12px", color:'#fff'}}>
              <span>{`${item.pourcentageHeritage}`+"%"}</span>
            </div>
        </div>

         </Row>
         <div className="text-right">
           <Button className="mt-3 mb-1"  onClick={ () => handleEdition(item.name) }  type="submit" style={{ backgroundColor:'#679966', borderColor:'#679966', borderRadius:'40px', }} >
              Modifier
            </Button>
            <Button className="mt-3 mb-1" onClick={ () => handleDelete(item.name)}   type="submit" style={{ backgroundColor:'#D20000', borderColor:'#D20000', borderRadius:'40px', }} >
              Supprimer
            </Button>
         </div>
         </Container>


         </> )}
        </>: null
      }
      </div>
    </Container>
  </Portal>
  </>
  )
}



export default  withAuth(Legacy);

import React, {useState} from 'react'
import { Row , Col, Container, Form, Button} from 'reactstrap';
import Portal from "../../layouts/Portal.js";
import Sinput from "../../components/forms/Sinput"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { legacySchema } from "../../validations";

function Legacy() {
   const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(legacySchema),
  });
  const [legacies, setLegacies] = useState([]);

   const onSubmit = (data) =>{
     let ldata = [...legacies,data]
      setLegacies(ldata);
    console.log('form ', data);
  };
  return (
    <Container fluid>
      <div className="d-flex justify-content-center text-center" style={{flexDirection:'column'}}>
        <p style={{ font: "normal normal normal 20px/25px Ubuntu", color: "#444", opacity: 1}}> 
        Cet espace est dédié à vos bénéficiaires <br/> en cas d'inactivité, de décès ou autres.
        </p> 
        <div>
          <a style={{ font: "normal normal bold 14px/15px Ubuntu", color: "#333"}}> En savoir plus</a>
        </div>
      </div>
      <div>
       
      <Form role="form" onSubmit={handleSubmit(onSubmit)}>
       <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#444"}}> Ajouter</h1>
      <Row className="mt-4 justify-content-between">
        <Col xl="9">
          <Row>
            <Col>
              <Sinput
                name="name"
                placeholder="Entrer le nom complet"
                type="text"
                register={register}
                inputBg="#F0F0F0"
                disabled
                label="Nom complet"
                required
                
              />
              <Sinput
                name="dateDeNaissance"
                placeholder="Entrer la date de naissance"
                type="text"
                register={register}
                inputBg="#F0F0F0"
                disabled
                label="Date de naissance"
                required
                
              />
               <Sinput
                name="nationnalite"
                placeholder="Entrer la nationnalité"
                type="text"
                register={register}
                inputBg="#F0F0F0"
                disabled
                label="Pays"
                required
                
              />
            </Col>
            <Col>
              <Sinput
                name="adresse"
                placeholder="Entrer l'adresse "
                type="text"
                register={register}
                inputBg="#F0F0F0"
                disabled
                label="Adresse"
              />
              <Sinput
                name="adresse"
                placeholder="Entrer l'adresse"
                type="text"
                register={register}
                inputBg="#F0F0F0"
                disabled
                label="Numéro de téléphone"
              />
              <Sinput
                name="parente"
                placeholder="Quel est votre lien de parentee ?"
                type="text"
                register={register}
                inputBg="#F0F0F0"
                disabled
                label="Lien de parenté"
                info={true}
                required
              />
            </Col>
          </Row>
        </Col>
        <Col xl="3"></Col>
      </Row>
       <Button className="mt-3 mb-1"   type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933', borderRadius:'40px', width:'200px'}} >
           Valider
        </Button>
      </Form>
      {
        legacies.length >0 ? <>
         <hr style={{backgroundColor: '#b7b7b7', height:'1px', marginBottom: '10px', marginTop: '10px'}}/>
         { legacies.map((item, key)=> <div key={key}>{item.name}</div>)}
        </>: null
      }
      </div>
    </Container>
  )
}


Legacy.layout = Portal;
export default Legacy;
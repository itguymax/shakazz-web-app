import React, {useState} from 'react'
import AdminBleu from '../../src/layouts/AdminBleu'
import Portal from "../../src/layouts/Portal.js";
import {
  Row,
  Col,
  Button,
  Form,
} from "reactstrap"
import Sinput from "../../src/components/forms/Sinput";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import  LightBoxContainer from '../../src/components/common/lightBoxContainer';
import withAuth from '../../src/hoc/withAuth'

function Transfert() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver({}),
  });
  const [show, setShow] = useState(false);
  const onSubmit = (data) => {};
   const handleToggleshow = () => setShow(!show);
  return (
    <Portal>
    <div>
      <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#fff"}}> Effectuer un transfére</h1>
      <Row className="mt-4 justify-content-between">
        <Col xl="9">
           <Form role="form" onSubmit={handleSubmit(onSubmit)}>

              <Sinput
                label="Choisir le wallet de retrait"
                name="wallet"
                placeholder="Wallet principal"
                type="text"
                register={register}
                inputBg="#679966"
                inline
                disabled
              />

                <Sinput
                label="Montant"
                name="montant"
                placeholder="6,000"
                type="text"
                register={register}
                inputBg="#679966"
                inline
                usd

              />
               <Sinput
                label="Choisir le wallet de reception"
                name="wallet"
                placeholder="Wallet principal"
                type="text"
                register={register}
                inputBg="#679966"
                inline
                disabled
              />


              <Row>
                 <Col xl="3"></Col>
                 <Col xl="6">
                   <Button className="mt-3 mb-1"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
                 Confirmer
                </Button>
                 </Col>
              </Row>
           </Form>
        </Col>
        <Col className=" d-flex  align-items-center  " xl="3" style={{flexDirection: 'column'}}>
         <h4 className="pb-3 "  style={{font: 'normal normal italic 18px/19px Ubuntu', color: "#fff"}}>Montant disponible</h4>
         <LightBoxContainer borderR="20px" width="180px">
          <div className="d-flex justify-content-center align-items-center pt-2 pb-2" style={{flexDirection: 'column'}}>
             <h2 style={{font: 'normal normal italic 16px/18px Ubuntu', color: '#444'}} >Wallet principal</h2>
              <h1 className="" style={{font: 'normal normal normal 20px/25px Ubuntu',display: 'block',color: '#679966',  lineHeight: '1.2'}}> {(29000).toLocaleString('en-US', { style: 'currency', currency: 'USD',})}</h1>
          </div>
         </LightBoxContainer>
         <LightBoxContainer borderR="20px" width="180px">
          <div className="d-flex justify-content-center align-items-center pt-2 pb-2" style={{flexDirection: 'column'}}>
             <h2 style={{font: 'normal normal italic 16px/18px Ubuntu', color: '#444'}} >Wallet vault</h2>
              <h1 className="" style={{font: 'normal normal normal 20px/25px Ubuntu',display: 'block',color: '#679966',  lineHeight: '1.2'}}> {(29000).toLocaleString('en-US', { style: 'currency', currency: 'USD',})}</h1>
          </div>
         </LightBoxContainer>
          <LightBoxContainer borderR="20px" width="180px">
          <div className="d-flex justify-content-center align-items-center pt-2 pb-2" style={{flexDirection: 'column'}}>
             <h2 style={{font: 'normal normal italic 16px/18px Ubuntu', color: '#444'}} >Wallet networking</h2>
              <h1 className="" style={{font: 'normal normal normal 20px/25px Ubuntu',display: 'block',color: '#679966',  lineHeight: '1.2'}}> {(29000).toLocaleString('en-US', { style: 'currency', currency: 'USD',})}</h1>
          </div>
         </LightBoxContainer>

        </Col>
      </Row>
    </div>
    </Portal>
  )
}



export default withAuth(Transfert);

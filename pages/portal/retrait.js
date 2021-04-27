import React, {useState} from 'react'
import AdminBleu from '../../src/layouts/AdminBleu'
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  Button,
  Table,
  Progress,
  Form,
} from "reactstrap"
import Sinput from "../../src/components/forms/Sinput";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import  LightBoxContainer from '../../src/components/common/lightBoxContainer';
import { retraitSchema } from "../../src/validations";
import Smodal from '../../src/components/common/Smodal';
function Retrait() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(retraitSchema),
  });
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const openDepotModal = () => setOpenModal(!openModal);
  const onSubmit = (data) => {
    setData(data);
    openDepotModal();
   
  };
   const handleToggleshow = () => setShow(!show);
  return (
    <div>
      <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#fff"}}> Effectuer un retrait</h1>
      <Row className="mt-4 justify-content-between">
        <Col xl="9">
           <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                <Sinput
                label="Montant à retirer"
                name="montant"
                placeholder="6,000"
                type="text"
                // rgba(68, 68, 68, 1)
                register={register}
                inputBg="#679966"
                inline
                usd 
              /> 
              <Sinput
                label="Equivalence"
                name="quantitebtc"
                placeholder="0.001"
                type="text"
                register={register}
                inputBg="#679966"
                inline
                btc
              />
                <Sinput
                label="Adresse à créditer"
                name="portefeuille"
                placeholder="Portefeuille 3"
                type="text"
                register={register}
                inputBg="#679966"
                inline
                btc
                disabled
              /> 
              <Sinput
                label="Mot de passe de la transaction"
                name="transactionPassword"
                placeholder="Mot de passe de transaction"
                type="password"
                register={register}
                inputBg="#679966"
                inline 
                icon={show ? "fa fa-eye":"fa fa-eye-slash"}  
                handleToggleshow={handleToggleshow }           
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
         
        </Col>
        {openModal&& <Smodal data={data} handleClose={openDepotModal} open={openModal}/>}
      </Row>
    </div>
  )
}


Retrait.layout = AdminBleu;
export default Retrait;

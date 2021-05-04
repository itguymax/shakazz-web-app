import React, {useState} from 'react'
import AdminBleu from '../../../src/layouts/AdminBleu'
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
import Sinput from "../../../src/components/forms/Sinput";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import  LightBoxContainer from '../../../src/components/common/lightBoxContainer';
import Smodal from '../../../src/components/common/Smodal'
import { depotSchema } from "../../../src/validations";
import withAuth from '../../../src/hoc/withAuth';
import { useDeposit } from '../../../src/hooks'
import { useConverter } from '../../../src/hooks'
import { useAppContext } from '../../../src/context';
import { useRouter } from 'next/router'
function Depot() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(depotSchema),
  });

  const context = useAppContext();
  
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [usdVal, setUSDVal] = useState(100);
  const {data:dtc} = useConverter("BTC","USD"); 
  const [openModal, setOpenModal] = useState(false);
   const [errormsg, setErrormsg]= useState(null);
  const [successmsg, setSuccessmsg]= useState(null);
  // const [body, setBody] = useState({});
  const {mutateAsync, isLoading} = useDeposit()
  const onSubmit = (hookdata) =>{
   
    console.log("deposit data", data);
    setData(hookdata);
    openDepotModal();
   
  };
  const openDepotModal = () => setOpenModal(!openModal);
   const handleToggleshow = () => setShow(!show);
   const changeUSDtoBTC = (data) => {
      console.log("usdTo btc", data.target.value);
      setUSDVal(data.target.value);
      
   }
   const  handleMSubmit = async (t) => {
      const body = {
      data: {
        principal : {
            type : "principal",
            btc : t?.quantitebtc,
            amount: t?.montant,
            taux : dtc?.USD
        },
        user: {
            transaction: t?.transactionPassword,
        },
      } 
    };
    // setBody(body);

    console.log("deposit acct", context.appState.accessToken, body);
    const res =  await mutateAsync({accessToken: context.appState.accessToken,data:body});
     console.log("submit  rest", res);
     const {error, message,success, data} = res;
        if(error && !success){
        setSuccessmsg(null);
        setErrormsg(message);
         
        alert("une erreur s'est produite")
       } else { 
         
         setErrormsg(null);
         setSuccessmsg(message);
         
        //  router.push('/portal/depot/detail');
       }
   }
   console.log("c val", dtc,);
  return (
    <AdminBleu menu>
    <div>
      <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#fff"}}> Effectuer un dépôt</h1>
      <Row className="mt-4 justify-content-between">
        <Col xl="9">
           <Form role="form" onSubmit={handleSubmit(onSubmit)}>
              <Sinput
                label="Compte à créditer"
                name="wallet"
                placeholder="Wallet principal"
                type="text"
                register={register}
                inputBg="#679966"
                inline
                disabled
              /> 
               <Sinput
                label="Méthode"
                name="method"
                placeholder="Bitcoin"
                type="text"
                register={register}
                inputBg="#679966"
                inline
                icon="fab fa-bitcoin"
                prepend
                disabled
              /> 
                <Sinput
                label="Montant"
                name="montant"
                placeholder="6,000"
                type="text"
                inputvalue={usdVal}
                register={register}
                inputBg="#679966"
                inline
                usd
                handleOnchange={changeUSDtoBTC}
                
              /> 
               {errors.montant && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.montant.message}</span>
               
              </div> }
            
             
                <Sinput
                label="Equivalence"
                name="quantitebtc"
                placeholder="0.001"
                type="text"
                register={register}
                inputBg="#679966"
                inline
                btc
                inputvalue={(usdVal/ dtc?.USD).toFixed(5)}
                readOnly={true}
                
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
               {errors.transactionPassword && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.transactionPassword.message}</span>
               
              </div> }
              <Row>
                 <Col xl="3"></Col>
                 <Col xl="6" >
                      {errormsg && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errormsg}</span>
               
              </div> }
              {successmsg && <div className="text-muted font-italic">
                
                  <span className="text-success font-weight-700">{successmsg}</span>
               
              </div> }
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
        {openModal&& <Smodal isLoading={isLoading} data={data} handleClose={openDepotModal}  handleMSubmit={ handleMSubmit} open={openModal} path="/portal/depot/detail" />}
      </Row>
      
    </div>
  </AdminBleu>
  )
}



export default withAuth(Depot);

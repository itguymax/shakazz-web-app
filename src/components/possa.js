import React, {useState} from 'react';
import CreatePortefeuille from './common/createPortefeuille';
import CreatePortefeuilleD from './common/createPortefeuilleD';
import Toast from "./forms/Toast";
import {operateurs} from '../helpers/operatorsList';
import {
  FormGroup,
  Form,
  Container,
  Row,
  Col,Collapse

} from "reactstrap";
import {useAddPortefeuille, usePortefeuille} from "../hooks";
import {useAppContext} from "../context";
import Image from 'next/image';
export default function possa() {
  const context = useAppContext();
  const [operateurChoix, setOperateurChoix] = useState({nom:"Adresse Bitcoin",placeholder:"FRA2017univ2021"});
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState({});
  const onDismiss = () => setAlertVisible(false);
   const [successMsg, setsuccessMsg] = useState('');
   const [typePossa, setPossaType] = useState(operateurs.code[6])
   const [errorMsg, seterrorMsg] = useState('');
   const [isOpenCollapse, setIsOpenCollapse] = useState(false);
   const toggleCollapse = () => setIsOpenCollapse(!isOpenCollapse);
  const { mutateAsync, isLoading } = useAddPortefeuille();
  const { data, isLoading:dataLoading } = usePortefeuille(context.appState.accessToken);
  const addPossa =  async (data) => {
    const body = {
    nom: data.nom,
    address: data.address,
    montantUSD : 0,
    type: typePossa,
  }
  try{
    const res = await mutateAsync({accessToken: context.appState.accessToken, data: body});
       if(res.error && !res.success){
         setResponseAlert(res);
         setAlertVisible(true);
      } else {
        setResponseAlert(res);
        setAlertVisible(true);
    }
    //console.log("datatat", data, res);
  } catch(err){
    setResponseAlert(err);
    setAlertVisible(true);
  }
}
const selectpossatype = (l) => {
  let indexCode = operateurs.nom.indexOf(l.value);
  setPossaType(operateurs.code[indexCode]);
  if(l.value === operateurs.nom[0] || l.value === operateurs.nom[1]){
    setOperateurChoix({nom:"Numéro de carte",placeholder:"xxxx xxxx xxxx xxx"});
  }else if(l.value === operateurs.nom[6]){
    setOperateurChoix({nom:"Adresse Bitcoin",placeholder:"FRA2017univ2021"});
  }else{
    setOperateurChoix({nom:"Numéro "+l.value,placeholder:"(code pays) xxx xxx xxx"});
  }
}
  return (
         <Container>
         <Row style={{marginTop:"2em"}}>
          <Col sm="2"><Image
          src="/assets/img/icons/retrait/wallet.svg"
          alt="..."
          height={40} width={40}
          style={{backgroundColor:"#000",margin:"auto"}}
          /></Col>
          <Col sm="2"><p style={{color:"black",marginTop:"-0.5em",fontSize:"1.8em",fontWeight:300}}>Portefeuille</p></Col>
          <Col sm="4"><Image
            src="/assets/img/icons/clic_button_down.svg"
            alt="..."
            height={20} width={20}
            style={{backgroundColor:"#000",margin:"auto"}}
            /></Col>
        </Row>
        <Row style={{marginTop:"2em"}}>
         <Col sm="2"></Col>
         <Col sm="2"><p>Portefeuille</p></Col>
         <Col sm="2">  <Image
             src="/assets/img/icons/add.svg"
             alt="..."
             onClick={toggleCollapse}
             height={20} width={20}
             style={{backgroundColor:"#000",margin:"auto"}}
             /></Col>
       </Row>
       <Collapse isOpen={isOpenCollapse}>
           <Row className="profileColWrapper" >
               <Col xs="6" sm="5" style={{marginBottom:"3em"}}>
                   <CreatePortefeuille operateurChoix={operateurChoix} selectpossatype={selectpossatype} successmsg={successMsg} loading={isLoading} errormsg={errorMsg} addPossa={addPossa}/>
               </Col>
               <Col xs="6" sm="3" style={{marginBottom:"3em"}}>
                   <Container className="" style={{
                         width:"100%",
                         height:"14em",
                         marginLeft:"2em",
                         backgroundColor:"white",
                         borderRadius:"16px",
                         padding:"1em"}}>
                         {
                            dataLoading? null : <>
                              {
                                data?.data.porte_feuilles.map((item ,key) => <CreatePortefeuilleD operateurChoix={operateurs.nom} key={key} nb={key +1} item={item}/>)
                              }
                            </>
                         }

                     </Container>
               </Col>
           </Row>
       </Collapse>
        <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
      </Container>
  )
}

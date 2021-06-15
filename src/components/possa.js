import React, {useState} from 'react';
import CreatePortefeuille from './common/createPortefeuille';
import CreatePortefeuilleD from './common/createPortefeuilleD';
import Toast from "./forms/Toast";
import {
  FormGroup,
  Form,
  Container,
  Row,
  Col,

} from "reactstrap";
import {useAddPortefeuille, usePortefeuille} from "../hooks";
import {useAppContext} from "../context";
import Image from 'next/image';
export default function possa() {
  const context = useAppContext();
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState({});
  const onDismiss = () => setAlertVisible(false);
   const [successMsg, setsuccessMsg] = useState('');
   const [typePossa, setPossaType] = useState('btc')
   const [errorMsg, seterrorMsg] = useState('');
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
  setPossaType(l.value);
}
  return (
         <Container>
         <Row>
             <Col md={12} className="row_section4" style={{marginTop:"3em"}}>
                     <Row>
                       <Col xs="6" sm="2">
                          <Image
                          src="/assets/img/icons/retrait/wallet.svg"
                          alt="..."
                          height={40} width={40}
                          style={{backgroundColor:"#000",margin:"auto"}}
                          />
                       </Col>
                       <Col xs="6" sm="6"><p style={{color:"black",marginTop:"-0.5em",fontSize:"1.8em",fontWeight:300}}>Portefeuille</p></Col>

                       <Col xs="6" sm="3">
                        <Image
                          src="/assets/img/icons/clic_button_down.svg"
                          alt="..."
                          height={20} width={20}
                          style={{backgroundColor:"#000",margin:"auto"}}
                          />
                       </Col>

                     </Row>
                  <Row>
                   <Col xs="6" sm="2">

                   </Col>
                   <Col xs="6" sm="6"><p>Portefeuille</p></Col>

                   <Col xs="6" sm="2">
                    <Image
                      src="/assets/img/icons/add.svg"
                      alt="..."
                      height={20} width={20}
                      style={{backgroundColor:"#000",margin:"auto"}}
                      />
                   </Col>

                 </Row>
                  </Col>
         </Row>
        <Row className="profileColWrapper" >
            <Col xs="6" sm="5" style={{marginBottom:"3em"}}>
                <CreatePortefeuille selectpossatype={selectpossatype} successmsg={successMsg} loading={isLoading} errormsg={errorMsg} addPossa={addPossa}/>
            </Col>
            <Col xs="6" sm="6" style={{marginBottom:"3em"}}>
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
                             data?.data.porte_feuilles.map((item ,key) => <CreatePortefeuilleD key={key} nb={key +1} item={item}/>)
                           }
                         </>
                      }

                  </Container>
            </Col>
        </Row>
        <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
      </Container>
  )
}

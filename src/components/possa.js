import React, {useState} from 'react';
import CreatePortefeuille from './common/createPortefeuille';
import CreatePortefeuilleD from './common/createPortefeuilleD';
import {
  FormGroup,
  Form,
  Container,
  Row,
  Col,

} from "reactstrap";
import {useAddPortefeuille, usePortefeuille} from "../hooks";
import {useAppContext} from "../context";
export default function possa() {
  const context = useAppContext();
   const [successMsg, setsuccessMsg] = useState('');
   const [errorMsg, seterrorMsg] = useState('');
  const { mutateAsync, isLoading } = useAddPortefeuille();
  const { data, isLoading:dataLoading } = usePortefeuille(context.appState.accessToken);
  const addPossa =  async (data) => {
    const body = {
    nom: data.nom,
    address: data.address,
    montantUSD : 0
  }
  try{
    const res = await mutateAsync({accessToken: context.appState.accessToken, data: body});
       if(res.error && !res.success){
     
        seterrorMsg(res.message)
        setsuccessMsg('')
       
      } else {
     
      seterrorMsg('')
      setsuccessMsg(res.message)
      
     
    }
    console.log("datatat", data, res);
  } catch(err){
    console.log(err);
  }
  
    
  }

  console.log("porte feullll", data);
  return (
         <Container>
        <Row className="profileColWrapper" >
            <Col xs="6" sm="5" style={{marginBottom:"3em"}}>
                <CreatePortefeuille successmsg={successMsg} loading={isLoading} errormsg={errorMsg} addPossa={addPossa}/>
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
      </Container>
  )
}

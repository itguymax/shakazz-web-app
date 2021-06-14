import React, {useState} from 'react'
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,Button,Spinner,
  Row, Form, Label,FormText,Alert
} from "reactstrap";
import Sinput from "./Sinput";
import Toast from "./Toast";
import Dot from '../common/dot'
import { useConverter } from '../../../src/hooks'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { depotBTCSchema } from "../../../src/validations";
import { useDeposit} from '../../../src/hooks';
import { useAppContext } from '../../../src/context';

export default function BtcForm({}) {
  const context = useAppContext();
  const {mutateAsync, isLoading, isError, isSuccess}  = useDeposit();
  const [usdVal, setUSDVal] = useState(0);
  const {data:dtc} = useConverter("BTC","USD");
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState({});
  const onDismiss = () => setAlertVisible(false);
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(depotBTCSchema),
  });
  const changeUSDtoBTC = (data) => {
     setUSDVal(data.target.value);
  }
  const onSubmit = async (hookdata) =>{
    const body = {
      data: {
        principal:{
          type : "principal",
          //btc : t?.quantitebtc,
          amount: hookdata.depot_btc_montant_usd,
          taux : dtc?.USD,
          user: {
              //transaction: t?.transactionPassword,
          }
        }
      }
    };
    const res =  await mutateAsync({accessToken: context.appState.accessToken,data:body});
    const {error, message,success, data} = res;
        if(error && !success){
          //message = "Impossible de joindre le serveur , veuillez re-éssayer plus tard.";
          setResponseAlert(res);
          setAlertVisible(true);
        } else {
           if (typeof window != 'undefined'){
             //message = "Vous serez rediriger vers la page de confirmation dans 5 secondes..."
             setResponseAlert(res);
             setAlertVisible(true);
             setTimeout(function(){
               setAlertVisible(false);
               window.open(data.invoice.url);
              },
                7000);
           }else{
             /*setResponseAlert("DOM non actif!");
             setAlertVisible(true);
             setColorAlert("danger");*/
           }
       }
  };
  return (
    <>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Montant USD</Label>
          <Input onChange={changeUSDtoBTC} innerRef={register()} name="depot_btc_montant_usd" type="integer" placeholder="100" />
        </FormGroup>
        <FormGroup>
          <Label>Equivalence en Bitcoin</Label>
          <Input disabled value={(usdVal/ dtc?.USD).toFixed(5)} type="number" placeholder="100" />
        </FormGroup>
       {errors.depot_btc_montant_usd && <div className="text-muted font-italic">

          <span className="text-danger font-weight-700">{errors.depot_btc_montant_usd.message}</span>

      </div> }
      <Button className="mt-3 mb-1"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
      {isLoading? <Spinner size="sm" color="#cc993a" />: "SOUMETTRE"}
     </Button>
    </Form>
    <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
    </>
  )
}

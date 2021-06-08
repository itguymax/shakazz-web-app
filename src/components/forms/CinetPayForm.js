import React, {useState} from 'react'
import {cp_init} from "../../../src/helpers/cp";
import {useDepotTransaction,useDepositWebhookCp} from '../../hooks';
import {useDeposit} from '../../hooks';
import { useAppContext } from '../../context';
import { useConverterAfrica } from '../../../src/hooks'
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,Button,
  Row, Form, Label,FormText,Spinner
} from "reactstrap";
import Dot from '../common/dot'
import {useMutation, useQueryClient} from 'react-query';

export default function CinetPayForm() {
  const context = useAppContext();
  const [xafVal, setXAFVal] = useState(0);
  const [currencyVal, setCurrencyVal] = useState("XAF");
  const {data:dtc} = useConverterAfrica("USD",currencyVal);
  const changeXAFtoUSD = (data) => {
     setXAFVal(data.target.value);
  }
  const changeCurrency = (data) => {
     setCurrencyVal(data.target.value);
  }
  const {mutateAsync, isLoading, isError, isSuccess}  = useDepotTransaction();
  const {mutateAsync:mutateAsyncCp, isLoading:isLoadingCp, isError:isErrorCp, isSuccessCp:isSuccessCp}  = useDepositWebhookCp();
  return (
    <div>
          <FormGroup>
            <Label>Veuillez Choisir une monnaie</Label>
            <Input onChange={changeCurrency} type="select" id="cinetpay_currency">
              <option>XAF</option>
              <option>XOF</option>
              <option>CDF</option>
            </Input>
        </FormGroup>
        <FormGroup>
          <Label>Montant {currencyVal}</Label>
          <Input type="integer" onChange={changeXAFtoUSD} id="cinetpay_amount" placeholder="100" />
        </FormGroup>
        <FormGroup>
          <Label>Correspondance USD</Label>
          <Input type="number" value={(xafVal/dtc?.info.rate).toFixed(5)} id="cinetpay_amount_usd" placeholder="0" disabled />
        </FormGroup>

        <Button onClick={async ()=>{
          //Here we ask token
          const body = {};
          const res = await mutateAsync({accessToken: context.appState.accessToken ,data:body});
          // const res2 = await mutateAsyncCp({accessToken: context.appState.accessToken ,data:{
          //   //trans_id:paymentInfo.cpm_trans_id
          //   trans_id:""
          // }});
          if(res.error && !res.success){
              alert("Probleme de connexion avec le server shakazz!");
             } else {
               cp_init(res.data.transactionId);
           }
        }} className="mt-3 mb-1" id="cp_bt_get_signature" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
        {isLoading? <Spinner size="sm" color="#cc993a" />: "SOUMETTRE"}
       </Button>
       <div id="cinetpay_payment_result" style={{color:"red",fontSize:"1.1em"}}></div>
    </div>
  )
}

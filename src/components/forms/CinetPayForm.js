import React from 'react'
import {cp_init} from "../../../src/helpers/cp";
import {useDepotTransaction} from '../../hooks';
import { useAppContext } from '../../context';
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
  const {mutateAsync, isLoading, isError, isSuccess}  = useDepotTransaction();
  return (
    <div>
        <FormGroup>
          <Label>Montant</Label>
          <Input type="integer" id="cinetpay_amount" placeholder="100" />
        </FormGroup>
        <FormGroup>
          <Label>Veuillez Choisir une monnaie</Label>
          <Input type="select" id="cinetpay_currency">
            <option>XAF</option>
            <option>XOF</option>
            <option>CDF</option>
          </Input>
      </FormGroup>
        <Button onClick={async ()=>{
          //Here we ask token
          const body = {};
          const res = await mutateAsync({accessToken: context.appState.accessToken ,data:body});
          if(res.error && !res.success){
              alert("Probleme de connexion avec le server shakazz!");
             } else {
               cp_init(res.data.transactionId,isLoading);
           }
        }} className="mt-3 mb-1" id="cp_bt_get_signature" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
        {isLoading? <Spinner size="sm" color="#cc993a" />: "SOUMETTRE"}
       </Button>
       <div id="cinetpay_payment_result" style={{color:"red",fontSize:"1.1em"}}></div>
    </div>
  )
}

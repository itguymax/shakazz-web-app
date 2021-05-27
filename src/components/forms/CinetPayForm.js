import React from 'react'
import {cp_init} from "../../../src/helpers/cp";
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

export default function CinetPayForm({}) {
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
        <Button onClick={cp_init} className="mt-3 mb-1" id="cp_bt_get_signature" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
        SOUMETTRE
       </Button>
       <div id="cinetpay_payment_result" style={{color:"red",fontSize:"1.1em"}}></div>
    </div>
  )
}

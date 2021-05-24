import React from 'react'
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,Button,
  Row, Form, Label,FormText
} from "reactstrap";
import Dot from '../common/dot'

export default function CinetPayForm({}) {
  return (
    <>
    <Form>
        <FormGroup>
          <Label>Montant</Label>
          <Input type="email" name="email" id="amount" placeholder="Amount" />
          </FormGroup>
        <FormGroup>
          <Label>Monnaie</Label>
          <Input type="email" name="email" id="currency" placeholder="Currency" />
        </FormGroup>
        <FormGroup>
          <Label>Transaction</Label>
          <Input type="email" name="email" id="trans_id" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>User</Label>
          <Input type="email" name="email" id="cpm_custom" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>Désignation</Label>
          <Input type="email" name="email" id="designation" placeholder="" />
        </FormGroup>
        <Button className="mt-3 mb-1"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
        SOUMETTRE
       </Button>
      </Form>
    </>
  )
}

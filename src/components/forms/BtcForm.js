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

export default function BtcForm({}) {
  return (
    <>
    <Form>
      <FormGroup>
        <Label>Montant</Label>
        <Input type="email" name="email" id="designation" placeholder="" />
      </FormGroup>
      <Button className="mt-3 mb-1"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
      SOUMETTRE
     </Button>
    </Form>
    </>
  )
}

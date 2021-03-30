import React, {useState} from 'react'
import { Col, Container, Form, Row } from 'reactstrap';
import Portal from '../../layouts/Portal';
import Line from '../../components/common/line'
import DropDownC from '../../components/forms/Dropdownc'
import SecForm from '../../sections/2fa'
const options = [{
  val: "Email"
}, {
  val: "Sms"
}]
 function Securite() {
   const [faOption, setfaOption] = useState(options[Math.floor(Math.random() * options.length )])
   const [pwdcOption, setpwdcOption] = useState(options[Math.floor(Math.random() * options.length )])
   const [pwdtOption, setpwdtOption] = useState(options[Math.floor(Math.random() * options.length )])
   const selectionOption = ( value ) => {
    setfaOption(value);
    console.log("dddd", value);
  };
  const onSubmit2fa =()=>{
    console.log("ddddccc", faOption);
  }
   const onSubmitpwdc =()=>{
    console.log("ddddccc", faOption);
  }
   const onSubmitpwdt =()=>{
    console.log("ddddccc", faOption);
  }
  return (
    <Container fluid>
     <SecForm label="2FA" options={options} onSubmit={onSubmit2fa} faOption={faOption} handleOnSelect={selectionOption}/>
      <Line/>
      <Row>
        <Col>
           <SecForm sublabel="Connexion" label="Restauration mot de passe" col options={options} onSubmit={onSubmitpwdc} faOption={pwdcOption} handleOnSelect={selectionOption}/>
        </Col>
        <Col>
           <SecForm  sublabel="Transaction" label="Restauration mot de passe" col options={options} onSubmit={onSubmitpwdt} faOption={pwdtOption} handleOnSelect={selectionOption}/>
        </Col>
      </Row>
      <Line/>
    </Container>
  )
}

Securite.layout = Portal
export default Securite;
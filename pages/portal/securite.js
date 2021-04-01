import React, {useState} from 'react'
import { Col, Container, Form, Row } from 'reactstrap';
import Portal from '../../src/layouts/Portal';
import Line from '../../src/components/common/line';
import DropDownC from '../../src/components/forms/Dropdownc';
import SecForm from '../../src/sections/2fa';
import Modificationpwd from '../../src/sections/modificationpwd'
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
  const selectionOptionpwdc = ( value ) => {
    setpwdcOption(value);
    console.log("dddd", value);
  };
  const selectionOptionpwdt = ( value ) => {
    setpwdtOption(value);
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
  const onSubmitC = (data) => { console.log("dc",data)};
  const onSubmitT = (data) => { console.log("dT", data)};
  return (
    <Container fluid>
     <SecForm label="2FA" options={options} onSubmit={onSubmit2fa} faOption={faOption} handleOnSelect={selectionOption}/>
      <Line/>
      <Row>
        <Col>
           <SecForm sublabel="Connexion" label="Restauration mot de passe" col options={options} onSubmit={onSubmitpwdc} faOption={pwdcOption} handleOnSelect={selectionOptionpwdc}/>
        </Col>
        <Col>
           <SecForm  sublabel="Transaction" label="Restauration mot de passe" col options={options} onSubmit={onSubmitpwdt} faOption={pwdtOption} handleOnSelect={selectionOptionpwdt}/>
        </Col>
      </Row>
      <Line/>
      <Row className="mb-5">
        <Col>
           <Modificationpwd label="Changer votre mot de passe" sublabel="Connexion" onSubmit={onSubmitC}/>
        </Col>
        <Col>
          <Modificationpwd label="Changer votre mot de passe" sublabel="Transaction" onSubmit={onSubmitT}/>
        </Col>
      </Row>
    </Container>
  )
}

Securite.layout = Portal
export default Securite;
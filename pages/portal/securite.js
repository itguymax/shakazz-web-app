import React, {useState} from 'react'
import { Col, Container, Form, Row } from 'reactstrap';
import Portal from '../../src/layouts/Portal';
import Line from '../../src/components/common/line';
import DropDownC from '../../src/components/forms/Dropdownc';
import SecForm from '../../src/sections/2fa';
import Modificationpwd from '../../src/sections/modificationpwd';
import withAuth from '../../src/hoc/withAuth';
import { useAppContext } from '../../src/context';
import { passwordSchema,transactionPasswordSchema} from "../../src/validations";
import {usechangeTransactionPassword,usechangeConnexionPassword} from '../../src/hooks';
const options = [{
  val: "Email"
}]
 function Securite() {
   const [faOption, setfaOption] = useState(options[Math.floor(Math.random() * options.length )])
   const [pwdcOption, setpwdcOption] = useState(options[Math.floor(Math.random() * options.length )])
   const [pwdtOption, setpwdtOption] = useState(options[Math.floor(Math.random() * options.length )])
   const [loadingc, setLoadingC] = useState(false);
    const [loadingt, setLoadingT] = useState(false);
   const [errorMsgC, seterrorMsgC] = useState('');
   const [successMsgC, setsuccessMsgC] = useState('');
   const [errorMsgT, seterrorMsgT] = useState('');
   const [successMsgT, setsuccessMsgT] = useState('');
    const context = useAppContext();
    const { mutateAsync:cpc, isLoading:icpc}  = usechangeConnexionPassword()
    const { mutateAsync:cpt, isLoading:icpt}  = usechangeTransactionPassword()
   const selectionOption = ( value ) => {
    setfaOption(value);
  };
  const selectionOptionpwdc = ( value ) => {
    setpwdcOption(value);
  };
  const selectionOptionpwdt = ( value ) => {
    setpwdtOption(value);
  };
  const onSubmit2fa =()=>{
  }
   const onSubmitpwdc =(data)=>{
     console.log(data);
  }
   const onSubmitpwdt =()=>{
  }
  const onSubmitC = async (data) => {
    setLoadingC(true);
    const body = {
    data: {
        user:{
            password: data.oldPassword,
            newPassword: data.repeatNewPassword
        }
    }

 }
  const res = await cpc({accessToken: context.appState.accessToken ,data:body});
   if(res.error && !res.success){
        setLoadingC(false);
        seterrorMsgC(res.message)
        setsuccessMsgC('')
        return;
      } else {
      setLoadingC(false)
      seterrorMsgC('')
      setsuccessMsgC(res.message)
        return;

    }
    console.log(" chahhhhhhcccc",data, res);
  };
  const onSubmitT = async (data) => {
     setLoadingT(true);
     const body = {
    data: {
        user : {
            transaction : data.oldPassword,
            newTransaction : data.repeatNewPassword
        }
    }

};
 const res = await cpt({accessToken: context.appState.accessToken ,data:body});
   if(res.error && !res.success){
      setLoadingT(false);
        seterrorMsgT(res.message)
        setsuccessMsgT('')
        return;
      } else {
     setLoadingT(false);
      seterrorMsgT('')
      setsuccessMsgT(res.message)
        return;

    }
    console.log(data);
  };
  return (
    <Portal>
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
        <Col xl="6" lg="6">
           <Modificationpwd schema={passwordSchema} successmsg={successMsgC} errormsg={errorMsgC} loading={loadingc} label="Changer votre mot de passe" sublabel="Connexion" onSubmit={onSubmitC}/>
        </Col>
        <Col xl="6" lg="6">
          <Modificationpwd schema={transactionPasswordSchema} successmsg ={successMsgT} errormsg={errorMsgT} loading={loadingt} label="Changer votre mot de passe" sublabel="Transaction" onSubmit={onSubmitT}/>
        </Col>
      </Row>
    </Container>
    </Portal>
  )
}

export default withAuth(Securite);

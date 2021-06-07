import React ,{useState, useRef} from 'react';
import { useRouter } from 'next/router';
import Bleu from '../../src/layouts/Bleu';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Sinput from "../../src/components/forms/Sinput";
import { forgotPasswordSchema } from "../../src/validations";
import { requestUserPasswordReset } from '../../src/services/auth.service';
import {Global,css} from "@emotion/react"
import { device } from '../../src/lib/device.js';
import {Card,Button, CardBody } from 'reactstrap'
import Captcha from '../../src/components/Captcha';
import Toast from "../../src/components/forms/Toast";

function ForgotPassword() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const [verified, setVerified]= useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errormsg, setErrormsg]= useState(null);
  const [successmsg, setSuccessmsg]= useState(null);
  const [emailSend, setEmail] = useState(false);
  const executeCaptcha = () => setVerified(!verified);
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState("");
  const onDismiss = () => setAlertVisible(false);
  const onSubmit = async (data) => {
      let userdata;
  if(verified){
      setSubmitting(true);
    const { email } = data;
    userdata = {email }
   try{
       let datares = await requestUserPasswordReset(userdata);
       const { data, error, success, message } = datares;
       if(error && !success){
        setSuccessmsg(null);
        setErrormsg(message);

       } else {
         setErrormsg(null);
         setSuccessmsg(message);
         setEmail(!emailSend);
       }

   }catch(err){
        console.log("error", err);
   }
   } else {
     setResponseAlert({error:true,message:"Vous  n'êtes pas humain!"});
     setAlertVisible(true);
   }
  };
  const  recaptchaRef = useRef();
  return (
    <>
    <Global
    styles={css`
      .forgotPasswordForm {
        width:32em;
      }
      @media only screen and ${device.mPhone} {
        .forgotPasswordForm {
          width:20em !important;
        }
        }
      @media only screen and ${device.iphoneX} {
          .forgotPasswordForm {
            width:21em !important;
          }
        }
      @media only screen and ${device.bPhone} {
        .forgotPasswordForm {
          width:23em;
        }
      }
    `}
    />
    <div>
      <h3 style={{font: 'normal normal bold 30px/35px Ubuntu', color:'#fff', letterSpacing: '0px', marginBottom: '50px'}}>Récupération de votre mot de passe</h3>
     {emailSend?(<>
       <h2 className="font-weight-bold" style={{color:'#fff'}}>Check your email</h2>
       <div style={{color:'#fff'}}>
     {`Nous venons de vous envoyer un e-mail`}

     <br/> {`avec un lien pour réinitialiser votre mot de passe!`}
     </div></>):(
       <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center align-items-center">
       <Card className="forgotPasswordForm">
       <small style={{font: 'normal normal bold 14px/16px Ubuntu', margin:'10px auto 0px auto'}}>Remplissez le formulaire</small>
        <CardBody>
              <Sinput
                label="Email"
                icon="ni ni-email-83"
                placeholder="Entrez votre adresse email"
                type="email"
                register={register}
                name="email"
                iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
                append

              />
               {errors.email && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.email.message}</span>


              </div> }

              <Captcha recaptchaRef={recaptchaRef} onChange={executeCaptcha}/>
              <div className="text-center">
                 {errormsg && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errormsg}</span>

              </div> }
              {successmsg && <div className="text-muted font-italic">

                  <span className="text-success font-weight-700">{successmsg}</span>

              </div> }
                <Button className="mt-3 mb-1"  type="submit" style={{width:'50%', backgroundColor:'#679966', borderColor:'#679966'}} >
                  Envoyer l'e-mail
                </Button>
              </div>
        </CardBody>
      </Card>
      </form>)}
    </div>
    <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
    </>
  )
}

ForgotPassword.layout = Bleu

export default ForgotPassword;

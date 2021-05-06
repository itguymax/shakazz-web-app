import React ,{useState, useRef} from 'react';
import { useRouter } from 'next/router';
import Bleu from '../../../src/layouts/Bleu';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Card,Button, CardBody, FormGroup, InputGroup, Input} from 'reactstrap'
import Captcha from '../../../src/components/Captcha';
import Sinput from '../../../src/components/forms/Sinput';
import { resetPasswordSchema } from '../../../src/validations'
import { resetUserPassword } from '../../../src/services/auth.service';

function ForgotPassword() {
const  recaptchaRef = useRef();
const router = useRouter();
const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });
const [show, setShow] = useState(false);
  const [showc, setShowc] = useState(false);
  const [isUpdate, updateUserpassword] = useState(false);
  const [verified, setVerified]= useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errormsg, setErrormsg]= useState(null);
  const [successmsg, setSuccessmsg]= useState(null);
  const executeCaptcha = () => setVerified(!verified); 
  const handleToggleshow = () => setShow(!show);
  const handleToggleshowc = () => setShowc(!showc);
  if(router.route !== "/auth/forgotPassword/reset"){
    return ;
  } 
  const userId = router.query?.id;
  const token = router.query?.token
  
  const onSubmit = async (data) => {
    let userdata;
  if(verified){
      setSubmitting(true);
    const { password } = data;
    userdata = { password, userId, token }
   try{
       let datares = await resetUserPassword(userdata);
       const { data, error, success, message } = datares;
       if(error && !success){
        setSuccessmsg(null);
        setErrormsg(message);
       
       } else {
         setErrormsg(null);
         setSuccessmsg(message);
         updateUserpassword(true)
       }
       

   }catch(err){
        console.log("error", err);
   }
   } else {
     alert("Vous  n'êtes pas humain")
   }
  };
  return (
    <div>
      <h3 style={{font: 'normal normal bold 30px/35px Ubuntu', color:'#fff', letterSpacing: '0px', marginBottom: '50px'}}>Récupération de votre mot de passe</h3>
     {isUpdate?(<>
       <h2 className="font-weight-bold" style={{color:'#fff'}}>Connectez vous!</h2>
       <div style={{color:'#fff'}}>
     {`Votre mot de passe a été restauré`} 
     <br/> 
     <Link  href="/auth/login">
       <small style={{color:'#fff',cursor:'pointer'}} >Cliquez ici</small>
     </Link>
     </div></>):( <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center align-items-center">
       <Card style={{ width: '450px'}}  >
       <small style={{font: 'normal normal bold 14px/16px Ubuntu', margin:'10px auto 0px auto'}}>Remplissez le formulaire</small>
        <CardBody >
        <Sinput 
          label="Nouveau mot de passe"
          placeholder="Entrez le nouveau mot de passe"
          type={show?"text":"password"}
          name="password"
          icon={show?"fa fa-eye":"fa fa-eye-slash"}
          handleToggleshow={handleToggleshow }
          append
          register={register}
        />
         {errors.password && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.password.message}</span>
               
              </div> }
        <Sinput 
          label="Confirmez le mot de passe"
          placeholder="Entrez le mot de passe"
          type={showc?"text":"password"}
          name="confirmpassword"
          icon={showc ? "fa fa-eye":"fa fa-eye-slash"}
          handleToggleshow={handleToggleshowc}
          append
          register={register}
        />
         {errors.confirmpassword && <div className="text-muted font-italic">
            <span className="text-danger font-weight-700">{errors.confirmpassword.message}</span>
               
            </div> }
          <Captcha recaptchaRef={recaptchaRef} onChange={executeCaptcha}/>
              <div className="text-center">
                 {errormsg && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errormsg}</span>
               
                </div> }
                {successmsg && <div className="text-muted font-italic">
                
                  <span className="text-success font-weight-700">{successmsg}</span>
               
                </div> }
                <Button className="mt-3 mb-1"   type="submit" style={{width:'50%', backgroundColor:'#679966', borderColor:'#679966'}} >
                 Restaurer
                </Button>
              </div>
        </CardBody>
      </Card>
     </form>)}
    </div>
  )
}

ForgotPassword.layout = Bleu

export default ForgotPassword;
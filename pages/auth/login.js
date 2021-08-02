import React, {useRef, useState, useEffect} from "react";
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginUser } from '../../src/services/auth.service'
import connfig from '../../src/config';
import { device } from '../../src/lib/device.js';
import {Global,css} from "@emotion/react"
import Toast from "../../src/components/forms/Toast";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  Row,
  Spinner,
} from "reactstrap";
// layout for this page
import Auth from "../../src/layouts/Auth.js";
import Sinput from "../../src/components/forms/Sinput";
import Captcha from "../../src/components/Captcha";
import { loginSchema } from "../../src/validations";
import Head from "next/head";
import config from "../../src/config";
import {useMutation, useQueryClient} from 'react-query';
import { setUTToLS } from '../../src/helpers/token';
import { useAppContext } from '../../src/context';


function Login() {
  const context = useAppContext();
  const { mutateAsync, isLoading, isError, isSuccess} = useMutation("Login User",loginUser)
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState({});
  const onDismiss = () => setAlertVisible(false);
  const recaptchaRef = useRef();
  const [show, setShow] = useState(false);
  const [verified, setVerified]= useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errormsg, setErrormsg]= useState(null);
  const [successmsg, setSuccessmsg]= useState(null);
  const handleToggleshow = () => setShow(!show);
  const executeCaptcha = () => setVerified(!verified);
  const onSubmit = async (hookData)  => {

     let userdata;
    if(verified){
      setSubmitting(isLoading);
    const { password, userName } = hookData;
    userdata = {password, userName }
   try{
       let datares = await mutateAsync(userdata);
       const { data, error, success, message } = datares;
       if(error && !success){
        setSuccessmsg(null);
        setErrormsg(message);

       } else {
         if( typeof window !== "undefined"){
           //console.log("window", data.user_token);
            setUTToLS(data.user_token);
             setErrormsg(null);
         setSuccessmsg(message);
         setSubmitting(isLoading);
        context.dispatch({type:"userInfo", value: data.user});
         //router.push('/portal/dashboard');
         }
       }

   }catch(err){
        console.log("error", err);
   }
   } else {
     setResponseAlert({error:true,message:"Vous n'êtes pas humain!"});
     setAlertVisible(true);
   }
 };
 useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/portal/dashboard');
  }, [])
  return (
    <>
    <Global
    styles={css`
      @media only screen and ${device.mPhone} {
        .auth_block_illustration{
          display:none;
        }
        }
      @media only screen and ${device.bPhone} {
        .auth_block_illustration{
          display:none;
        }
      }
      @media only screen and ${device.sTablet} {
        .auth_block_illustration{
          display:none;
        }
      }
    `}
    />
      <Head>
        {/* META tags */}
        <title>Connexion | Shakazz</title>
        <meta
          name="description"
          content="Bienvenue Leader"
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/auth/login`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Connexion | Shakazz" />
        <meta
          property="og:description"
          content="Bienvenue Leader"
        />
        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta
          property="og:url"
          content={`${config.canonicalLink}/auth/login`}
        />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webpage" />
        <meta
          name="twitter:description"
          content="Bienvenue Leader"
        />
      </Head>
      <Row>
        <Card className="bg-white container border-0" style={{minWidth:'100%'}}>
          <CardHeader className="bg-transparent px-lg-5 ">

            <div className="text-muted mt-2 mb-1">
              <h2 style={{marginBottom:'0px'}} className="text-md-right mb-md-4">Inscription</h2>

              <a style={{font: 'normal normal bold 42px/48px Ubuntu', color: '#121212'}} onClick={(e) => e.preventDefault()}>
                  Hi, welcome back
                </a>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-2">
            {/* <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div> */}
            <Form role="form" onSubmit={handleSubmit(onSubmit)} className="mt-4" >
            <Sinput
              label="Nom d'utilisateur"
              icon="far fa-user"
              placeholder="Nom d'utilisateur"
              type="text"
              register={register}
              name="userName"
              append
              iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
            />
             {errors.userName && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.userName.message}</span>

              </div> }
            <Sinput
              label="Mot de passe"
              icon="fa fa-user"
              placeholder="Entrer votre mot de passe"
              type={show?"text":"password"}
              register={register}
              name="password"
              icon={show ? "fa fa-eye":"fa fa-eye-slash"}
              handleToggleshow={handleToggleshow }
              append
              iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
            />
               {errors.password && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errors.password.message}</span>

              </div> }
              <div className="text-right ">
               <a
                    href="/auth/forgotPassword"
                    onClick={(e) => router.prefetch('/auth/forgotPassword')
                    }
                  >
                  <span className="text-muted">Mot de passe oublié?</span>
                </a>
              </div>

             <Captcha recaptchaRef={recaptchaRef} onChange={executeCaptcha}/>

              <div className="text-center" >
                  {errormsg && <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errormsg}</span>

              </div> }
              {successmsg && <div className="text-muted font-italic">

                  <span className="text-success font-weight-700">{successmsg}</span>

              </div> }
                <Button className="mt-3 mb-1"  disabled={isLoading} type="submit" style={{width:'50%', backgroundColor:'#679966', borderColor:'#679966'}} >
                    {isLoading? <Spinner size="sm" color="#cc993a" />: "S'identifier"}
                </Button>
                <div>
                  <a
                    href="/auth/register"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>Vous n'avez pas encore de compte?</small>
                  </a>{" "}
                  <a
                    href="/auth/register"
                  >
                    <small className="text-bold font-weight-bold ml-1" >S'inscrire</small>
                  </a>

             </div>
              </div>

            </Form>
          </CardBody>
        </Card>
      </Row>
      <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
    </>
  );
}

Login.layout = Auth;

export default Login;

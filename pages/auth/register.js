import React, {useState, useRef, useEffect } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Row,
  Col,
} from "reactstrap";
import { signup } from '../../src/services/auth.service'
// layout for this page
import Auth from "../../src/layouts/Auth.js";
import { useRouter } from 'next/router'
import Sbutton from "../../src/components/forms/Sbutton";
import Sdropdown from "../../src/components/forms/Sdropdown"
import Captcha from "../../src/components/Captcha";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Sinput from "../../src/components/forms/Sinput";
import { registrationSchema } from "../../src/validations";
import Head from "next/head";
import config from "../../src/config";
const options = [
  {
    key: 'JennyHess',
    text: 'JennyHess',
    value: 'JennyHess',
    image: { avatar: true, src: "/assets/img/theme/react.jpg" },
  },
  {
    key: 'ElliotFu',
    text: 'ElliotFu',
    value: 'ElliotFu',
    image: { avatar: true, src: "/assets/img/theme/react.jpg" },
  },
  {
    key: 'StevieFel',
    text: 'StevieFel',
    value: 'StevieFel',
    image: { avatar: true, src: "/assets/img/theme/react.jpg" },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: "/assets/img/theme/react.jpg" },
  },
]
function Register() {
  
const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(registrationSchema),
  });
  const router = useRouter();
  const recaptchaRef = useRef();
  const [isParticular, setProfil] = useState(true);
  const [show, setShow] = useState(false);
  const [showc, setShowc] = useState(false);
  const [verified, setVerified]= useState(false);
  const [errormsg, setErrormsg]= useState(null);
  const [successmsg, setSuccessmsg]= useState(null);
  const [additionaldata, setUserAdditionalData] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[Math.floor(Math.random() * options.length )]);
  const togglebg = {
    backgroundColor: isParticular ? '#CC9933':'#fff'
  }
  const handleParainOption = ( value ) => {
    setSelectedOption(value);
  };
  const handletoggle = () => setProfil(!isParticular);
  const onSubmit =  async (data) => {
   if(verified){
    setSubmitting(true);
    let userdata;
    const { password,email,companyName, term, userName, lastName, firstName } = data;
    userdata = {...additionaldata,password, email, companyName, term, userName, lastName, firstName};
   try{
       let datares = await signup(userdata);
       const { data, error, success, message} = datares;
       if(error && !success){
        setSuccessmsg(null);
        setErrormsg(message);
       } else {
         setErrormsg(null);
         setSuccessmsg(message);
         router.push('/portal/dashboard');
       }
       

   }catch(err){
        console.log("error", err);
   }
   } else {
     alert("Vous  n'êtes pas humain")
   }
    
  };
  const handleToggleshow = () => setShow(!show);
  const handleToggleshowc = () => setShowc(!showc);
  const executeCaptcha = () => setVerified(!verified)
  const handleOnBlur = () => {
    
  }
  // useEffect( ()=>{
  //   const addData= {
  //     profil: isParticular? "Particulier":"Entreprise",
  //     parent: selectedOption.key
  //   }
  //   setUserAdditionalData(addData);
  // }, [selectedOption,isParticular])
// useEffect(()=>{
//     router.push("pre-inscription");
//   })
  return (
    <>
     <Head>
        {/* META tags */}
        <title>Inscription | Shakazz</title>
        <meta
          name="description"
          content="Saisissez L'opportunité pour une indépendance financière."
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
          content="Saisissez L'opportunité pour une indépendance financière."
        />
        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta
          property="og:url"
          content={`${config.canonicalLink}/auth/register`}
        />
        <meta property="og:site_name" content="Shakazz"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webpage" />
        <meta
          name="twitter:description"
          content="Saisissez L'opportunité pour une indépendance financière."
        />
      </Head>
      <Row>
        <Card className="bg-white container border-0" style={{minWidth:'100%'}}>
          <CardBody className="px-lg-5 py-lg-2">
            <Form role="form" onSubmit={handleSubmit(onSubmit)}>
           
              <Row className="justify-content-between">
                <Col className="col-auto ml-2">
                  <FormGroup>
                    <label>Votre profil</label>
                  
                    <div className=" row ">
                        <Sbutton 
                      label="Particulier" style={{
                      backgroundColor: isParticular? '#FFCC00':'#fff',
                      fontWeight: isParticular? 'bold':'normal',
                      
                      }} onClick={handletoggle}/>
                      <Sbutton 
                      style={{backgroundColor: !isParticular? '#FFCC00':'#fff', fontWeight: !isParticular? 'bold':'normal'  }} 
                      onClick={handletoggle} 
                      label="Entreprise"
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col className="col-auto">
                  <FormGroup>
                    <label>Votre parain</label>
                    {router.query.ref  ?(
                      <div className="d-flex justify-content-between align-items-center mr-0" style={{width:'250px', padding:'5px', backgroundColor:'#f5f5f5', borderRadius: '5px'}}>
                       <div  className="d-flex align-items-center">
                          <img className="avatar avatar-sm mr-2" alt={options[0].userName} src={options[0].image.src}></img>   
                          <div className="d-flex" style={{flexDirection:'column'}}>
                            <small className="mb-0">
                              {options[0].userName}
                            </small>
                            <div className="d-flex align-items-center">
                              <small>Flag</small>
                              <small>Online</small>
                            </div>
                          </div>
                       </div>
                      </div>
                    ):(
                       <Sdropdown  register={register} options={options} selectedOption={selectedOption} name="parain" onSelectParain={handleParainOption}/>
                    ) }
                   
                 </FormGroup>
                </Col>
            </Row>
          {isParticular?(   <Row> 
              <Col>
              <Sinput
                label="Prénom"
                name="firstName"
                placeholder="Entrez votre prénom"
                type="text"
                register={register}
                iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
                
              />
              {errors.firstName && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.firstName.message}</span>
               
              </div> }
              
              </Col>
              <Col>
               <Sinput
                label="Nom"
                name="lastName"
                placeholder="Entrez votre nom"
                type="text"
                register={register}
                iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
                
              />
              {errors.lastName && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.lastName.message}</span>
               
              </div> }
              </Col>
             </Row>):(<>
               <Sinput
                label="Nom de l'entreprise"
                name="companyName"
                placeholder="Entrez le nom de l'entreprise"
                type="text"
                register={register}
                iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
              />
              {errors.companyName && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.companyName.message}</span>
               
              </div> }
              </>
             )}
               <Sinput
                label="Nom d'utilisateur"
                name="userName"
                placeholder="Entrez votre nom d'utilisateur"
                type="text"
                register={register}
                iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
              
              />

               {errors.userName && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.userName.message}</span>
               
              </div> }
              <Sinput
                label="Email"
                placeholder="Entrez votre adresse email"
                type="email"
                name="email"
                register={register}
                iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
              />
               {errors.email && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.email.message}</span>
               
              </div> }
              <Sinput
                label="Mot de passe"
                placeholder="Entrez votre mot de passe"
                type={show ? "text":"password"}
                name="password"
                register={register}
                icon={show ? "fa fa-eye":"fa fa-eye-slash"}
                handleToggleshow={handleToggleshow }
                append
                autoComplete="new-password"
                iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
              />
              {errors.password && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.password.message}</span>
               
              </div> }
              <Sinput
                label="Confirmer le mot de passe"
                placeholder="Entrez votre mot de passe"
                type={showc?"text":"password"}
                name="confirmpassword"
                registerOptions={{ required: true, maxLength: 20 }}
                register={register}
                icon={showc?"fa fa-eye":"fa fa-eye-slash"}
                handleToggleshow={handleToggleshowc }
                append
                iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
                autocomplete="new-password"
              />
              {errors.confirmpassword && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.confirmpassword.message}</span>
               
              </div> }
              {/* <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div> */}
              <Row className="my-0">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                      name="term"
                      ref={register}
                      
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                       J'ai lu et j'accepte les{" "}
                        <a href="#itguymax" onClick={(e) => e.preventDefault()}>
                          Conditions d'utilisation
                        </a>
                      </span>
                    </label>
                  </div>
                   {errors.term && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.term.message}</span>
               
              </div> }
                </Col>
              </Row>
              <Captcha recaptchaRef={recaptchaRef} onChange={executeCaptcha}/>
               <div className="text-center" >
                 {errormsg && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errormsg}</span>
               
              </div> }
              {successmsg && <div className="text-muted font-italic">
                
                  <span className="text-success font-weight-700">{successmsg}</span>
               
              </div> }
                <Button disabled={true} className="mt-3 mb-1"  type="submit" style={{width:'50%', backgroundColor:'#679966', borderColor:'#679966'}} >
                  Créer un compte
                </Button>
                <div>
                  <a
                    href="#itguymax"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>Vous avez déjà un compte?</small>
                  </a>{" "}
                  <a  
                    href="/auth/login"
                  >
                    <small className="text-bold font-weight-bold ml-1">Se connecter</small>
                  </a>
                </div>
              </div>

            </Form>
          </CardBody>
        </Card>
      </Row>
    </>
  );
}

Register.layout = Auth;


export default Register;


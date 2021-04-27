import React, {useState} from 'react';
// reactstrap components
import { Button, Container, Row, Form,Spinner} from "reactstrap";
import Sinput from '../components/forms/Sinput';
import { subscriptionFormSchema } from "../validations"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {css} from "@emotion/react";
import {device } from "../lib/device";
import {submitSubscriptionData} from "../services/subscription";

export default function Subscription() {
  const { register, handleSubmit, errors} = useForm({
    resolver: yupResolver(subscriptionFormSchema),
  });
  const [serverError, setServerError] = useState(false);
  const [serverSuccess, setserverSuccess] = useState(false);
  const [isSubmitting, setSubmit] =  useState(false);
  const [data, setData] = useState({
    email: "",
  })

   const handleChange = (e) => {
    const { name, value } = e.target;
   setData({
      ...data,
      [name]: value,
    });
    
  };
  const onSubmit = async (data)=> {
    setSubmit(true);
        const res = await submitSubscriptionData(data);
        if(res.success) {
          setServerError(false)
          setserverSuccess(true);
          setData({ email: ""})
          setSubmit(false);
        } else {
           setServerError(true)
           setserverSuccess(false);
           setSubmit(false);
        }
  }
  return (

     <>
      <div style={{backgroundColor: "#F5F5F5"}}>
        <Container className="d-flex align-items-center justify-content-center" fluid>
          <Row className="my-7">
            <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
              <div  className="text-center">
                 <h1 style={{color:"#707070"}}>Souscrivez à notre Newsletter</h1>
                  <p  style={{color:"#707070"}} className="mt-0 mb-5">
                    Optenez nos articles en priorité.
                  </p>
                  
              </div>
               <div>
                   { serverError && <div className="text-muted col font-italic">
                
                  <span className="text-danger font-weight-700">Une erreur est survenue lors de la soumision du formulaire </span>
               
              </div> }
              { serverSuccess && <div className="text-muted  col font-italic">


                  <span className="text-success font-weight-700"> Merci d'avoir souscrire a notre Newsletter</span>
               
              </div>} 
              </div>
               <Form onSubmit={handleSubmit(onSubmit)}  style={{display:"flex", justifyContent:"center", alignItems:"center"}}
                    css={css`
                        @media ${device.smMobileMax}{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }
                    `}
               >
             
              
                 <div>
                    <Sinput
                    name="email"
                    placeholder="Votre Adresse Email"
                    register={register}
                    iStyle={{border:'1px solid #707070', backgroundColor:"#fff", borderRadius:"3px", overflow:"hidden",width:"230px", }}
                    inputBg="#fff"
                    type="text"
                     handleOnchange={handleChange}
                  />
                  {errors.email && <div className="text-muted font-italic">
                      
                        <span className="text-danger font-weight-700">{errors.email.message}</span>
                    
                    </div> }
                 </div>
                  <Button  disabled={isSubmitting} className="ml-xl-4 ml-lg-4 mt-lg-1 ml-sm-4 mt-xl-1 mt-2"   type="submit" style={{ backgroundColor:'#F5F5F5', borderColor:'#707070', color: "#112F23", borderRadius:'3px'}} >
                    {isSubmitting? <Spinner type="grow" color="#cc993a" />: "SOUSCRIRE"}
                  </Button>
              </Form>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

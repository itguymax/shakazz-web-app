import React, {useState} from 'react';
import { Form, Button } from 'reactstrap';
import Sinput from '../forms/Sinput';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema} from '../../validations'
import { submitContactData} from '../../services/contact-us.service'
import { device} from "../../lib/device"
import {css} from "@emotion/react"
export default function ContactForm() {
  const { register, handleSubmit, watch, errors , reset} = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  const [serverError, setServerError] = useState(false);
  const [serverSuccess, setserverSuccess] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
   setData({
      ...data,
      [name]: value,
    });
    
  };
  const onSubmit = async (data)=> {
        const res = await submitContactData(data);
        if(res.success) {
          setServerError(false)
          setserverSuccess(true);
          setData({
            name: "",
            phone: "",
            email: "",
            message: ""
          })
        } else {
           setServerError(true)
           setserverSuccess(false);
        }

  }
  return (
    <Form css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        @media ${device.smMobileMax} {
          
        }
    `} style={{display:"flex", justifyContent:"center", flexDirection:"column"}} onSubmit={handleSubmit(onSubmit)}>
        { serverError && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">Une erreur est survenue lors de la soumision du formulaire </span>
               
              </div> }
              { serverSuccess && <div className="text-muted font-italic">
                
                  <span className="text-success font-weight-700"> Votre requette a été envoyée a l'equipe shakazz</span>
               
              </div>} 
      <Sinput
        name="name"
        placeholder="Votre nom"
        register={register}
        iStyle={{border:'1px solid #707070', borderRadius:"15px", overflow:"hidden"}}
        inputBg="#fff"
        type="text"
        inputvalue={data.name}
        handleOnchange={handleChange}
        />
         {errors.name && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.name.message}</span>
               
              </div> }
        <div css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;

              @media ${device.smMobileMax} {
                flex-direction: column;
              }
        `}>
          <div 
          css={css`
              width:230px;
              @media ${device.smMobileMax} {
                width: 100%;
              }
           `}>
          <Sinput 
            
            name="phone"
            placeholder="(code) Numéro de téléphone"
            register={register}
            iStyle={{border:'1px solid #707070', borderRadius:"15px", overflow:"hidden"}}
            inputBg="#fff"
            type="text"
            inputvalue={data.phone}
            handleOnchange={handleChange}
            />
            </div>
             {errors.phone && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.phone.message}</span>
               
              </div> }

          <div 
          css={css`
              width:230px;
              @media ${device.smMobileMax} {
                width: 100%;
              }
           `}>
          <Sinput
            name="email"
            placeholder="Votre Adresse Email"
            register={register}
            iStyle={{border:'1px solid #707070', borderRadius:"15px", overflow:"hidden" }}
            inputBg="#fff"
            type="text"
            inputvalue={data.email}
            handleOnchange={handleChange}
            />
            </div>
             {errors.phone && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.phone.message}</span>
               
              </div> }
        </div>
        <Sinput
            name="message"
            placeholder="Votre message..."
            register={register}
            iStyle={{border:'1px solid #707070', borderRadius:"15px", overflow:"hidden"}}
            inputBg="#fff"
            type="textarea"
            rows="4"
            inputvalue={data.message}
            handleOnchange={handleChange}
          />
           {errors.message && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.message.message}</span>
               
              </div> }
          <div className=" d-flex justify-content-center ">
          <Button className="mt-3 mb-1"   type="submit" style={{ backgroundColor:'#444444', borderColor:'#444444', borderRadius:'40px', width:'150px'}} >
           Envoyer
        </Button></div>
    </Form>
  )
}

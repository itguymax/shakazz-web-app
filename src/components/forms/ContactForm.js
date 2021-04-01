import React from 'react';
import { Form, Button } from 'reactstrap';
import Sinput from '../forms/Sinput';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema} from '../../validations'

export default function ContactForm() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  const onSubmit = (data)=> {
    console.log("forem data", data);
  }
  return (
    <Form style={{display:"flex", justifyContent:"center", flexDirection:"column"}} onSubmit={handleSubmit(onSubmit)}>
      <Sinput
        name="name"
        placeholder="Votre nom"
        register={register}
        iStyle={{border:'1px solid #707070', borderRadius:"15px", overflow:"hidden"}}
        inputBg="#fff"
        type="text"
        />
         {errors.name && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.name.message}</span>
               
              </div> }
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
          <Sinput
            name="phone"
            placeholder="Numéro de téléphone"
            register={register}
            iStyle={{border:'1px solid #707070', borderRadius:"15px", overflow:"hidden",width:"230px"}}
            inputBg="#fff"
            type="text"
            />
             {errors.phone && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.phone.message}</span>
               
              </div> }
          <Sinput
            name="email"
            placeholder="Votre Adresse Email"
            register={register}
            iStyle={{border:'1px solid #707070', borderRadius:"15px", overflow:"hidden",width:"230px", }}
            inputBg="#fff"
            type="text"
            />
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

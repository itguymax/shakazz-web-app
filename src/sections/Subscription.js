import React from 'react';
// reactstrap components
import { Button, Container, Row, Col , Form} from "reactstrap";
import Sinput from '../components/forms/Sinput';
import { subscriptionFormSchema } from "../validations"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export default function Subscription() {
  const { register, handleSubmit, errors} = useForm({
    resolver: yupResolver(subscriptionFormSchema),
  });
  const onSubmit = (data)=> {
    console.log("forem data", data );
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
               <Form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <Sinput
                    name="email"
                    placeholder="Votre Adresse Email"
                    register={register}
                    iStyle={{border:'1px solid #707070', backgroundColor:"#fff", borderRadius:"3px", overflow:"hidden",width:"230px", }}
                    inputBg="#fff"
                    type="text"
                  />
                  {errors.email && <div className="text-muted font-italic">
                      
                        <span className="text-danger font-weight-700">{errors.email.message}</span>
                    
                    </div> }
                  <Button className="ml-4 mt-1"   type="submit" style={{ backgroundColor:'#F5F5F5', borderColor:'#707070', color: "#112F23", borderRadius:'3px'}} >
                    SOUSCRIRE
                  </Button>
              </Form>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

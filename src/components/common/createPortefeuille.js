import React from 'react'
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
import {
Container,Row,Label,Form, Spinner,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { portefeuilleSchema} from "../../validations";
import Sinput from '../../../src/components/forms/Sinput';
	  const Button = styled.button`
		    background-color: #679966;
		    border-radius: 20px;
		    margin-top:1.8em;
		    color: white;
		    padding:0.6em;
		    width:10em;
		    border:1px solid #679966;
		    font-weight:100;
		    transition: all .8s ease-in-out;
		    &:hover {
		      color: #679966;
		      background-color:white;
		  }
		`
export default function CreatePortefeuille({ addPossa, successmsg, errormsg,loading }) {
const { register, handleSubmit, watch, errors } = useForm({
      resolver: yupResolver(portefeuilleSchema),
    });
  return (
      <Container className="createPortefeuille"
      onSubmit={handleSubmit( addPossa)} 
       style={{
                      width:"100%",
                      height:"14em",
                      marginLeft:"2em",
                      backgroundColor:"#f0f0f0",
                      borderRadius:"16px",
                      padding:"1em",paddingTop:"2em"}}>
                     
                        <Sinput
                         label="Nom"
                          inline
                          name="nom"
                          placeholder="Projet d'études"
                          iStyle={{width:"10em",
                             backgroundColor:"#d9d2d2 !important",width:"10em !important",border:"1px solid #d9d2d2",
                             borderRadius:"15px", marginTop:"-1.3em",overflow:"hidden"}}
                          inputBg="#fff"
                          type="text"
                          register={register}
                        />
                         
                        
                          <Sinput
                            label="Adresse"
                            inline
                            name="address"
                            placeholder="FRA2017univ2021"
                            register={register}
                            iStyle={{width:"10em",
                               backgroundColor:"#d9d2d2 !important",width:"10em !important",border:"1px solid #d9d2d2",
                               borderRadius:"15px", marginTop:"-1.3em",overflow:"hidden"}}
                            inputBg="#fff"
                            type="text"
                           
                          />
                         
                       <Row>
                           { successmsg && ( <div className="text-muted font-italic">

                  <span className="text-success font-weight-700">{successmsg}</span>

              </div>)} 
              { errormsg && ( <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errormsg}</span>

              </div>) }
                          <SButton type="submit" disabled={loading} style={{margin:"auto",marginTop:"1em"}}> {loading ? <Spinner size="sm" color="#cc993a" />: "Confirmer"}</SButton>
                       </Row>
                      </Container>
  )
}

import React, {useState, useEffect} from 'react'
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
import { device } from '../../../src/lib/device';
import {
  Container,Row,Label,Form, Spinner,Input,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { portefeuilleSchema} from "../../validations";
import Sinput from '../../../src/components/forms/Sinput';

const SButton = styled.button`
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
export default function CreatePortefeuille({ operateurChoix,addPossa, selectpossatype, successmsg, errormsg,loading }) {
    const { register, handleSubmit, watch, errors } = useForm({
      resolver: yupResolver(portefeuilleSchema),
    });
  return (<>
    <Global
    styles={css`
      .createPortefeuille{
        background-color:#F0F0F0;
        padding:1em;
        border-radius: 26px;
        height:auto !important;
      }
      .createPortefeuille input{
        color:#444444 !important;
        background: #D9D2D2 !important;
        border:none !important;
      }

      @media ${device.vsPhone}{
        .createPortefeuille{
          width:16em !important;
        }
        }
    `}
    />
      <Form className="createPortefeuille"
      onSubmit={handleSubmit(addPossa)}>
                         {/* <Input onChange={(d)=>{console.log("ooooo",d.target.value)}} type="select" name="portefeuille">
                              {[{nom:"btc"},{nom:"orange"}, {nom:"mtn"}, {nom:"carte"}].map( (option, i) => (
                                  <option data-adresse={option.nom} key={i}>
                                      {option.nom}
                                  </option>

                                ))}
                          </Input> */}
                        <Sinput
                          label="Type de porte feuille"
                          inline
                          name="type"
                          labelColor="#444444"
                          options={["VISA","MasterCard","Orange Money","MTN Mobile Money","Moov Money","Flooz Mobile Money","Mobicash","Bitcoin"]}
                          defaultOption="Bitcoin"
                          onSelect={selectpossatype}
                          placeholder="type de portefeuille"
                          register={register}

                          inputBg="#fff"
                          type="text"
                          dd
                        />
                        <Sinput
                          label="Nom"
                          inline
                          name="nom"
                          labelColor="#444444"
                          placeholder="Projet d'études"
                          register={register}
                          iStyle={{width:"10em",border:"1px solid #d9d2d2",
                             borderRadius:"15px",overflow:"hidden",marginTop:"-1em"}}
                          type="text"
                        />
                        {errors.nom && <div className="text-muted font-italic" style={{marginBottom:"2em"}}>

                           <span className="text-danger font-weight-700">{errors.nom.message}</span>

                       </div>}
                          <Sinput
                            label={operateurChoix.nom}
                            inline
                            labelColor="#444444"
                            name="address"
                            placeholder={operateurChoix.placeholder}
                            register={register}
                            inputBg="#D9D2D2"
                            type="text"
                            iStyle={{width:"10em",border:"1px solid #d9d2d2",
                               borderRadius:"15px", marginTop:"0em",overflow:"hidden"}}

                          />
                          {errors.address && <div className="text-muted font-italic" style={{marginBottom:"2em"}}>

                             <span className="text-danger font-weight-700">{errors.address.message}</span>

                         </div>}
                       <Row>
                       { successmsg && ( <div className="text-muted font-italic">

                  <span className="text-success font-weight-700">{successmsg}</span>

              </div>)}
              { errormsg && ( <div className="text-muted font-italic">

                  <span className="text-danger font-weight-700">{errormsg}</span>

              </div>) }
                          <SButton type="submit" disabled={loading} style={{margin:"auto",marginTop:"1em"}}> {loading ? <Spinner size="sm" color="#cc993a" />: "Confirmer"}</SButton>
                       </Row>
    </Form>
    </>
  )
}

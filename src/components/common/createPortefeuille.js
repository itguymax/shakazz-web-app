import React from 'react'
import {Global,css} from "@emotion/react"
import styled from '@emotion/styled'
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
export default function CreatePortefeuille({ addPossa, selectpossatype, successmsg, errormsg,loading }) {
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
      }
    `}
    />
      <Form className="createPortefeuille"
      onSubmit={handleSubmit( addPossa)}>
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
                          options={["btc","orange","mtn","carte"]}
                          defaultOption="btc"
                          onSelect={selectpossatype}
                          placeholder="type de portefeuille"
                          register={register}
                          iStyle={{width:"10em",
                             backgroundColor:"#D9D2D2 !important",width:"10em !important",
                             borderRadius:"15px", marginTop:"-1.3em",overflow:"hidden"}}
                          inputBg="#fff"
                          type="text"
                          dd
                        />
                        <Sinput
                          label="Nom"
                          inline
                          name="nom"
                          placeholder="Projet d'études"
                          register={register}
                          iStyle={{width:"10em",
                             backgroundColor:"#d9d2d2 !important",width:"30em !important",border:"1px solid #d9d2d2",
                             borderRadius:"15px", marginTop:"-1.3em",overflow:"hidden"}}
                          inputBg="#fff"
                          type="text"
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
    </Form></>
  )
}

import React from 'react';
import { Button, Container, Row, Col,Table, Jumbotron } from "reactstrap";
import {css} from "@emotion/react";
import config from "../config"
const PlanTable = ()=>{
  return (
				  <Table responsive  css={css`
                  *{
                    color:#333;
                  } 
                 p, h1,h2,h3,h4,h5{
                  line-height:none;
                }
                h4, .table td{
                  margin-bottom:-10px;
                  margin-top:5px;
                }
                 
          `} >
				    <thead>
				      <tr>
				        <th></th>
				        <th>Mensuel</th>
				        <th>Semi-annuel</th>
				        <th>Annuel</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td>Après 360 Jrs</td>
				        <td>
				        	<h5 className="l">Min <span>100$</span></h5>
				        	<h5 className="l">Max <span>illimité</span></h5>
                  <p>RECOMPENSE <br/> 1 MOIS</p>
				        	<span>La liquidité est débloquée au terme <br/> des 360 jours après l'ouverture et <br/> création du vault.</span>
                  <h4>7,5%</h4>
                </td>
				        <td>
                  <h5 className="l">Min <span>100$</span></h5>
				        	<h5 className="l">Max <span>illimité</span></h5>
                  <p>RECOMPENSE <br/> 6 MOIS</p>
				        	<span>La liquidité est débloquée au terme <br/> des 720* jours après l'ouverture et <br/> création du vault</span>
                  <h4>51%</h4>
				        </td>
				        <td>
				        	<h5 className="l">Min <span>100$</span></h5>
				        	<h5 className="l">Max <span>illimité</span></h5>
                  <p>RECOMPENSE <br/> 12 MOIS</p>
				        	<span>La liquidité est débloquée au terme <br/>des 1800* jours après l'ouverture et <br/> création du vault</span>
                  <h4>114%</h4>
				        </td>
				      </tr>
				      <tr>
				        <td>Après 720 Jrs</td>
				        <td><h4>8,5%</h4></td>
				        <td><h4>57%</h4></td>
				        <td><h4>X</h4></td>				  
              </tr>
				      <tr>
				        <td>Après 1080 Jrs</td>
				        <td><h4>X</h4></td>
				        <td><h4>63%</h4></td>
				        <td><h4>132%</h4></td>
				      </tr>
				      <tr>
				        <td>Après 1800 Jrs</td>
				        <td><h4>X</h4></td>
				        <td><h4>X</h4></td>
				        <td><h4>144%</h4></td>				      
				      </tr>
				      <tr>
				        <td>
                  <h2>Durée maximale</h2>
                  <span>Période maximale après laquelle les <br/> fonds peuvent être disponibles.</span>
                </td>
				        <td>
                    <h1>720 Jours</h1>
                   
                </td>
				        <td>
                  <h1>1080 Jours</h1>
                
                </td>
				        <td>
                  <h1>1800 Jours</h1>
                  
                </td>
				      </tr>
              <tr>
                <td className="h"></td>
                <td className="h"> <a  href={config.preInscriptionLink}  target="_blank" style={{ background:'#cc9933 0% 0% no-repeat padding-box', cursor:'pointer', width:"200px", textAlign:"center", padding:'10px 45px 10px 45px', borderRadius:'0px',  font: 'normal normal normal 16px/14px Ubuntu', color:'#fff', marginBottom: "20px"}}>Souscrire</a></td>
                <td className="h">  <a href={config.preInscriptionLink}  target="_blank" style={{ background: '#cc9933 0% 0% no-repeat padding-box', cursor:'pointer', width:"100%", textAlign:"center", padding:'10px 45px 10px 45px', borderRadius:'0px',  font: 'normal normal normal 16px/14px Ubuntu', color:'#fff', marginBottom: "20px"}}>Souscrire</a></td>
                <td className="h"><a href={config.preInscriptionLink}  target="_blank" style={{ background: '#cc9933 0% 0% no-repeat padding-box', cursor:'pointer', width:"200px", textAlign:"center", padding:'10px 45px 10px 45px', borderRadius:'0px',  font: 'normal normal normal 16px/14px Ubuntu', color:'#fff', marginBottom: "20px"}}>Souscrire</a></td>
              </tr>
				    </tbody>
				  </Table>
  )
}

export default PlanTable;
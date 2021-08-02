import React from 'react'
import { Button, Container, Row, Col,Table, Jumbotron } from "reactstrap";
import {css} from "@emotion/react";
export default function SimulationTable({periode,pool,capital,taux}) {
  // let taux = 7.5;
  
  // console.log("taux", pool)
  // if(periode===360){
  //   taux = pool.taux360;
  //   console.log("taux", pool.taux360)
  // } else if (periode===720){
  //   taux = pool.taux720;
  // } else if (periode===1080){
  //   taux = pool.taux1080;
  // } else{
  //   taux = pool.taux1800;
  // }
  let recompense = (parseInt(capital) * (parseFloat(taux)/100)).toFixed(2);
  let interet = ((parseInt(capital) * (parseFloat(taux)/100)) * (periode / pool.frequence)).toFixed(2);
  let resume =  parseInt(capital) + parseFloat(interet);
  console.log("polllll", pool);
  return (
   <Table responsive  css={css` `} >
				    <thead style={{backgroundColor: "#e2e2e2"}}>
				      <tr>
				        <th>periode</th>
				        <th>{`Récompense` + " " + pool?.name?.split(" ")[1]}</th>
				        <th>Total</th>
				        <th>Total + capital</th>
				      </tr>
				    </thead>
				    <tbody>
              <tr>
				        <td>{`${periode} Jours`}</td>
				        <td>{recompense}</td>
				        <td>{ interet }</td>
				        <td>{resume}</td>				      
				      </tr>
				    </tbody>
				  </Table>
  )
}

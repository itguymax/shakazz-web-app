import React from 'react'
import { Button, Container, Row, Col,Table, Jumbotron } from "reactstrap";
import { FlatButton } from './common/SButton';
import Image from "next/image";
export default function PopulationTable({popData}) {
  return (
     <div>
       <FlatButton />
       <Table responsive  css={css`      
          `} >
				    <thead style={{backgroundColor: "#e2e2e2"}}>
				      <tr>
				        <th><h2>Membres</h2></th>
				        <th><h2>Pays</h2></th>
				        <th><h2>Numéro de téléphone</h2></th>
				        <th><h2>Grade</h2></th>
                <th><h2>Chiffre d'affaire</h2></th>
				      </tr>
				    </thead>
				    <tbody>
              {
                popData.map( (item, key)=> {
                    return <tr>
				        	<td> <Image height={40} width={40} src={item.avatarUrl} priority={true}/> </td>		
                  <td> <Image height={25} width={40} src={item.address.country.flag} priority={true}/> </td>	 
                  <td> <h3 style={{fontWeight:"100", color:"#444"}}>{item.address.country.indicatif + " " + item.phone}</h3> </td> 
                  <td> <h1 style={{fontWeight:"100", color:"#444"}}>{item.grade}</h1> </td>  
                   <td> <h1>{item.weeklyTurnOver}</h1></td>    
				      </tr>
                })
              }
				    </tbody>
				  </Table>
     </div>
  )
}

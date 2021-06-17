import React from 'react'
import { Button, Container, Row, Col,Table, Jumbotron } from "reactstrap";
import { FlatButton } from './common/SButton';
import Image from "next/image";
export default function PopulationTable({popData}) {
   console.log("Pop data", popData);
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
             { popData.length < 1 ?
               <div> No children</div> : <>
                  {
                popData.map( (item, key)=> {
                  console.log("hgghghhgghhg",item);
                    return <tr>
				        	<td > <div style={{display:"flex", flexDirection:"row", alignItems: "center"}}><Image height={40} width={40} src={item?.avatarUrl || "/assets/img/def-user-profile.png"} priority={true}/> <span className="ml-2">{item?.userName}</span> </div> </td>		
                  <td> <Image height={25} width={40} src={item.address?.country?.flag || "/assets/img/country-flags/cameroun.png"} priority={true}/> </td>	 
                  <td> <h3 style={{fontWeight:"100", color:"#444"}}>{ (item?.address?.country?.indicatif && item?.phone)? item?.address?.country?.indicatif.concat("",item?.phone) : "pas de numero"}</h3> </td> 
                  <td> <h1 style={{fontWeight:"100", color:"#444"}}>{item?.grade || "starter"}</h1> </td>  
                   <td> <h1>{item?.turnover || "0"}</h1></td>    
				      </tr>
                })
              }
               </>
             }
              
				    </tbody>
				  </Table>
     </div>
  )
}

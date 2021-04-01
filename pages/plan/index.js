import React from 'react'
import Public from '../../layouts/Public';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Table from 'react-bootstrap/Table'
import { Button, Container, Row, Col } from "reactstrap";
function Plan() {
  return (
    <div>
      <div className="plans_page_section_image">
		    <Jumbotron className="plans_page_section_image_jombotron">
		        <h1>Plan or something</h1>
		        <p>
		          Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil
		        </p>
		    </Jumbotron>
	    </div>
	    <div className="plans_page_section_plan">
	    	<h1>Plans</h1>
	    	<div>
				  <Table responsive="sm" className="plans_page_section_plan_tables">
				    <thead>
				      <tr>
				        <th></th>
				        <th><h1>MRP</h1></th>
				        <th><h1>MRP</h1></th>
				        <th><h1>MRP</h1></th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td><p>Suspendisse pretium magna</p></td>
				        <td>
				        	<h1>4,5% à 7,5%</h1>
				        	<h2>RECOMPENSE 1 MOIS</h2>
				        	<span>La liquidité est débloquée au terme des <br/>360 jours après l'ouverture et création du vault.</span>
				        </td>
				        <td>
				        	<h1>4,5% à 7,5%</h1>
				        	<h2>RECOMPENSE 1 MOIS</h2>
				        	<span>La liquidité est débloquée au terme des <br/>360 jours après l'ouverture et création du vault.</span>
				        </td>
				        <td>
				        	<h1>4,5% à 7,5%</h1>
				        	<h2>RECOMPENSE 1 MOIS</h2>
				        	<span>La liquidité est débloquée au terme des <br/>360 jours après l'ouverture et création du vault.</span>
				        </td>
				      </tr>
				      <tr>
				        <td><p>Suspendisse pretium magna</p></td>
				        <td></td>
				        <td></td>
				        <td></td>				      </tr>
				      <tr>
				        <td><p>Suspendisse pretium magna</p></td>
				        <td></td>
				        <td></td>
				        <td></td>
				      </tr>
				      <tr>
				        <td><p>Suspendisse pretium magna</p></td>
				        <td></td>
				        <td></td>
				        <td></td>				      
				       </tr>
				      <tr>
				        <td><p><strong>Suspendisse pretium magna</strong></p></td>
				        <td><h1>10000</h1></td>
				        <td><h1>10000</h1></td>
				        <td><h1>10000</h1></td>
				      </tr>
				      <tr>
				        <td><p>Suspendisse pretium magna</p></td>
				        <td></td>
				        <td></td>
				        <td></td>
				      </tr>
				      <tr>
				        <td><p>Suspendisse pretium magna</p></td>
				        <td></td>
				        <td></td>
				        <td></td>
				      </tr>
				      <tr>
				        <td><p>Suspendisse pretium magna</p></td>
				        <td><Button variant="primary">Bouton</Button></td>
				        <td><Button variant="primary">Bouton</Button></td>
				        <td><Button variant="primary">Bouton</Button></td>
				      </tr>
				    </tbody>
				  </Table>
				</div>
	    </div>
    </div>
  )
}

Plan.layout = Public;
export default Plan;
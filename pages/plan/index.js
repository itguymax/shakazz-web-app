import React from 'react';
import Public from '../../src/layouts/Public';
import Head from 'next/head';
import config from "../../src/config";
import { Button, Container, Row, Col,Table, Jumbotron } from "reactstrap";

function Plan() {
  return (
    <>
     <Head>
        {/* META tags */}
        <title>Nos plans | Shakazz</title>
        <meta
          name="description"
          content="Découvrez  et profitez de la puissance du crowdlending."
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/plan`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nos plans | Shakazz" />
        <meta
          property="og:description"
          content="Découvrez  et profitez de la puissance du crowdlending."
        />
        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta
          property="og:url"
          content={`${config.canonicalLink}/plan`}
        />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webpage" />
        <meta
          name="twitter:description"
          content="Découvrez  et profitez de la puissance du crowdlending."
        />
      </Head>
    <div className="plans_page_section_image">
		    <Jumbotron className="plans_page_section_image_jombotron">
		        <h1>Découvrez  nos plans</h1>
		        <p>
		          Profitez de plus de cinq ans d’expérience sur les marchés financiers,  au travers des différents pools que nous mettons à  votre disposition.
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
    </>
  )
}

Plan.layout = Public;
export default Plan;
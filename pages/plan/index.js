import React from 'react';
import Public from '../../src/layouts/Public';
import Head from 'next/head';
import config from "../../src/config";
import { Button, Container, Row, Col,Table, Jumbotron } from "reactstrap";
import PreInscription from "../../src/components/pre_inscription";
import PlanTable from "../../src/components/planTable";
import {css} from "@emotion/react";
import {device } from "../../src/lib/device";
import { useQuery} from "react-query"
function Plan() {
const requestOptions = {
  method: 'GET',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '754ceace-aaaa-4f92-ac96-9e5ab6f1a966',
    'Access-Control-Allow-Origin': '*'
  },
  json: true,
  gzip: true
};
  const fetchExchange = async () => {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',requestOptions);
    const data = await response.json();
    return data;
  }

  const {data} = useQuery("crypto", fetchExchange);
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
      <Container fluid className="d-flex  mt-5 mb-7 justify-content-center align-items-center" style={{flexDirection:"column"}}>
				<Row css={css`
						width:80%;
						@media (max-width: 600px){
							width: 90%;
						}
            @media ${device.tablet}{
              width: 95%;
            }
				`}>
					<h1 className="mb-2" style={{fontSize:"30px", color:"#333"}}>Plans</h1>
					<PlanTable/>
				</Row>
			</Container>
			<PreInscription bleu/>
    </>
  )
}

Plan.layout = Public;
export default Plan;
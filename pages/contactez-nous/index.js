import React from 'react'
import Public from '../../src/layouts/Public';
import { CardBody, Container,Row, Col, Card} from 'reactstrap';
import ContactForm from '../../src/components/forms/ContactForm'
import ContactHero from '../../src/sections/contactHero'
import Head from "next/head"
import { css } from "@emotion/react"
import config from '../../src/config'
import { device, size } from '../../src/lib/device';
import PreInscription from "../../src/components/pre_inscription";
 function ContactezNous() {
  return (
     <>
     <Head>
        {/* META tags */}
        <title>Contactez nous | Shakazz</title>
        <meta
          name="description"
          content="Shakazz contact page description"
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/contactez-nous`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A propos | Shakazz" />
        <meta
          property="og:description"
          content="Contactez nos équipes"
        />
        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta
          property="og:url"
          content={`${config.canonicalLink}/contactez-nous`}
        />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webpage" />
        <meta
          name="twitter:description"
          content="Contactez nos équipes"
        />
      </Head>
     <ContactHero/>
     <Container className="mt--7" fluid>
      <Row className="justify-content-center mb-4">
        <Card  
          css={css`
                    width: 80%;
                      @media ${device.smMobileMax}{
                        width:95%;
                        
                      }
                `}
        className="shadow p-sm-2 pt-xl-5 pb-xl-5">
          <CardBody className="row">
              <div className="col">
                <h1 style={{color: "#121212"}} 
                css={css`
                    font: "normal normal bold 48px/5px Ubuntu";
                      @media ${device.smMobileMax}{
                        font-size: 20px;
                        font-weight: bold;

                      }
                `}
                >Contactez nous</h1>
                <h4 className="mt-4" style={{color:"#A1A1A1", fontWeight: "300"}}>Des questions ? Des propositions ? Contactez-nous</h4>
                <div className="mt-xl-5 mt-md-1">
                  Quartier Fouda, rue des généraux <br/>
                  Yaoundé, Cameroun <br/>
                  contact@shakazz.com
                </div>
              </div>
              <Col sm="5">

                <ContactForm/>

              </Col>
          </CardBody>
        </Card>
      </Row>
      <PreInscription white/>
     </Container>
    </>
  )
}

ContactezNous.layout = Public;
export default ContactezNous;
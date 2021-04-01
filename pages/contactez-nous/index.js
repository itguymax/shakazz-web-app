import React from 'react'
import Public from '../../src/layouts/Public';
import { CardBody, Container,Row, Col, Card} from 'reactstrap';
import ContactForm from '../../src/components/forms/ContactForm'
import ContactHero from '../../src/sections/contactHero'
import Head from "next/head"
import config from '../../src/config'
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
          content="Shakazz contact page description"
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
          content="Shakazz contact page description"
        />
      </Head>
     <ContactHero/>
     <Container className="mt--7" fluid>
      <Row className="justify-content-center mb-9">
        <Card className="shadow p-4 pt-xl-5 pb-xl-5" style={{width: "80%"}}>
          <CardBody className="row">
              <div className="col">
                <h1 style={{font: "normal normal bold 48px/5px Ubuntu", color: "#121212"}}>Get in Touch</h1>
                <h4 className="mt-4" style={{color:"#A1A1A1", fontWeight: "300"}}>Lorem ipsum dolor sit amet consectetur adipiscing elit</h4>
                <div className="mt-5">
                  En face Afriland first bank Mvog-mbi <br/>
                  Yaoundé, Cameroun <br/>
                  +237 691 273 540<br/>
                  shakazztrading@gmail.com
                </div>
              </div>
              <Col>
                <ContactForm/>
              </Col>
          </CardBody>
        </Card>
      </Row>
     </Container>
    </>
  )
}

ContactezNous.layout = Public;
export default ContactezNous;
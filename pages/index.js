import React, { Component } from "react";
import Router from "next/router"; 
import Public from '../src/layouts/Public';
import UserHeader from '../src/components/Headers/UserHeader';
import SEO from '../src/components/Seo';
import Head from 'next/head';
import config from '../src/config'
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'next/image'
import { Button, Container, Row, Col } from "reactstrap";
import NousChoisir from "../src/sections/NousChoisir";
import NotreMarche from "../src/sections/NotreMarche";
import Confiance from "../src/sections/Confiance";
import Plans from "../src/sections/Plans";
import Link from "next/link";
import PreInscription from "../src/components/pre_inscription";
import { css } from "@emotion/react";
import { device } from "../src/lib/device";



function Index() {
  // React.useEffect(() => {
  //   Router.push("/portal/dashboard");
  // });
  const gotoService = () => {
    Router.push("/services")
  }
  return <>
      <Head>
          <title>Shakazz | Elargissez vos opportunités d’affaires</title>
        <meta
          name="description"
          content="Shakazz vous propose des pools de liquidités adaptés à vos besoins."
        />
        <link rel="canonical" href={`${config.canonicalLink}`}/>

        <meta property="og:locale" content="fr" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shakazz | Elargissez vos opportunités d’affaires"
        />

        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta property="og:url" content={`${config.canonicalLink}`} />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website" />
        <meta
          name="twitter:description"
          content="Shakazz vous propose des pools de liquidités adaptés à vos besoins"
        />
      </Head>
      <div>
    <Carousel className="home_page_section_shakazz" 
        css={css` 
             
              .carousel-indicators .active {
                background-color: #CC9933;
                opacity: 1;
              }
              @media ${device.smMobileMax}{
                .carousel-control-prev{
                left: -20px;
              }
              .carousel-control-next{
                right: -20px;
              }
              }
        `}
    > 
      <Carousel.Item>
          <Jumbotron className="home_page_section_shakazz_jumbotron mb-7" css={css`
          @media ${device.smMobileMax}{
            margin-top: -1px !important;
          }
      `}>
            <h1>Découvrez  et profitez de la puissance du crowdlending.</h1>
            <p> 
              Shakazz vous propose de participer à des  pools de liquidités avec des récompenses échelonnées sur l’année.  Profitez-en et choisissez l’échéance qui vous convient dans nos plans.
            </p>
            <p>
              <Button  onClick={gotoService} variant="primary">En savoir plus</Button>
            </p>
          </Jumbotron>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000} >
        <Jumbotron className="home_page_section_shakazz_jumbotron" >
            <h1>Faites croître votre patrimoine</h1>
            <p>
              Avec Shakazz, construisez une relation forte de confiance dans un système qui récompense efficacement ceux qui l’alimente. 
            </p>
            <p>
              <Button onClick={gotoService} variant="primary">En savoir plus</Button>
            </p>
          </Jumbotron>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
         <Jumbotron className="home_page_section_shakazz_jumbotron">
            <h1>Elargissez vos opportunités d’affaire.</h1>
            <p>
              Shakazz est une plateforme Africaine qui vous propose des solutions financières adaptées à votre environnement socioéconomique et au confort financier de votre portefeuille.
            </p>
            <p>
              <Button onClick={gotoService} variant="primary">En savoir plus</Button>
            </p>
          </Jumbotron>
      </Carousel.Item>
       <Carousel.Item interval={10000}>
         <Jumbotron className="home_page_section_shakazz_jumbotron">
            <h1>Rejoignez le mouvement.</h1>
            <p>
              Parce que nous croyons en l’Afrique, en son potentiel, plus encore nous participons à son développement à travers la blockchain et au crowdlending.
            </p>
            <p>
              <Button onClick={gotoService} variant="primary">En savoir plus</Button>
            </p>
          </Jumbotron>
      </Carousel.Item>
  </Carousel>
      <Jumbotron className="home_page_section_presentation">
        <h1>Présentation de Shakazz</h1>
        <p>
         Shakazz est une plateforme de solution financières par le biais de crypto-monnaies.
Nous implémentons un ensemble de solutions connectées, pour divers clients, grâce aux possibilités nombreuses et
avant-gardistes qu’offrent la blockchain. Il s’agit ainsi du crowdlending et du networking implémentés par nos algorithmes. 
        </p>
        <br/>
        
       <Link href="/about-us">
           <h4> En savoir plus <img className = "home_page_section_presentation_jombotron_icon" src = "/assets/img/icons/arrow white.svg"/> </h4> 
       </Link>

    </Jumbotron>
     <NousChoisir/>
     <NotreMarche/> 
     <Plans/>
     <PreInscription bleu/>    
     
    
      <Confiance/>
       <Container fluid className=" py-6 home_page_section_started">
        <Row className="jutify-content-center">
          <Col xl="6" lg="6"  className="home_page_section_started_col1">
              <iframe  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3.880607,%2011.535363+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="200" height="100" frameBorder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </Col>
          <Col xl="6"  lg="6">
            <Jumbotron className="home_page_section_started_jumbotron">
              <h1>Prêt à commencer ?</h1>
              <p>
                Rejoignez-nous à Yaoundé Cameroun, 
au lieu-dit Quartier Fouda, 
Rue 113
              </p>
              <p>
                <center><Button className="px-5 py-2" onClick={()=> {
                  if(window){
                    window.open(config.preInscriptionLink);
                  }
                }} >Commencez</Button></center>
              </p>
                </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  </>
}

Index.layout = Public;
export default Index;
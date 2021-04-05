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
import PreInscription from "../src/components/pre_inscription"


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
          content="Shakazz vous propose des plans d’investissement adaptés à votre environnement socioéconomique et au confort financier de votre portefeuille."
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
          content="Shakazz vous propose des plans d’investissement adaptés à votre environnement socioéconomique et au confort financier de votre portefeuille."
        />
      </Head>
      <div>
    <Carousel className="home_page_section_shakazz">
      <Carousel.Item>
          <Jumbotron className="home_page_section_shakazz_jumbotron">
            <h1>Découvrez  et profitez de la puissance du crowdlending.</h1>
            <p> 
              Shakazz vous propose de participer à des  pools de liquidités avec des récompenses échelonnées sur l’année.  Profitez-en et choisissez l’échéance qui vous convient dans nos plans.
            </p>
            <p>
              <Button onClick={gotoService} variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <Jumbotron className="home_page_section_shakazz_jumbotron">
            <h1>Faites croître votre patrimoine</h1>
            <p>
              Avec Shakazz, construisez une relation forte de confiance dans un système qui récompense efficacement ceux qui l’alimente. 
            </p>
            <p>
              <Button onClick={gotoService} variant="primary">Learn more</Button>
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
              <Button onClick={gotoService} variant="primary">Learn more</Button>
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
              <Button onClick={gotoService} variant="primary">Learn more</Button>
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
       <div className="home_page_section_started">
        <Row>
          <Col className="home_page_section_started_col1">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="200" height="100" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </Col>
          <Col>
            <Jumbotron className="home_page_section_started_jumbotron">
              <h1>Prêt à commencer ?</h1>
              <p>
                Rejoignez-nous à Yaoundé Cameroun, 
au lieu-dit Quartier Fouda, 
Rue 113
              </p>
              <p>
                <center><Button>Commencez</Button></center>
              </p>
                </Jumbotron>
          </Col>
        </Row>
      </div>
    </div>
  </>
}

Index.layout = Public;
export default Index;
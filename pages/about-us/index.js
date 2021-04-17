import React from 'react'
import Public from '../../src/layouts/Public';
import Head from "next/head";
import config from '../../src/config';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "next/image";
import Jumbotron from 'react-bootstrap/Jumbotron';
import {WeCard } from "../../src/sections/NousChoisir";
import PreInscription from "../../src/components/pre_inscription";
import {device} from '../../src/lib/device';
import {Global,css} from '@emotion/react';


const TeamCard = ({nom, poste, img}) => {
	return (
		
				<Col  xl="4" lg="4" md="6"  className="mb-4" >
							<Card  style={{
         
          backgroundImage: "url(" + `${img}` + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
					// overflow:"hidden",
					position: "relative",
        }}  css={css`
							 	height: 450px !important;
							@media ${device.tablet}{
									height: 800px !important;

							}
							@media ${device.laptop}{
								height: 450px !important;
							}
							@media ${device.smMobileMax}{
									height: 450px !important;

							}
								@media ${device.smMobile}{
									height: 450px !important;

							}
							
				`}>
								<div className="ml-3" style={{position: "absolute", bottom:10}}>
									<h1 style={{color: "#fff", fontWeight:"bold"}}>{nom}</h1>
									<h3 style={{color: "#cc9933", fontWeight:"bold"}}>{poste}</h3>
								</div>
							</Card>
						</Col>
	)
}
 function AboutUs() {
  return (
    <>
      <Head>
        {/* META tags */}
        <title>Qui sommes-nous ? | Shakazz</title>
        <meta
          name="description"
          content="Plateforme d’investissement numérique africaine."
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/about-us`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Qui sommes-nous ? | Shakazz" />
        <meta
          property="og:description"
          content="Plateforme d’investissement numérique africaine."
        />
        <meta
          property="og:image"
					
          content={`${config.seoShakazzLogo}`}
        />
        <meta
          property="og:url"
          content={`${config.canonicalLink}/about-us`}
        />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webpage" />
        <meta
          name="twitter:description"
          content="Plateforme d’investissement numérique africaine."
        />
      </Head>
      <div >
			<div className="aboutus_page_section_image">
				<Jumbotron className="aboutus_page_section_image_jombotron" >
						<h1>Qu'est ce que</h1>
						<h2>Shakazz?</h2>
						<p>
							Découvrez la nouvelle plateforme de solution financière africaine.
						</p>
				</Jumbotron>
			</div>
    <div style={{backgroundColor: "#fff"}} >
	    <Container fluid className="d-flex justify-content-center py-6">
					
					<Row style={{width: "80%"}}>
						<div css={css`
							 	
							@media ${device.tablet}{
									

							}
							@media ${device.laptop}{
								
							}
							@media ${device.smMobileMax}{
							 
							}
								@media ${device.smMobile}{
									

							}
							
				`}>
						<h2 className="text-center py-2" style={{color: "#333"}}>Shakazz est une plateforme de solutions financières par le biais des crypto-monnaies.</h2>
						<p className="text-center px-xl-6 px-sm-2 " >Shakazz implémente un ensemble de solutions connectées, pour divers clients, grâce
aux possibilités nombreuses et avant-gardistes qu’offrent la blockchain. Il s’agit ainsi du
crowdlending et du networking qui implémentent la gestion-acquisition de produits
numériques.</p>
					</div>
					<Row className="mt-5 pb-3 px-lg-0">
							<WeCard title="Sécurité" subtitle="Un service de garde renforcé par une technologie de pointe et l’expertise de nos différents partenaires." imageUrl="/assets/img/Sécurité.svg"/>
							<WeCard title="Croissance" subtitle="Nos stratégies de diversification boostent votre patrimoine." imageUrl="/assets/img/Croissance.svg"/>
							<WeCard title="Simplicité" subtitle="Nous vous accompagnons à chaque étape de votre parcours." imageUrl="/assets/img/Simplicité.svg"/>
					</Row>
				</Row>
			</Container>
    </div>
		 
     <div style={{backgroundColor: "#cc9933"}}>
    	<Container fluid className="d-flex justify-content-center align-items-center py-6">
		  <Row style={{width: "80%"}} >
		    <Col sm={4} className="mt-xl-4" css={css`
				   @media ${device.smMobileMax}{
						 margin-top: -50px !important;
					 }
				`}>
		    	  <Image
				    width={400}
				    height={400}
				    src="/assets/img/vision.svg"
				    alt="Vision shakazz"
				  />
		    </Col>
		    <Col sm={8} className="mt-xl-7 mt-lg-4">
				<h1  className="mt-xl-2 mb-xl-3" style={{color:"#fff", fontSize: "2.5em"}}>Notre Vision</h1>
		    	<p style={{color:"#fff"}} >Shakazz souhaite, avec sa communauté, se positionner comme le premier
moteur de la finance 2.0 en Afrique d’ici 2035. C’est un avenir libéré des freins
économiques que nous souhaitons construire afin de voir le continent grandir.</p>
		    	
		    
		    </Col>
		  </Row>
		</Container>
    </div>
    <div style={{backgroundColor: "#24422F"}}>
    	<Container fluid className="d-flex justify-content-center py-6">
					<Row style={{width: "80%"}}>
							<Col sm={8} className="mt-xl-7 mt-lg-4">
								<h1 className="mt-xl-2 mb-xl-3"  style={{color:"#fff", fontSize: "2.5em"}}>Notre Mission</h1>
								<p style={{color:"#fff"}}>La mission de Shakazz est de permettre aux Africains de faire évoluer leurs finances en mettant à leur disposition un panel de solutions dédiées et adaptées à tout type
			de besoins.</p>
							</Col>
							<Col sm={4} className="mt-xl-4">
								<Image
									width={500}
									height={500}
									src="/assets/img/mission.svg"
									alt="Mission Shakazz"
								/>
							</Col>
					</Row>
		  </Container>
    </div>
		 <PreInscription/>
     <div style={{width:"100%"}}  className="mb-8 mt-5">
      <Container fluid className=" d-flex justify-content-center">
					<Row style={{width: "80%"}} css={css`
				   @media ${device.smMobileMax}{
						 width: 90%;
					 }
				`}>
						<Col  xl="4" lg="4" md="6" className="mb-4" css={css`
										h3{

										}
										h1{

										}
										h5{

										}
							@media ${device.tablet}{
											h3 {
													font-size: 20px;
											}
											h1 {

											}
											h5 {
													font-size: 15px;
											}

							}

						`}>
								<Card  css={css`
							 	height: 450px !important;
							@media ${device.tablet}{
									height: 800px !important;

							}
							@media ${device.laptop}{
								height: 450px !important;
							}
							@media ${device.smMobileMax}{
									height: 450px !important;

							}
							@media ${device.smMobile}{
									height: 450px !important;

							}
							
				`} className=" d-flex justify-content-center align-items-center" style={{flexDirection:"column",overflow:"hidden", height:"400px"}}>
								<Card.Body className="mt-5"  className=" d-flex justify-content-center align-items-center" style={{flexDirection:"column"}}>
									<h3 style={{color: "#6f6f6f", fontWeight:"300px"}}>Rencontrez</h3>
									<h1 className="mb-lg-3" style={{color: "#333"}}>Notre équipe</h1>
									<h5 style={{color: "#6f6f6f", fontWeight:"200px"}} className="text-center">Notre équipe jeune et dévouée désireuse d’impacter son environnement, de concourir à son bien-être.</h5>
								</Card.Body>
							</Card>
						</Col>
				    <TeamCard nom="Yvan FOTSO" poste="CEO" img="/assets/img/photoequipe/yvan.png"/>
						<TeamCard nom="Maximilien TOUMI WANTCHO" poste="Responsable IT" img="/assets/img/photoequipe/toumi.png"/>
						<TeamCard nom="Cyrille FOKA" poste="Analyste financier" img="/assets/img/photoequipe/foka.png"/>
						<TeamCard nom="Alexandre DJENGUE" poste="Directeur Artistique" img="/assets/img/photoequipe/alex.png"/>
						<TeamCard nom="Pierre-Lionel BISSOHONG" poste="Designer" img="/assets/img/photoequipe/bisso.png"/>
						<TeamCard nom="Ludovic FEUTSE" poste="Developpeur web" img="/assets/img/photoequipe/ludo.png"/>
				</Row>
			</Container>
		 </div>
    </div>
  </>
  )
}

AboutUs.layout = Public;

export default AboutUs;
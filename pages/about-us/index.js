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
import Jumbotron from 'react-bootstrap/Jumbotron';
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
      <div>
       <div className="aboutus_page_section_image">
	    <Jumbotron className="aboutus_page_section_image_jombotron">
	        <h1>Qu'est ce que</h1>
	        <h2>Shakazz?</h2>
	        <p>
	          Généralement, on utilise un texte en faux latin.
	        </p>
	    </Jumbotron>
    </div>
    <div className="aboutus_page_section_presentation">
	    <Jumbotron className="aboutus_page_section_presentation_jombotron">
	        <h1>Présentation de Shakazz</h1>
	        <p>
	          Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page contenant ces lignes n'est pas valide et que l'attention du lecteur n'est pas dérangée par le contenu, lui permettant de demeurer concentré sur le seul aspect graphique.
	        </p>
	        <br/>
	        <p>
	          Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page contenant ces lignes n'est pas valide et que l'attention du lecteur n'est pas dérangée par le contenu, lui permettant de demeurer concentré sur le seul aspect graphique.
	        </p>
	    </Jumbotron>
	    <Container className="aboutus_page_section_presentation_jombotron_text">
		  <Row>
		    <Col xs={{ order: 'last' }}>
		    	<h3>Caractéristiques</h3>
		    	<h4>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a</h4>
		    </Col>
		    <Col xs>
		    	<h3>Caractéristiques</h3>
		    	<h4>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a</h4>
		    </Col>
		    <Col xs={{ order: 'first' }}>
		    	<h3>Caractéristiques</h3>
		    	<h4>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a</h4>
		    </Col>
		  </Row>
		</Container>
    </div>
     <div className="aboutus_page_section_vision">
    	<Container>
		  <Row>
		    <Col sm={4}>
		    	  <img
				    width={64}
				    height={64}
				    className="mr-3"
				    src="holder.js/64x64"
				    alt="Generic placeholder"
				  />
		    </Col>
		    <Col sm={8}>
				<h1>Notre mission</h1>
		    	<p>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page contenant ces lignes n'est pas</p>
		    	<p>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page contenant ces lignes n'est pas</p>
		    
		    </Col>
		  </Row>
		</Container>
    </div>
    <div className="aboutus_page_section_mission">
    	<Container>
		  <Row>
		    <Col sm={8}>
		    	<h1>Notre mission</h1>
		    	<p>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page contenant ces lignes n'est pas</p>
		    	<p>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page contenant ces lignes n'est pas</p>
		    </Col>
		    <Col sm={4}>
		    	<img
				    width={64}
				    height={64}
				    className="mr-3"
				    src="holder.js/64x64"
				    alt="Generic placeholder"
				  />
		    </Col>
		  </Row>
		</Container>
    </div>
      <div className="aboutus_page_section_team">
      	<CardDeck>
		  <Card>
		    <Card.Body>
		    	<h3>Rencontrez</h3>
		    	<h1>Notre équipe</h1>
		    	<h5>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum.</h5>
		    </Card.Body>
		  </Card>
		  <Card className="aboutus_page_section_team_div">
		    <div className="aboutus_page_section_team_div_bottom">
		    	<p>Yvan Fotso</p>
		    	<h6>CEO</h6>
		    </div>
		  </Card>
		  <Card className="aboutus_page_section_team_div">
		    <div className="aboutus_page_section_team_div_bottom">
		    	<p>Yvan Fotso</p>
		    	<h6>CEO</h6>
		    </div>
		  </Card>
		</CardDeck>
		</div>
    </div>
  </>
  )
}

AboutUs.layout = Public;

export default AboutUs;
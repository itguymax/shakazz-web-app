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
import Image from 'react-bootstrap/Image';
import { Button, Container, Row, Col } from "reactstrap";

function Index() {
  // React.useEffect(() => {
  //   Router.push("/portal/dashboard");
  // });
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
            <h1>Découvrez et profiter de la puissance du crownlending</h1>
            <p>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <Jumbotron className="home_page_section_shakazz_jumbotron">
            <h1>Découvrez et profiter de la puissance du crownlending</h1>
            <p>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
      <Jumbotron className="home_page_section_shakazz_jumbotron">
            <h1>Découvrez et profiter de la puissance du crownlending</h1>
            <p>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
      <Jumbotron className="home_page_section_presentation">
        <h1>Présentation de Shakazz</h1>
        <p>
          Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page contenant ces lignes n'est pas valide et que l'attention du lecteur n'est pas dérangée par le contenu, lui permettant de demeurer concentré sur le seul aspect graphique.
        </p>
        <br/>
        <a> <strong> More </strong> </a>
        <h4> Find out more <img className = "home_page_section_presentation_jombotron_icon" src = "/assets/img/icons/arrow white.svg"/> </h4> 

    </Jumbotron>
    <div className="home_page_section_whyus">
      <h1>Pourquoi nous choisir?</h1>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Caractéristiques 1</Card.Title>
          </Card.Body>
          <p>
            <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
          </p>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Caractéristiques 1</Card.Title>
          </Card.Body>
          <p>
            <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
          </p>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Caractéristiques 1</Card.Title>
          </Card.Body>
          <p>
            <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
          </p>
        </Card>
      </CardDeck>
      </div>
          <div className="home_page_section_market">
      <h1>Notre marché en un coup d'oeil</h1>
         <CardDeck className="home_page_section_market_carddeck">
          <Card className="home_page_section_market_card">
             <img src="/assets/img/icons/Afrique.svg"/>
              <h1>Afrique</h1>
           
            <p>
             Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été
            </p>
            <br/>
            <h4>En savoir plus<img className="home_page_section_market_jombotron_icon" src="/assets/img/icons/arrow white.svg"/></h4>
          </Card>
          <Card className="home_page_section_market_card">
            <img  src="/assets/img/icons/cryptomonnaie.svg" />
           <h1>Cryptomonnaies</h1>
            <p>
             Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été
            </p>
            <br/>
            <h4> En savoir plus <img className = "home_page_section_market_jombotron_icon" src = "/assets/img/icons/arrow white.svg"/> </h4>
          </Card>
        </CardDeck>
      </div>
       <div className="home_page_section_plans">
      <center><h1>Plans</h1></center>
      <p>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum.</p>
         <CardDeck className="home_page_section_market_carddeck">
          <Card className="home_page_section_market_card">
            <Button>Pool mensuel</Button>
            <section className="home_page_section_plans_div">
            <Card.Body>
              <Card.Title>1 MOIS</Card.Title>
              <p>RECOMPENSES</p>
              <br/>
              <h1>7.5%</h1>
            </Card.Body>
            <p>
              <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
            </p>
            <br/>
            <Button className="home_page_section_plans_buttonlink">Learn more</Button>
            </section>
          </Card>
          <Card className="home_page_section_market_card">
          <Button>Pool semi-annuel</Button>
           <section className="home_page_section_plans_div">
            <Card.Body>
              <Card.Title>6 MOIS</Card.Title>
              <p>RECOMPENSES</p>
              <br/>
              <h1>51%</h1>
            </Card.Body>
            <p>
              <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
            </p>
            <br/>
            <Button className="home_page_section_plans_buttonlink">Learn more</Button>
            </section>
          </Card>
          <Card className="home_page_section_market_card">
          <Button>Pool annuel</Button>
          <section className="home_page_section_plans_div">
            <Card.Body>
              <Card.Title>1 AN</Card.Title>
              <p>RECOMPENSES</p>
              <br/>
              <h1>114%</h1>
            </Card.Body>
            <p>
              <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
            </p>
            <br/>
            <Button className="home_page_section_plans_buttonlink">Learn more</Button>
            </section>
          </Card>
        </CardDeck>
      </div>
      <div className="home_page_section_trust">
      <center><h1>Ils nous font confiance</h1></center>
      <Container className="home_page_section_trust_container">
          <Row>
            <Col xs={5} sm={3}>
              <Image src="/assets/img/brand/jf.png"/>
            </Col>
            <Col xs={5} sm={3}>
              <Image src="/assets/img/brand/umdeny-logo-XL.png"/>
            </Col>
            <Col xs={5} sm={3}>
              <Image src="/assets/img/brand/UTHAN_GO 3.png"/>
            </Col>
            <Col xs={5} sm={3}>
              <Image src="/assets/img/brand/hannibal.png"/>
            </Col>
          </Row>
        </Container>
      </div>
       <div className="home_page_section_started">
        <Row>
          <Col className="home_page_section_started_col1">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="200" height="100" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </Col>
          <Col>
            <Jumbotron className="home_page_section_started_jumbotron">
              <h1>Ready to started?</h1>
              <p>
                Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum.
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
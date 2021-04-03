import React, {useState} from 'react';
import Public from '../../src/layouts/Public';
import Head from "next/head";
import config from "../../src/config";
import { TabContent, TabPane, Nav, CardImg, CardBody, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Media } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import Image from 'next/image'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

function  Services  ( )  {
  //Tabs
	  const [activeTab, setActiveTab] = useState('1');
	  const toggle = tab => {
	    if(activeTab !== tab) setActiveTab(tab);
	  }
	//
	//Slider
	const items = [
		  {
		    id: 1,
		    altText: 'Slide 1',
		    caption: 'Slide 1'
		  },
		  {
		    id: 2,
		    altText: 'Slide 2',
		    caption: 'Slide 2'
		  },
		  {
		    id: 3,
		    altText: 'Slide 3',
		    caption: 'Slide 3'
		  }
		];
		const items3 = [
		  {
		    id: 1,
		    altText: 'Slide 1',
		    caption: 'Slide 1'
		  },
		  {
		    id: 2,
		    altText: 'Slide 2',
		    caption: 'Slide 2'
		  },
		  {
		    id: 3,
		    altText: 'Slide 3',
		    caption: 'Slide 3'
		  }
		];
	  const [activeIndex, setActiveIndex] = useState(0);
	  const [animating, setAnimating] = useState(false);

	  const next = () => {
	    if (animating) return;
	    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
	    setActiveIndex(nextIndex);
	  }

	  const previous = () => {
	    if (animating) return;
	    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
	    setActiveIndex(nextIndex);
	  }

	  const goToIndex = (newIndex) => {
	    if (animating) return;
	    setActiveIndex(newIndex);
	  }

	  const slides = items.map((item) => {
	    return (
	      <CarouselItem
	        className="services_page_section_presentation_caroussel"
	        tag="div"
	        key={item.id}
	        onExiting={() => setAnimating(true)}
	        onExited={() => setAnimating(false)}
	      >
	      	  <Row>
		        <Col xs="6">
		        	<Jumbotron fluid className="services_page_section_presentation_jombotron">
				        <Container fluid>
				          <h1>Participer au pool de liquidité</h1>
				          <p className="lead">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil</p>
				          <p className="lead">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil</p>
				          <h4>LEARN MORE<img className="services_page_section_networking_jombotron_icon" src="/assets/img/icons/arrow dark.svg"/></h4>
				        </Container>
				      </Jumbotron>
		        </Col>
		        <Col xs="6">
		        	<Jumbotron fluid className="services_page_section_presentation_jombotron">
				        <Container fluid>
				          <img src="/assets/img/crowdlending.png"/>
				        </Container>
				      </Jumbotron>
		        </Col>
		      </Row>
	      </CarouselItem>
	    );
	  });
	  const slides2 = items.map((item) => {
	    return (
	      <CarouselItem
	      className="services_page_section_networking_caroussel"
	        tag="div"
	        key={item.id}
	        onExiting={() => setAnimating(true)}
	        onExited={() => setAnimating(false)}
	      >
	      	  <Row>
		        <Col xs="6">
		        	<Jumbotron fluid className="services_page_section_networking_jombotron">
				        <Container fluid>
				          <h1>Participer au pool de liquidité</h1>
				          <p className="lead">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil</p>
				          <p className="lead">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil</p>
				          <h4>LEARN MORE<img className="services_page_section_networking_jombotron_icon" src="/assets/img/icons/arrow dark.svg"/></h4>
				        </Container>
				      </Jumbotron>
		        </Col>
		        <Col xs="6">
		        	<Jumbotron fluid className="services_page_section_networking_jombotron">
				        <Container fluid>
				          <img src="/assets/img/networking.png"/>
				        </Container>
				      </Jumbotron>
		        </Col>
		      </Row>
	      </CarouselItem>
	    );
	  });
	  const slides3 = items3.map((item) => {
	    return (
	      <CarouselItem
	      	className="services_page_section_partenaires_caroussel"
	        tag="div"
	        key={item.id}
	        onExiting={() => setAnimating(true)}
	        onExited={() => setAnimating(false)}
	      >
	      	  <Row className="services_page_section_partenaires_row">
		        <Col xs="6" className="services_page_section_partenaires_col">
		        	<Card>
				        <CardBody>
				          <h2>Umdeny Logo</h2><h6>Visiter<span> &gt;</span></h6>
				          <h4>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou</h4>
				          <Row className="services_page_section_partenaires_row2">
		        				<Col xs="6">
		        					<h3>Secteur activité</h3>
		        			  	</Col>
		        			  	<Col xs="6">
		        			  		<Image className="services_page_section_partenaires_row_image"
								        src="/assets/img/brand/umdeny-logo-XL.png"
								        alt=""
								        width={280}
								        height={200}
								      />
		        			  	</Col>
		        			  </Row>
				        </CardBody>
				      </Card>
		        </Col>
		        <Col xs="6" className="services_page_section_partenaires_col">
		        	<Card>
				        <CardBody>
				        	<h2>Hannibal Logo</h2><h6>Visiter<span>`{">"}`</span></h6>
				        	<h4>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou</h4>
						      <Row className="services_page_section_partenaires_row2">
		        				<Col xs="6">
		        					<h3>Secteur activité</h3>
		        			  	</Col>
		        			  	<Col xs="6">
		        			  		<Image className="services_page_section_partenaires_row_image"
								        src="/assets/img/brand/Logo-HANNIBAL-CONSULTING-AICNF-Annuaire-Afro-lesiteafro.png"
								        alt=""
								        width={200}
								        height={200}
								      />
		        			  	</Col>
		        			  </Row>
				        </CardBody>
				      </Card>
		        </Col>
		      </Row>
	      </CarouselItem>
	    );
	  });
	//
  return (
    <>
    <Head>
        {/* META tags */}
        <title>Nos services | Shakazz</title>
        <meta
          name="description"
          content="Formations – investissements – informations"
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/services`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nos Services | Shakazz" />
        <meta
          property="og:description"
          content="Formations – investissements – informations"
        />
        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta
          property="og:url"
          content={`${config.canonicalLink}/services`}
        />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webpage" />
        <meta
          name="twitter:description"
          content="Formations – investissements – informations"
        />
      </Head>

    <div>
      	<div className="services_page_section_image">
	    </div>
	    <div className="services_page_section_presentation">
	    	<h1>Présentation Crowndlending</h1>
		      <Nav tabs>
			        <NavItem className="services_page_section_presentation_tab">
			          <NavLink
			            className={classnames({ active: activeTab === '1' })}
			            onClick={() => { toggle('1'); }}
			          >
			            <Row>
				            <Col sm="3">
				            	<img src="/assets/img/icons/icon_non-activated.svg"/>
				            </Col>
				            <Col sm="9">
				            	Participation au pool de liquidité
				            </Col>
				          </Row>
			          </NavLink>
			        </NavItem>
			        <NavItem className="services_page_section_presentation_tab">
			          <NavLink
			            className={classnames({ active: activeTab === '2' })}
			            onClick={() => { toggle('2'); }}
			          >
			            <Row>
				            <Col sm="3">
				            	<img src="/assets/img/icons/icon_non-activated.svg"/>
				            </Col>
				            <Col sm="9">
				            	Gestion, acquisition de produits numériques
				            </Col>
				          </Row>
			          </NavLink>
			         </NavItem> 
		           <NavItem className="services_page_section_presentation_tab">
			          <NavLink
			            className={classnames({ active: activeTab === '3' })}
			            onClick={() => { toggle('3'); }}
			          >
			             <Row>
				            <Col sm="3">
				            	<img src="/assets/img/icons/icon_non-activated.svg"/>
				            </Col>
				            <Col sm="9">
				            	Monitoring et suivie des positions de participation
				            </Col>
				          </Row>
			          </NavLink>
		          </NavItem>
		          <NavItem className="services_page_section_presentation_tab">
			          <NavLink
			            className={classnames({ active: activeTab === '4' })}
			            onClick={() => { toggle('4'); }}
			          >
			            <Row>
				            <Col sm="3">
				            	<img src="/assets/img/icons/icon_non-activated.svg"/>
				            </Col>
				            <Col sm="9">
				            	Partage des intérêts
				            </Col>
				          </Row>
			          </NavLink>
		          </NavItem> 
		           <NavItem className="services_page_section_presentation_tab">
			          <NavLink
			            className={classnames({ active: activeTab === '5' })}
			            onClick={() => { toggle('5'); }}
			          >
			            <Row>
				            <Col sm="3">
				            	<img src="/assets/img/icons/icon_non-activated.svg"/>
				            </Col>
				            <Col sm="9">
				            	Satisfactions des membres de la communauté
				            </Col>
				          </Row>
			          </NavLink>
		        	</NavItem>
		      </Nav>
	      <TabContent activeTab={activeTab}>
	        <TabPane tabId="1">
	          <Row>
	            <Col sm="12">
				      <Carousel
				        activeIndex={activeIndex}
				        next={next}
				        previous={previous}
				      >
				        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
				        {slides}
				      </Carousel>
	            </Col>
	          </Row>
	        </TabPane>
	        <TabPane tabId="2">
	          <h1>Tab2</h1>
	        </TabPane>
	        <TabPane tabId="3">
	          <h1>Tab3</h1>
	        </TabPane>
	        <TabPane tabId="4">
	          <h1>Tab4</h1>
	        </TabPane>
	        <TabPane tabId="5">
	          <h1>Tab5</h1>
	        </TabPane>
	      </TabContent>
	    </div>
	    <div className="services_page_section_networking">
	    	<h1>Présentation Networking</h1>
			    	   <Nav tabs>
					        <NavItem className="services_page_section_networking_tab">
					          <NavLink
					            className={classnames({ active: activeTab === '1' })}
					            onClick={() => { toggle('1'); }}
					          >
					            <img src="/assets/img/icons/icon_non-activated.svg"/>
					            Notre système d'affiliation
					          </NavLink>
					        </NavItem>
					        <NavItem className="services_page_section_networking_tab">
					          <NavLink
					            className={classnames({ active: activeTab === '2' })}
					            onClick={() => { toggle('2'); }}
					          >
					            <img src="/assets/img/icons/icon_non-activated.svg"/>
					            Plan de compensation
					          </NavLink>
					         </NavItem> 
				           <NavItem className="services_page_section_networking_tab">
					          <NavLink
					            className={classnames({ active: activeTab === '3' })}
					            onClick={() => { toggle('3'); }}
					          >
					            <img src="/assets/img/icons/icon_non-activated.svg"/>
					            La licence
					          </NavLink>
				          </NavItem>
				      </Nav>
			      <TabContent activeTab={activeTab}>
			        <TabPane tabId="1">
			          <Row>
			            <Col sm="12">
				            <Media left href="#">
					          <Media object data-src="./assets/login.png"/>
					        </Media>
			              	 <style>
						        {
						          `.custom-tag {
						              max-width: 100%;
						              height: 500px;
						              background: transparent !important;
						            }`
						        }
						      </style>
						      <Carousel
						        activeIndex={activeIndex}
						        next={next}
						        previous={previous}
						      >
						        <CarouselIndicators items={items3} activeIndex={activeIndex} onClickHandler={goToIndex} />
						        {slides2}
						        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
						        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
						      </Carousel>
			            </Col>
			          </Row>
			        </TabPane>
			       <TabPane tabId="2">
			          <h1>Tab2</h1>
			        </TabPane>
			        <TabPane tabId="3">
			          <h1>Tab3</h1>
			        </TabPane>
			      </TabContent>
	    </div>
	    <div className="services_page_section_partenaires">
	    	<h1>Partenaires</h1>
	    	<Carousel
				        activeIndex={activeIndex}
				        next={next}
				        previous={previous}
				      >
				        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
				        {slides3}
				         <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      					 <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
				      </Carousel>
	    </div>
    </div>
   </> 
  )

}


Services.layout = Public;
export default Services;
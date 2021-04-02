import React from 'react';
import { useState } from 'react';
import Public from '../../layouts/Public';
import { TabContent, TabPane, Nav, CardImg, CardBody, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Media } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

function Services () {
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
	        className="custom-tag"
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
				          <h4>LEARN MORE</h4><img src="../../../../assets/img/theme/profile-cover.jpg"/>
				        </Container>
				      </Jumbotron>
		        </Col>
		        <Col xs="6">
		        	<Jumbotron fluid className="services_page_section_presentation_jombotron">
				        <Container fluid>
				          <img src="/img/theme/profile-cover.jpg"/>
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
	        className="custom-tag"
	        tag="div"
	        key={item.id}
	        onExiting={() => setAnimating(true)}
	        onExited={() => setAnimating(false)}
	      >
	      	  <Row className="services_page_section_partenaires_row">
		        <Col xs="6">
		        	<Card>
				        <CardBody>
				          <h2>Umdeny Logo</h2><h6>Visiter<span> ></span></h6>
				          <h4>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou</h4>
				          <h3>Secteur activité</h3>
				        </CardBody>
				      </Card>
		        </Col>
		        <Col xs="6">
		        	<Card>
				        <CardBody>
				        	<h2>Hannibal Logo</h2><h6>Visiter<span> ></span></h6>
				        	<h4>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou</h4>
				        	<h3>Secteur activité</h3>
				        </CardBody>
				      </Card>
		        </Col>
		      </Row>
	      </CarouselItem>
	    );
	  });
	//
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
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
			            Participation au pool de liquidité
			          </NavLink>
			        </NavItem>
			        <NavItem className="services_page_section_presentation_tab">
			          <NavLink
			            className={classnames({ active: activeTab === '2' })}
			            onClick={() => { toggle('1'); }}
			          >
			            Gestion, acquisition de produits numériques
			          </NavLink>
			         </NavItem> 
		           <NavItem className="services_page_section_presentation_tab">
			          <NavLink
			            className={classnames({ active: activeTab === '3' })}
			            onClick={() => { toggle('1'); }}
			          >
			            Monitoring et suivie des positions de participation
			          </NavLink>
		          </NavItem>
		          <NavItem className="services_page_section_presentation_tab">
			          <NavLink
			            className={classnames({ active: activeTab === '3' })}
			            onClick={() => { toggle('1'); }}
			          >
			            Partage des intérêts
			          </NavLink>
		          </NavItem> 
		           <NavItem className="services_page_section_presentation_tab">
			          <NavLink
			            className={classnames({ active: activeTab === '4' })}
			            onClick={() => { toggle('1'); }}
			          >
			            Satisfactions des membres de la communauté
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
				              background: transparent;
				            }`
				        }
				      </style>
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
	          <Row>
	            <Col sm="6">
	              <Card body>
	                <CardTitle>Special Title Treatment</CardTitle>
	                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
	                <Button>Go somewhere</Button>
	              </Card>
	            </Col>
	            <Col sm="6">
	              <Card body>
	                <CardTitle>Special Title Treatment</CardTitle>
	                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
	                <Button>Go somewhere</Button>
	              </Card>
	            </Col>
	          </Row>
	        </TabPane>
	      </TabContent>
	    </div>
	    <div className="services_page_section_networking">
	    	<h1>Présentation Networking</h1>
			    	   <Nav tabs>
					        <NavItem className="services_page_section_presentation_tab">
					          <NavLink
					            className={classnames({ active: activeTab === '1' })}
					            onClick={() => { toggle('1'); }}
					          >
					            Notre système d'affiliation
					          </NavLink>
					        </NavItem>
					        <NavItem className="services_page_section_presentation_tab">
					          <NavLink
					            className={classnames({ active: activeTab === '2' })}
					            onClick={() => { toggle('1'); }}
					          >
					            Plan de compensation
					          </NavLink>
					         </NavItem> 
				           <NavItem className="services_page_section_presentation_tab">
					          <NavLink
					            className={classnames({ active: activeTab === '3' })}
					            onClick={() => { toggle('1'); }}
					          >
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
						              background: transparent;
						            }`
						        }
						      </style>
						      <Carousel
						        activeIndex={activeIndex}
						        next={next}
						        previous={previous}
						      >
						        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
						        {slides}
						        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
						        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
						      </Carousel>
			            </Col>
			          </Row>
			        </TabPane>
			        <TabPane tabId="2">
			          <Row>
			            <Col sm="6">
			              <Card body>
			                <CardTitle>Special Title Treatment</CardTitle>
			                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
			                <Button>Go somewhere</Button>
			              </Card>
			            </Col>
			            <Col sm="6">
			              <Card body>
			                <CardTitle>Special Title Treatment</CardTitle>
			                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
			                <Button>Go somewhere</Button>
			              </Card>
			            </Col>
			          </Row>
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
  )
}

Services.layout = Public;
export default Services;
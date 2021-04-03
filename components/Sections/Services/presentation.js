import { Button, Container, Row, Col } from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Media } from 'reactstrap';
import { useState } from 'react';
import { Jumbotron} from 'reactstrap';
import { TabContent, TabPane, Nav, CardImg, CardBody, NavItem, NavLink, Card,CardTitle, CardText} from 'reactstrap';
import classnames from 'classnames';
//import  './assets/css/shakazz.css';

function PresentationSection() {
  //Tabs
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  //
   function changenavImage(idP,idC){
    return requestAnimationFrame(()=>{
     document.getElementById(idP).src ="/img/icons/icon_non-activated.svg";
     document.getElementById(idC).src ="/img/icons/icon_activated.svg";
    })
  }
    const items = [
      {
        id: 1,
        altText: 'Participer au pool de liquidité',
        caption: 'Intégrez la grande team de fournisseurs qui alimentent les nombreux projets déterminés par notre algorithme.'
      },
      {
        id: 2,
        altText: 'Gestion-acquisition de produits numériques',
        caption: 'La liquidité sera repartie suivant une stratégie stricte et rigoureuse, dépendamment du plan choisi.'
      },
      {
        id: 3,
        altText: 'Monitoring et suivi ',
        caption: 'Notre Algorithme fera la veille et le suivi des différentes positions. Un audit en plus sera fait à la fin de chaque semestre dans le but de vous fournir un rapport détaillé.'
      },
       {id: 4,
        altText: 'Partage des récompenses ',
        caption: 'Tous les fournisseurs de liquidités recevront des perdiems en proportion de leurs fonds bloqués dans le système.'
      },
       {id: 5,
        altText: 'Satisfaction des membres de la  communauté',
        caption: 'Profitez de vos amis, de votre famille et de la vie, nous nous chargeons du reste !'
      }
    ];
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
      const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
      const slides = items.map((item) => {
      return (
        <CarouselItem
          className="services_page_section_presentation_caroussel"
          tag="div"
          interval={null}
          key={item.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
            <Row>
            <Col xs="6">
              <Jumbotron fluid className="services_page_section_presentation_jombotron">
                <Container fluid>
                  <h1>{item.altText}</h1>
                  <p className="lead">{item.caption}</p>
                  <h4>En savoir plus<img className="services_page_section_networking_jombotron_icon" src="/img/icons/arrow dark.svg"/></h4>
                </Container>
              </Jumbotron>
            </Col>
            <Col xs="6">
              <Jumbotron fluid className="services_page_section_presentation_jombotron">
                <Container fluid>
                  <img src="/img/crowdlending.png"/>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </CarouselItem>
      );
    });
  return (
       <div className="services_page_section_presentation">
        <h1>Présentation Crowndlending</h1>
          <Nav tabs>
              <NavItem className="services_page_section_presentation_tab">
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { 
                    toggle('1'); 
                    goToIndex(0);
                    changenavImage("navImg5","navImg1");
                    }}
                >
                  <Row>
                    <Col sm="3">
                      <img id="navImg1" src="/img/icons/icon_non-activated.svg"/>
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
                  onClick={() => { 
                    toggle('2'); 
                    goToIndex(1);
                    changenavImage("navImg1","navImg2");
                    }}
                >
                  <Row>
                    <Col sm="3">
                      <img id="navImg2" src="/img/icons/icon_non-activated.svg"/>
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
                  onClick={() => { 
                    toggle('3'); 
                    goToIndex(2);
                    changenavImage("navImg2","navImg3");
                    }}
                >
                   <Row>
                    <Col sm="3">
                      <img id="navImg3" src="/img/icons/icon_non-activated.svg"/>
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
                  onClick={() => { 
                    toggle('4'); 
                    goToIndex(3);
                    changenavImage("navImg3","navImg4");
                    }}
                >
                  <Row>
                    <Col sm="3">
                      <img id="navImg4" src="/img/icons/icon_non-activated.svg"/>
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
                  onClick={() => { 
                    toggle('5'); 
                    goToIndex(4);
                    changenavImage("navImg4","navImg5");
                    }}
                >
                  <Row>
                    <Col sm="3">
                      <img id="navImg5" src="/img/icons/icon_non-activated.svg"/>
                    </Col>
                    <Col sm="9">
                      Satisfactions des membres de la communauté
                    </Col>
                  </Row>
                </NavLink>
              </NavItem>
          </Nav>
        <TabContent activeTab={activeTab}>
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
        </TabContent>
      </div>
  );
}

export default PresentationSection;

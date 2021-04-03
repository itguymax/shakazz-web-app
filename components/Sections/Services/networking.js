import { Button, Container, Row, Col } from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { useState } from 'react';
import { Jumbotron} from 'reactstrap';
import { TabContent, TabPane, Nav, CardImg, CardBody, NavItem, NavLink, Card,CardTitle, CardText} from 'reactstrap';
import classnames from 'classnames';
import { Media } from 'reactstrap';
//import  './assets/css/shakazz.css';

function NetworkingSection() {
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
       {id: 1,
        altText: 'Notre système d’affiliation ',
        caption: 'Nous donnons les moyens à tous les fournisseurs de liquidités désireux de partager leur expérience avec le monde. Nous mettons à disposition des outils et un système unique et performant.'
      },
      {
        id: 2,
        altText: 'Plan de compensation ',
        caption: 'Progressez au sein de notre système et construisez votre héritage.'
      },
      {
        id: 3,
        altText: 'La Licence ',
        caption: 'Afin de garantir la pérennité de notre système, nous travaillons avec des personnes intègres et responsables. Pour cela, nous vous invitons à souscrire à notre licence.'
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
                  <h1>{item.altText}</h1>
                  <p className="lead">{item.caption}</p>
                  <h4>En savoir plus<img className="services_page_section_networking_jombotron_icon" src="/img/icons/arrow dark.svg"/></h4>
                </Container>
              </Jumbotron>
            </Col>
            <Col xs="6">
              <Jumbotron fluid className="services_page_section_networking_jombotron">
                <Container fluid>
                  <img src="/img/networking.png"/>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </CarouselItem>
      );
    });
  return (
      <div className="services_page_section_networking">
        <h1>Présentation Networking</h1>
               <Nav tabs>
                  <NavItem className="services_page_section_networking_tab">
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { 
                        toggle('1');
                        goToIndex(0);
                        changenavImage("navImg3","navImg1");
                         }}
                    >
                      <img id="navImg1" src="/img/icons/icon_non-activated.svg"/>
                      Notre système d'affiliation
                    </NavLink>
                  </NavItem>
                  <NavItem className="services_page_section_networking_tab">
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { 
                        toggle('2');
                        goToIndex(1);
                        changenavImage("navImg1","navImg2");
                         }}
                    >
                      <img id="navImg2" src="/img/icons/icon_non-activated.svg"/>
                      Plan de compensation
                    </NavLink>
                   </NavItem> 
                   <NavItem className="services_page_section_networking_tab">
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => { 
                        toggle('3');
                        goToIndex(2);
                        changenavImage("navImg2","navImg3");
                         }}
                    >
                      <img id="navImg3" src="/img/icons/icon_non-activated.svg"/>
                      La licence
                    </NavLink>
                  </NavItem>
              </Nav>
              <Row>
                  <Col sm="12">
                    <Media left href="#">
                    <Media object data-src="./assets/login.png"/>
                  </Media>
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
      </div>
  );
}

export default NetworkingSection;

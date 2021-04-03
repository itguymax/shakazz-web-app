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
import Image from 'react-bootstrap/Image'
//import  './assets/css/shakazz.css';

function PartenairesSection() {
 //Tabs
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  //
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
    const items = [
      {
        id: 1,
        altText: 'Umdeny',
        caption: 'écosystème de développement de projets',
        logo:'/img/brand/umdeny-logo-XL.png',
      },
      {
        id: 2,
        altText: 'Hannibal Consulting',
        caption: 'Investissement et gestion des projets',
        logo:'/img/brand/hannibal.png',
      },
            {
        id: 3,
        altText: 'Uthango',
        caption: 'Blockchain Former et sensibiliser sur la blockchain et la Cryptomonnaie',
        logo:'/img/brand/UTHAN_GO 3.png',
      },
      {
        id: 4,
        altText: 'J&F consulting',
        caption: 'MLM',
        logo:'/img/brand/jf.png',
      },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
     const slides = items.map((item,index,elt) => {
      let index2 = index +1;
      return (
        <CarouselItem
          className="services_page_section_partenaires_caroussel"
          tag="div"
          key={item.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
            <Row className="services_page_section_partenaires_row">
            <Col xs="6">
              <Card className="services_page_section_partenaires_col_card">
                <CardBody>
                  <h2>{elt[index].altText}</h2><h6>Visiter<span> ></span></h6>
                  <h4>{item.caption}</h4>
                  <Row className="services_page_section_partenaires_row2">
                    <Col xs="6">
                      <h3>Secteur activité</h3>
                      </Col>
                      <Col xs="6">
                        <Image className="services_page_section_partenaires_row_image"
                        src={elt[index].logo}
                      />
                      </Col>
                    </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <Card className="services_page_section_partenaires_col_card">
                <CardBody>
                  <h2>{index2<items.length?elt[index2].altText:elt[0].altText}</h2><h6>Visiter<span> ></span></h6>
                  <h4>{index2<items.length?elt[index2].altText:elt[0].caption}</h4>
                  <Row className="services_page_section_partenaires_row2">
                    <Col xs="6">
                      <h3>Secteur activité</h3>
                      </Col>
                      <Col xs="6">
                        <Image className="services_page_section_partenaires_row_image"
                        src={index2<items.length?elt[index2].logo:elt[0].logo}
                        alt=""
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
  return (
      <div className="services_page_section_partenaires">
        <h1>Partenaires</h1>
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
      </div>
  );
}

export default PartenairesSection;

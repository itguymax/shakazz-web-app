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
import Image from 'next/image'
import { css } from "@emotion/react";
import {device} from "../../lib/device";
//import  './assets/css/shakazz.css';

const PartenairesCard = ({item}) => {
  return (
       <Col md="6" lg="6" >
         <Card className="p-3" css={css` 
          height:200px;
          width:430px;
	        border:2px solid #ccc; 
          @media ${device.smMobileMax}{
            width:150%;
            margin-bottom: 30px;
            margin-left:-25%;
            height: 250px;
            /* margin-right:10px; */
          } 
          @media ${device.laptop}{
            width: 430px;
          } 
               
       `}>
            <Row> 
              <Col>
              <h2 style={{color:"#333333", opacity:1}}>{item.altText}</h2>
              <h4 style={{color:"#a9a9a9", fontWeight:"100"}}>{item.caption}</h4>
              </Col>
                  {/* <h6>Visiter<span>&gt;</span></h6> */}
                {/* <Col><h4>{item.caption}</h4></Col> */}
            </Row>
            <Row className="" >
                <Col xs="5">
                  <h3 style={{color:"#333333", opacity:1}}>Secteur activité</h3>
                </Col>
                <Col xs="7" className="mt--5" style={{position: 'relative'}}>
                  
                    <Image  priority={true} className="mb--2" height={140} width={200} quality={100} src={item.logo}/>
                  
                </Col>
            </Row>
       </Card>
      </Col>
  )
}

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
        logo:'/assets/img/brand/umdeny-logo-XL.png',
      },
      {
        id: 2,
        altText: 'Hannibal Consulting',
        caption: 'Investissement et gestion des projets',
        activite: "Hannibal Consulting",
        logo:'/assets/img/brand/hannibal.png',
      },
            {
        id: 3,
        altText: 'Uthango',
        activite: "Blockchain",
        caption: 'Former et sensibiliser sur la blockchain et la Cryptomonnaie',
        logo:'/assets/img/brand/UTHAN_GO.png',
      },
      {
        id: 4,
        altText: 'J&F consulting',
        caption: 'MLM',
        logo:'/assets/img/brand/jf.png',
      },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
     const slides = items.map((item,index, el) => {
      console.log("gdggdffg dex", index, el[index]);
     let index2 =0
      let ellet = el.lenght;
      if(index===3){
        index2 = 0;
      }else {
        index2 = index +1;
      }
      return (
        <CarouselItem
          className="services_page_section_partenaires_caroussel"
          tag="div"
          style={{}}
          key={item.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
         <Row className="services_page_section_partenaires_row" css={css` 
              width: 80%;
              margin: auto !important;
              @media ${device.tablet}{
                width: 100%;
              }
               @media ${device.smMobileMax}{
                 width:88%;
                 
           
                } 
         `}>
             <PartenairesCard item={el[index]}/>
             <PartenairesCard item={el[index2]}/>   
         </Row>
        </CarouselItem>
      );
    });
  return (
      <div 
      
      className=" services_page_section_partenaires justify-content-center pt-6 pb-7">
         <div className=" pb-5 text-center"  ><h1 style={{color:"#333"}}>Partenaires</h1></div>
        <Carousel
                css={css` 
                  height: 20em;
                  
                   @media ${device.smMobileMax}{
                      .carousel-inner{
                    overflow: unset;
                   
                  }
                  .carousel-indicators{
                    bottom:-90%;
                  }
          } 
                `}

                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                 <CarouselControl className="carousel-control-prev-icon" direction="prev" directionText="Previous" onClickHandler={previous} />
                 <CarouselControl  className="carousel-control-next-icon" direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
      </div>
  );
}

export default PartenairesSection;

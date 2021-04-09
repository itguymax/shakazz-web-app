  
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
import Image from "next/image";
import Indicator from "../../components/Indicator";
import TabH from "../../components/TabH"

function NetworkingSection() {
    const items = [
       {id: 1,
        altText: 'Notre système d’affiliation ',
        caption: 'Nous donnons les moyens à tous les fournisseurs de liquidités désireux de partager leur expérience avec le monde. Nous mettons à disposition des outils et un système unique et performant.',
        logo:'/assets/img/networking.png'
    },
      {
        id: 2,
        altText: 'Plan de compensation ',
        caption: 'Progressez au sein de notre système et construisez votre héritage.',
        logo:'/assets/img/networking1.png'
      },
      {
        id: 3,
        altText: 'La Licence ',
        caption: 'Afin de garantir la pérennité de notre système, nous travaillons avec des personnes intègres et responsables. Pour cela, nous vous invitons à souscrire à notre licence.',
        logo:'/assets/img/payer_une_license.png'
      }
    ];

    const [hTabsIcons, setHTabsIcons] = useState("hTabsIcons-1");
  const handleSetHTabs = ( indic) => {
    setHTabsIcons(indic);
  }
      
  return (
     <>
        <Row className=" d-flex  justify-content-center pt-6 pb-7" style={{backgroundColor:"#F5F5F5"}}>
        <div className=" pb-5 text-center"  ><h1 style={{color:"#333"}}>Présentation Networking</h1></div>
           <Container fluid className="mx-5">
               <div css={css`
        
        .nav-pills .nav-link{
          box-shadow: none;
        }
        
        .nav-pills .nav-link.active, .nav-pills .nav-link, h1 {
              color:#333;
              font-size:bold;
              background-color:#F5F5F5;
              padding:0px;
        }
       h3{
         display: flex;
         flex-direction: column;
         font-size: 12px;
         text-align: center;
         width:160px;

       }
       span{
         border: 4px solid #24422F;
         position:absolute;
         width: 180px;
        bottom: -5px;
         z-index:999;
       }
    `}>
        <Nav className="nav-fill flex-column flex-md-row" pills role="tablist" 
          style={{ position: "relative"}}
           css={css`
            border-bottom:2px solid #B7B7B7;
            @media (max-width: 500px ){
                border-bottom: none;
                h3{
                  font-size: 14px;
                  width:80%;
                }
            }
         `}
        >
         <TabH  handleSetHTabs={handleSetHTabs} hTabsIcons={hTabsIcons} indicator="hTabsIcons-1" text="Notre système d'affiliation" />
         <TabH  handleSetHTabs={handleSetHTabs} hTabsIcons={hTabsIcons} indicator="hTabsIcons-2" text="Plan de compensation" />
         <TabH  handleSetHTabs={handleSetHTabs} hTabsIcons ={hTabsIcons} indicator="hTabsIcons-3"  text="La licence" />
        </Nav>
      </div>
      <div className="">
        <div>
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
           {
              items.map((item, key) =>{
                {/* console.log("hTabsIcon",`hTabsIcons-${item.id}`); */}
                return (
                   <TabPane key={item.id} tabId={`hTabsIcons-${item.id}`} role="tabpanel">
                    <Row className="services_page_section_networking_caroussel_row">
                      <Col xs="6">
                        <Jumbotron fluid className="services_page_section_networking_jombotron">
                          <Container fluid>
                            <h1 style={{color:"#CC9933"}}>{item.altText}</h1>
                            <p className="lead">{item.caption}</p>
                            {/* <h4 style={{color: "#333"}}>En savoir plus<img className="services_page_section_networking_jombotron_icon" src="/assets/img/icons/arrow dark.svg"/></h4> */}
                          </Container>
                        </Jumbotron>
                      </Col>
                      <Col xs="6">
                        <Jumbotron fluid className="services_page_section_networking_jombotron">
                          <Container fluid className="container-fluid-imageSlide">
                            <Image priority={true} quality={100} src={item.logo} height={150} width={150}/>
                          </Container>
                        </Jumbotron>
                      </Col>
                </Row>
            </TabPane>
                )
              })
           }
          </TabContent>
        </div>
        <Row className="justify-content-center">
          <Indicator handleClick={handleSetHTabs} indic="hTabsIcons-1" hTabsIcons={hTabsIcons}/>
          <Indicator handleClick={handleSetHTabs} indic="hTabsIcons-2" hTabsIcons={hTabsIcons}/>
          <Indicator handleClick={handleSetHTabs} indic="hTabsIcons-3" hTabsIcons={hTabsIcons}/>  
       </Row>
      </div>
           </Container>
        </Row>
     </>
  );
}

export default NetworkingSection;
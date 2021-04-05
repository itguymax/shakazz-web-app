import { Button, Container, Row, Col } from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from 'reactstrap';
import { Media } from 'reactstrap';
import { useState } from 'react';
import { Jumbotron} from 'reactstrap';
import classnames from 'classnames';
import { UncontrolledCarousel } from 'reactstrap';
import {css} from "@emotion/react";
import Image from "next/image";

    const items = [
      {
        id: 1,
        altText: 'Participer au pool de liquidité',
        caption: 'Intégrez la grande team de fournisseurs qui alimentent les nombreux projets déterminés par notre algorithme.',
        logo:'/assets/img/crowdlending.png'
      },
      {
        id: 2,
        altText: 'Gestion-acquisition de produits numériques',
        caption: 'La liquidité sera repartie suivant une stratégie stricte et rigoureuse, dépendamment du plan choisi.',
        logo:'/assets/img/gestion.png'
      },
      {
        id: 3,
        altText: 'Monitoring et suivi ',
        caption: 'Notre Algorithme fera la veille et le suivi des différentes positions. Un audit en plus sera fait à la fin de chaque semestre dans le but de vous fournir un rapport détaillé.',
        logo:'/assets/img/monitoring.png'
      },
       {id: 4,
        altText: 'Partage des récompenses ',
        caption: 'Tous les fournisseurs de liquidités recevront des perdiems en proportion de leurs fonds bloqués dans le système.',
        logo:'/assets/img/partage2.png'
      },
       {id: 5,
        altText: 'Satisfaction des membres de la  communauté',
        caption: 'Profitez de vos amis, de votre famille et de la vie, nous nous chargeons du reste !',
        logo:'/assets/img/sourire.png'
      }
    ];


const TabH = ({indicator, text,hTabsIcons,handleSetHTabs}) => {
  return (
     <NavItem>
            <NavLink
              className={
                "mb-sm-3 mb-md-0 " +
                ( hTabsIcons === indicator ? "active" : "")
              }
              href="#itguymax"
              onClick={(e) => {
                e.preventDefault();
                handleSetHTabs(indicator);
              }}
            >
             <Container fluid>
                 <Row className="">
                  <Image className="col" width="40px" height="40px" src={hTabsIcons === indicator ? "/assets/img/icons/icon_activated.svg" : "/assets/img/icons/icon_non-activated.svg"} />
                <h3 className="col"> {text} { hTabsIcons === indicator && <span/>}</h3>
              </Row>
             </Container>
            
            </NavLink>
          </NavItem>
  )
}
const Indicator = ({hTabsIcons,indic, handleClick}) => {
  
  return (
    <span 
     onClick={()=> handleClick(indic)}
    style={{backgroundColor:hTabsIcons===indic? "#333333":"#9B9B9B", cursor:"pointer"}}
    css={css`
       height: 15px;
       width: 15px;
       dispay: flex;
       border-radius:50%;
       margin-right:5px;
      
    `}/>  
  )
}
const PresentationSection = ()=>{
  const [hTabsIcons, setHTabsIcons] = useState("hTabsIcons-1");
  const handleSetHTabs = ( indic) => {
    setHTabsIcons(indic);
  }


  return <>
        <Row className=" d-flex  justify-content-center pt-6 pb-7">
        <div className=" pb-5 text-center"  ><h1 style={{color:"#333"}}>Présentation Crowdlending</h1></div>
           <Container fluid className="mx-5">
               <div css={css`
        
        .nav-pills .nav-link{
          box-shadow: none;
        }
        
        .nav-pills .nav-link.active, .nav-pills .nav-link, h1 {
              color:#333;
              font-size:bold;
              background-color:#fff;
              padding:0px;
        }
       h3{
         display: flex;
         flex-direction: column;
         font-size: 12px;
         text-align: center;
         width:100px;

       }
       span{
         border: 4px solid #24422F;
         position:absolute;
         width: 180px;
         bottom: -13px;
       }
    `}>
        <Nav className="nav-fill flex-column flex-md-row" pills role="tablist" 
          style={{borderBottom:"2px solid #B7B7B7", position: "relative"}}
        >
         <TabH  handleSetHTabs={handleSetHTabs} hTabsIcons={hTabsIcons} indicator="hTabsIcons-1" text="Participer au pool de liquidité" />
         <TabH  handleSetHTabs={handleSetHTabs} hTabsIcons={hTabsIcons} indicator="hTabsIcons-2" text="Gestion, acquisition de produits numériques" />
         <TabH  handleSetHTabs={handleSetHTabs} hTabsIcons ={hTabsIcons} indicator="hTabsIcons-3"  text="Monitoring et suivie des positions et participation" />
         <TabH  handleSetHTabs={handleSetHTabs} hTabsIcons={hTabsIcons} indicator="hTabsIcons-4"  text="Partage des interêts" />
         <TabH  handleSetHTabs={handleSetHTabs} hTabsIcons={hTabsIcons} indicator="hTabsIcons-5" text="satisfaction des membres de la communauté" />  
        </Nav>
      </div>
      <div className="">
        <div>
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
           {
              items.map((item, key) =>{
                console.log("hTabsIcon",`hTabsIcons-${item.id}`);
                return (
                   <TabPane key={item.id} tabId={`hTabsIcons-${item.id}`} role="tabpanel">
                    <Row className="services_page_section_presentation_caroussel_row">
                      <Col xs="6">
                        <Jumbotron fluid className="services_page_section_presentation_jombotron">
                          <Container fluid>
                            <h1 style={{color:"#CC9933"}}>{item.altText}</h1>
                            <p className="lead">{item.caption}</p>
                            <h4 style={{color: "#333"}}>En savoir plus<img className="services_page_section_networking_jombotron_icon" src="/assets/img/icons/arrow dark.svg"/></h4>
                          </Container>
                        </Jumbotron>
                      </Col>
                      <Col xs="6">
                        <Jumbotron fluid className="services_page_section_presentation_jombotron">
                          <Container fluid className="container-fluid-imageSlide">
                            <Image src={item.logo}  src={item.logo} height={200} width={hTabsIcons==="hTabsIcons-1"?190:300}/>
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
          <Indicator handleClick={handleSetHTabs} indic="hTabsIcons-4" hTabsIcons={hTabsIcons}/>
          <Indicator handleClick={handleSetHTabs} indic="hTabsIcons-5" hTabsIcons={hTabsIcons}/>
       </Row>
      </div>
           </Container>
        </Row>
   </>
}

export default PresentationSection;
  
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
//import  './assets/css/shakazz.css';
let currentTab = 'nNavImg1';
function NetworkingSection() {
  // //Tabs
  //   const [activeTab, setActiveTab] = useState('1');
  //   const toggle = tab => {
  //     if(activeTab !== tab) setActiveTab(tab);
  //   }
  // //
  // function changenavImage(idP,idC){
  //   return requestAnimationFrame(()=>{
  //     document.getElementById(currentTab).src ="/assets/img/icons/icon_non-activated.svg";
  //    document.getElementById(idP).src ="/assets/img/icons/icon_non-activated.svg";
  //    document.getElementById(idC).src ="/assets/img/icons/icon_activated.svg";
  //    currentTab = idC;
  //   })
  // }
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
    // const next = () => {
    //     if (animating) return;
    //     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    //     setActiveIndex(nextIndex);
    //   }

    //   const previous = () => {
    //     if (animating) return;
    //     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    //     setActiveIndex(nextIndex);
    //   }

    //   const goToIndex = (newIndex) => {
    //     if (animating) return;
    //     setActiveIndex(newIndex);
    //   }
    //   const [activeIndex, setActiveIndex] = useState(0);
    // const [animating, setAnimating] = useState(false);
    const [hTabsIcons, setHTabsIcons] = useState("hTabsIcons-1");
  const handleSetHTabs = ( indic) => {
    setHTabsIcons(indic);
  }
      
    // const slides = items.map((item) => {
    //   return (
    //     <CarouselItem
    //     className="services_page_section_networking_caroussel"
    //       tag="div"
    //       key={item.id}
    //       onExiting={() => setAnimating(true)}
    //       onExited={() => setAnimating(false)}
    //     >
    //         <Row className="services_page_section_networking_caroussel_row">
    //         <Col xs="6">
    //           <Jumbotron fluid className="services_page_section_networking_jombotron">
    //             <Container fluid>
    //               <h1>{item.altText}</h1>
    //               <p className="lead">{item.caption}</p>
    //               <h4>En savoir plus<img className="services_page_section_networking_jombotron_icon" src="/assets/img/icons/arrow dark.svg"/></h4>
    //             </Container>
    //           </Jumbotron>
    //         </Col>
    //         <Col xs="6">
    //           <Jumbotron fluid className="services_page_section_networking_jombotron">
    //             <Container fluid className="container-fluid-imageSlide">
    //               <img src={item.logo}/>
    //             </Container>
    //           </Jumbotron>
    //         </Col>
    //       </Row>
    //     </CarouselItem>
    //   );
    // });
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
                console.log("hTabsIcon",`hTabsIcons-${item.id}`);
                return (
                   <TabPane key={item.id} tabId={`hTabsIcons-${item.id}`} role="tabpanel">
                    <Row className="services_page_section_networking_caroussel_row">
                      <Col xs="6">
                        <Jumbotron fluid className="services_page_section_networking_jombotron">
                          <Container fluid>
                            <h1 style={{color:"#CC9933"}}>{item.altText}</h1>
                            <p className="lead">{item.caption}</p>
                            <h4 style={{color: "#333"}}>En savoir plus<img className="services_page_section_networking_jombotron_icon" src="/assets/img/icons/arrow dark.svg"/></h4>
                          </Container>
                        </Jumbotron>
                      </Col>
                      <Col xs="6">
                        <Jumbotron fluid className="services_page_section_networking_jombotron">
                          <Container fluid className="container-fluid-imageSlide">
                            <Image src={item.logo} height={150} width={150}/>
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
     
      // <div className="services_page_section_networking">
      //   <h1>Présentation Networking</h1>
      //          <Nav tabs>
      //             <NavItem className="services_page_section_networking_tab">
      //               <NavLink
      //                 className={classnames({ active: activeTab === '1' })}
      //                 onClick={() => { 
      //                   toggle('1');
      //                   goToIndex(0);
      //                   changenavImage("nNavImg3","nNavImg1");
      //                    }}
      //               >
      //                 <img id="nNavImg1" src="/assets/img/icons/icon_activated.svg"/>
      //                 Notre système d'affiliation
      //               </NavLink>
      //             </NavItem>
      //             <NavItem className="services_page_section_networking_tab">
      //               <NavLink
      //                 className={classnames({ active: activeTab === '2' })}
      //                 onClick={() => { 
      //                   toggle('2');
      //                   goToIndex(1);
      //                   changenavImage("nNavImg1","nNavImg2");
      //                    }}
      //               >
      //                 <img id="nNavImg2" src="/assets/img/icons/icon_non-activated.svg"/>
      //                 Plan de compensation
      //               </NavLink>
      //              </NavItem> 
      //              <NavItem className="services_page_section_networking_tab">
      //               <NavLink
      //                 className={classnames({ active: activeTab === '3' })}
      //                 onClick={() => { 
      //                   toggle('3');
      //                   goToIndex(2);
      //                   changenavImage("nNavImg2","nNavImg3");
      //                    }}
      //               >
      //                 <img id="nNavImg3" src="/assets/img/icons/icon_non-activated.svg"/>
      //                 La licence
      //               </NavLink>
      //             </NavItem>
      //         </Nav>
      //         <Row>
      //             <Col sm="12">
      //               <Media left href="#">
      //               <Media object data-src="./assets/login.png"/>
      //             </Media>
      //             <Carousel
      //               activeIndex={activeIndex}
      //               next={next}
      //               previous={previous}
      //               interval={false}
      //             >
      //               <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      //               {slides}
      //             </Carousel>
      //             </Col>
      //           </Row>
      // </div>
  );
}

export default NetworkingSection;
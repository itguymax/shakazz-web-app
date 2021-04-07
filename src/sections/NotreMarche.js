import React from 'react';
import { Button, Container, Row, Col , Card} from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import {css} from "@emotion/react";
import { device } from "../lib/device";
const MarketCard = ({title, sub, imageUrl}) => {
  return (
    <Col xl="6" lg="5" md="10" sm="10">
         <div className="d-flex justify-content-center text-align-items " style={{flexDirection:"column"}}>
              <Image src={imageUrl}  width={150} height={150} className=""/>  
              <div style={{}} className="text-center mt-5">
                  <h2 style={{color: "#fff", fontWeight:"300",fontSize:"30px"}}>{title}</h2>
                  <p className="pb-3 pt-3" style={{fontSize:"14px", fontWeight:"200",letterSpacing:"0px", lineHeight:"1.2", color:"#fff"}}>{sub} </p>
                  {/* <Link href="/about-us" ><h4 className="pt-1 pb-5 px-0 " style={{color: "#fff", fontWeight:"500", cursor:"pointer"}}>En savoir plus<img className="home_page_section_market_jombotron_icon" src="/assets/img/icons/arrow white.svg"/></h4></Link> */}
              </div>
          </div>
    </Col>
  )
}

const NotreMarche = () => {

  return (
    <>

    <Container className=" shadow p-0 pl-lg-3 pr-lg-2 mt-6" style={{ backgroundColor: "#24422F"}}
      css={css`
      width:80%;
      @media (max-width: 6000px){
        width:95%;
      }
      @media ${device.tablet}{
        
      }
      @media ${device.smMobileMax}{
         width:100%;
      }

      `}
    >
          <Card 
          
          className="pt-4 px-5 px-sm-2 mx-0"  
          style={{ minHeight: "550px", backgroundColor: "#24422F"}}
          
          >
              <Container fluid css={css`
                @media ${device.smMobileMAx}{
                  width: 100%;
                  padding: 0px;
                }
              `}>
                  <h1  css={css`
                @media ${device.smMobileMAx}{
                  
                  padding-left: 0px !important;
                }
              `}
              className="pl-lg-5 pl-md-5 " style={{color: "#fff", fontWeight:"bold"}}>Notre  marché en un coup d'œil </h1>
                  <Row className="mt-5 mt-lg-8 pb-8 justify-content-center"  >
                    <MarketCard title="Afrique" imageUrl="/assets/img/icons/Afrique.svg" sub="c’est le marché qui détient le plus fort potentiel de croissance sur les  50  prochaines  années."/>
                    <MarketCard title="Cryptomonnaies" imageUrl="/assets/img/icons/cryptomonnaie.svg" sub="ce sont les actifs financiers qui observent la plus forte croissance sur les 10 dernières années."/>
                 </Row>
              </Container>
          </Card>
        </Container>
      

    </>
  )
}


export default NotreMarche;
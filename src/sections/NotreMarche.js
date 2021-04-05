import React from 'react';
import { Button, Container, Row, Col , Card} from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import {css} from "@emotion/react";

const MarketCard = ({title, sub, imageUrl}) => {
  return (
    <Col xl="6" md="10">
         <div className="d-flex justify-content-center text-align-items col" style={{flexDirection:"column"}}>
              <Image src={imageUrl}  width={150} height={150} className=""/>  
              <div style={{}} className="text-center mt-3">
                  <h2 style={{color: "#fff", fontWeight:"300",fontSize:"30px"}}>{title}</h2>
                  <p style={{fontSize:"14px", fontWeight:"200",letterSpacing:"0px", lineHeight:"1.4", color:"#fff"}}>{sub} </p>
                  <Link href="/about-us" ><h4 className="p-5" style={{color: "#fff", fontWeight:"500", cursor:"pointer"}}>En savoir plus<img className="home_page_section_market_jombotron_icon" src="/assets/img/icons/arrow white.svg"/></h4></Link>
              </div>
          </div>
    </Col>
  )
}

const NotreMarche = () => {

  return (
    <>

    <Container className=" shadow p-0 mt-6" style={{ backgroundColor: "#24422F"}}
      css={css`
      width:80%;
      @media (max-width: 6000px){
        width:95%;
      }

      `}
    >
          <Card 
          
          className="pt-4 px-5 mx-0"  
          style={{ minHeight: "550px", backgroundColor: "#24422F"}}
         
          >
              <Container fluid>
                  <h1 style={{color: "#fff", fontWeight:"bold"}}>Notre  marché en un coup d'œil </h1>
                  <Row className="mt-5 pb-8">
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
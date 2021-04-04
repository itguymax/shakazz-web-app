import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'next/image';
import {css} from "@emotion/react";
import { Button, Container, Row, Col,Card } from "reactstrap";

export const WeCard = (props) => {
  return (
      <Col xl="4" sm="10" md="10">
          <div className="d-flex justify-content-center text-align-items" style={{flexDirection:"column"}}>
              
                  <Image src={props.imageUrl}  width={150} height={150} className=""/>
              
              <div className="text-center mt-3">
                  <h2 style={{color: "#6F6F6F"}}>{props.title}</h2>
                  <p style={{fontSize:"14px", letterSpacing:"0px", lineHeight:"1.2"}}>{props.subtitle} </p>
              </div>
          </div>
      </Col>
  )
}
export default function NousChoisir() {
  return (
    <>
        <Container className="mt--7 p-0 shadow" css={css`
      width:80%;
      @media (max-width: 6000px){
        width:95%;
      }

      `}>
          <Card 
          
          className="pt-4 px-5 mx-0"  
          style={{ minHeight: "450px"}}
         
          >
              <Container fluid >
                  <h1>Pourquoi nous choisir?</h1>
                  <Row className="mt-5 pb-8">
                   <WeCard title="Sécurité" subtitle="un service de garde renforcé par une technologie de pointe et l’expertise de nos différents partenaires." imageUrl="/assets/img/Sécurité.svg"/>
                   <WeCard title="Croissance" subtitle="Nos stratégies de diversification boostent votre patrimoine." imageUrl="/assets/img/Croissance.svg"/>
                   <WeCard title="Simplicité" subtitle="Nous vous accompagnons à chaque étape de votre parcours." imageUrl="/assets/img/Simplicité.svg"/>
                 </Row>
              </Container>
          </Card>
        </Container>
    </>
  );
}

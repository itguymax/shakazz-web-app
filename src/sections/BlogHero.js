import React from 'react'
import { Button, Container, Row, Col } from "reactstrap";
import BigFeaturedArticle from '../components/blog/BigFeaturedArticle';
import SmallFeaturedArticle from '../components/blog/SmallFeaturedArticle';
export default function BlogHero( {featuredPosts}) {
  return (
        <>
      <div
        className="header pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
         backgroundColor: "#fff"
        }}
      >
        {/* Mask */}
        {/* <span className="mask bg-gradient-default opacity-8" /> */}
        {/* Header container */}
        <Container className="d-flex align-items-center justify-content-center" fluid>
          <Row className="" style={{width:"70%"}}>
            <Col lg="8" md="10" style={{ backgroundColor: "#205447", position:"relative"}}>
             <BigFeaturedArticle bigFeaturedPost={featuredPosts[0]}/>
            </Col>
            <Col lg="4" md="10">
              <div style={{display: "flex", flexDirection:"column", justifyContent: "space-between"}}>
                   <SmallFeaturedArticle smallFeaturedPost={featuredPosts[1]}/>
                   <span className="mt-3"/>
                   <SmallFeaturedArticle smallFeaturedPost={featuredPosts[2]}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

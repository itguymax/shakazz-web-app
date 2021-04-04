import React from 'react';
import {Container, Row, Col} from "reactstrap";
import ArticlePreview from '../components/blog/ArticlePreview';
import {css} from "@emotion/react"
import { device } from "../lib/device"
export default function LastArticles({posts}) {
  return (
      <>
      <div
        className="align-items-center"
        style={{
         backgroundColor: "#fff",
         width:"100%",
        backgroundColor:"#F5F5F5",
        }}
      >
        <Container className="d-flex align-items-center justify-content-center" fluid>
          <Row  css={css` 
            width:70%;
            @media ${device.smMobileMax}{
                width: 90%;
            }
          `} >
             <div className="row px-3 py-6">
           <div className="mb-4" style={{display:"flex", flexDirection:"column", }}>
             <h1 className="mb-0" style={{ color: "#444"}}>Derniers articles</h1>
             <span className="mt-0" style={{borderBottomWidth:"10px", borderBottomColor: "#205447", width:"110px", borderBottomStyle: "solid"}}/>
           </div>
           <Row>
            {
              posts.map((item, key)=> {
                return(
                   <Col key={key} xl="4" md="5" sm="6">
                   <ArticlePreview data={item}/>
                 </Col>
                )
              })
            }

           </Row>
          </div>
          
          </Row>
        </Container>
      </div>
    </>
  )
}

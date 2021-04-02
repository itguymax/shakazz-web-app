import React from 'react';
import {Container, Row, Col} from "reactstrap";
import ArticlePreview from '../components/blog/ArticlePreview';

export default function LastArticles({posts}) {
  console.log(" last articles ", posts);
  return (
      <>
      <div
        className="align-items-center mb-4"
        style={{
         backgroundColor: "#fff"
        }}
      >
        <Container className="d-flex align-items-center justify-content-center" fluid>
          <div className="row px-3 py-6" style={{width:"80%", backgroundColor:"#F5F5F5"}}>
           <div className="mb-4" style={{display:"flex", flexDirection:"column", }}>
             <h1 className="mb-0" style={{ color: "#444"}}>Derniers articles</h1>
             <span className="mt-0" style={{borderBottomWidth:"10px", borderBottomColor: "#205447", width:"110px", borderBottomStyle: "solid"}}/>
           </div>
           <Row>
            {
              posts.map((item, key)=> {
                console.log("post", item);
                return(
                   <Col key={key} xl="3" className="mb-3">
                   <ArticlePreview data={item}/>
                 </Col>
                )
              })
            }
           </Row>
          </div>
          
        </Container>
      </div>
    </>
  )
}

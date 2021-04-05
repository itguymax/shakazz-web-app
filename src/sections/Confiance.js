
import React from 'react';
import Image from "next/image";
import { Button, Container, Row, Col , Card} from "reactstrap";


const Confiance = ()=> {
  return (
    <>
      <Row className=" d-flex  justify-content-center"
        style={{
          minHeight: "400px",
         backgroundColor: "#f4f4f4"
        }}
        >
        <div className="mt-xl-6 mt-6 text-center"  ><h1 style={{color:"#707070"}}>Ils nous font confiance</h1></div>
        <Container fluid className="d-flex align-items-center justify-content-center">
            <div style={{width:"80%"}} className="mt--8">
                <Row>
                  <Col xs={5} sm={3}>
                    <Image src="/assets/img/brand/jf.png" width={200} height={200}/>
                  </Col>
                  <Col xs={5} sm={3}>
                    <Image src="/assets/img/brand/umdeny-logo-XL.png" width={400} height={220}/>
                  </Col>
                  <Col xs={5} sm={3}>
                    <Image src="/assets/img/brand/UTHAN_GO.png" width={200} height={200}/>
                 </Col>
                 <Col xs={5} sm={3}>
                   <Image src="/assets/img/brand/hannibal.png" width={200} height={200} />
                 </Col>
               </Row>
            </div>
        </Container>
      </Row>
    </>
    
  )
}


export default Confiance;
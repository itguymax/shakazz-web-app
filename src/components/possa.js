import React from 'react';
import CreatePortefeuille from './common/createPortefeuille';
import CreatePortefeuilleD from './common/createPortefeuilleD';
import {
  FormGroup,
  Form,
  Container,
  Row,
  Col,

} from "reactstrap";

export default function possa() {
  return (
         <Container>
        <Row className="profileColWrapper" >
            <Col xs="6" sm="5" style={{marginBottom:"3em"}}>
                <CreatePortefeuille/>
            </Col>
            <Col xs="6" sm="6" style={{marginBottom:"3em"}}>
                <Container className="" style={{
                      width:"100%",
                      height:"14em",
                      marginLeft:"2em",
                      backgroundColor:"white",
                      borderRadius:"16px",
                      padding:"1em"}}>
                        <CreatePortefeuilleD nb={"1"}/>
                        <CreatePortefeuilleD nb={"2"}/>
                        <CreatePortefeuilleD nb={"3"}/>
                        <CreatePortefeuilleD nb={"4"}/>
                      </Container>
            </Col>
        </Row>
      </Container>
  )
}

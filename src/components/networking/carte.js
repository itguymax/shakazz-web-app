import React from 'react';
import { Container, Row, Col} from "reactstrap";
import Image from 'next/image';


export default function carte(props)  {


    return( 
        <Container>
            <Row>
                <Col className="col-10">
                    <img src = "/assets/img/CV2_front.jpg" style={{
                        position : 'relative',
                        display: 'block',
                        margin: 'auto',
                        width: '70%',
                        height: '70%'
                    }}/>
                </Col>
            </Row>
        </Container>    
  )
}
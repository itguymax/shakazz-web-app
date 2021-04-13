import React from "react";
import Image from 'next/image';

import { Container, Row, Col } from "reactstrap";


export default function RowUnderline(props) {
  return (
    <Container fluid style={{}}>
        <Row style={{ display : 'flex' , flexDirection : 'column' , marginBottom:'2em', paddingLeft:'0px !important'}}>
            <Row style={{borderBottom: '2px solid #888 ', height : '1.75em'}}> 
                <Col onClick={ () => props.selectElement(props.item) } className="col-10" style={{ }}>
                    <p style={{fontSize: '15px', lineHeight: '1.5' , textAlign: 'left', paddingLeft:'0px !important'}}>{props.titre}</p>          
                </Col>
                <Col className="col-2" style={{}}>
                    <Image style= {{ float : 'right'}}
                        src={props.image}
                        alt="..." 
                        height={20} width={20}
                        style={{backgroundColor:"#000"}}  
                    />
                </Col>
            </Row >
        </Row>
    </Container>

  );
}
import React from 'react';
import { Container, Row} from "reactstrap";



export default function link(props)  {

    return( 
        <Container>
            <Row>
                <img src = "/assets/img/qr_code_PNG25.png" style={{
                    position : 'relative',
                    display: 'block',
                    margin: 'auto',
                    width: '70%',
                    height: '70%'
                }}/>
            </Row>
        </Container>
        
    
  )

}
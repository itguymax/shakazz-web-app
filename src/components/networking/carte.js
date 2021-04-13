import React from 'react';
import { Container, Row} from "reactstrap";



export default function carte(props)  {
    return( 
        <Container>
            <Row>
                <img src = "/assets/img/modele-carte-visite-propre_.png" style={{
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
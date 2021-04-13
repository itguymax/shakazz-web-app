import React from 'react';
import { Container, Row} from "reactstrap";



export default function flyer(props)  {
    return( 
        <Container>
            <Row>
                <img src = "/assets/img/modele-presentation-entreprise-moderne-flyer-vector.png" style={{
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
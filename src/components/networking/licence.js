import React from 'react';
import { Container, Row} from "reactstrap";



export default function licence(props)  {

    return( 
        <Container>
            <Row>
                <img src = "/assets/img/Diplome-licence-france.png" style={{
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
import React from 'react';
import { Container, Row} from "reactstrap";



export default function Text(props)  {

    return( 
        <div>
            <p style = {{ fontStyle :'normal', fontSize:'20px', color:'#444444', fontFamily:'Ubuntu', fontWeight:'bold' }}>
                {props.text}
            </p>
        </div>    
  )
}
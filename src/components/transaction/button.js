import React from 'react';
import styled from '@emotion/styled'
import { Container, Row} from "reactstrap";



export default function CustomButton(props)  {

    const Button = styled.button`
    background-color: ${props.color};
    border-radius: 10px; 
    color: white;
    padding: 5px;
    margin : 10px;
    width: 9em;
    border:1px solid ${props.color};
    transition: all .8s ease-in-out;
//     &:hover {
//       color: ${props.color};
//       background-color:white;
//       div.color:${props.color}; 
    //   }
    `

    return( 
        <Button onClick={()=>props.setTab(props.index)}>
            <div style = {{ fontStyle :'normal', fontSize:'15px', color:'#FFFFFF', fontFamily:'Ubuntu', fontWeight:'bold', textAlign:'center'}}>
                {props.nom}
            </div>
        </Button>    
  )
}
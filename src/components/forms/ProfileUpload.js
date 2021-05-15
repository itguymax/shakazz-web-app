import React from 'react';
import {
  FormGroup,
  Col,
} from "reactstrap";
import Image from 'next/image';
import styled from '@emotion/styled';

const Button = styled.button`
    background-color: #679966;
    border-radius: 20px;
    margin-top:1.8em;
    color: white;
    padding:0.6em;
    width:10em;
    border:1px solid #679966;
    font-weight:100;
    transition: all .8s ease-in-out;
    &:hover {
      color: #679966;
      background-color:white;
  }
`

export default function ProfileUpload() {
  return (
    <Col md={12} style={{textAlign:"center"}} >
              <Image
              id="profile_photo"
              src="/assets/img/photoequipe/bisso.png"
              alt="..."
              className="rounded-circle"
              height={200} width={200}
              style={{backgroundColor:"#000",margin:"auto"}}
              />
                      <FormGroup>
                        <Button>Vérificationffs</Button>
                      </FormGroup>
               <Image
                src="/assets/img/free-badge-icon-1361-thumb@2x.png"
                alt="..."                 height={150} width={150}
                style={{backgroundColor:"#000",margin:"auto",marginTop:"1em"}}
                />
            </Col>
  )
}

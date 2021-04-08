import React, { Component } from "react";
import Router from "next/router";
import {css} from '@emotion/react';
import { Container } from "reactstrap";
import Image from "next/image";
import Pi from "../../src/components/pre_inscription";
import Public from '../../src/layouts/Public';
 function PreInscription() {
  return (
    <div>
      <div style={{width:"100%"}}>
        <Container className=" d-flex justify-content-center aling-items-center" fluid style = {{
              minHeight: "600px",
            }}> 
          <Image src= "/assets/img/enconstruction.png" priority={true}  layout="fill"/>
        </Container>
      </div>
      <Pi bleu/>
    </div>
  );
}

PreInscription.layout = Public;
export default PreInscription
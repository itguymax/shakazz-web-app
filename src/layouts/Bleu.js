import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import Image from 'next/image'
// core components

import AuthFooter from "../components/Footers/AuthFooter.js";



function Bleu(props) {
  const router = useRouter();

  return (  
      <Container fluid style={{backgroundColor: '#143427'}}>
         <div className="d-flex" style={{minHeight:'100vh', backgroundColor: '#143427', flexDirection:'column'}}>
         <h3 style={{textAlign: "left", marginTop:'1.25rem'}} className='px-3 mt-4'> 
                <a style={{font:'normal normal bold 25px/29px Ubuntu', color:'#fff' }} href="/portal/dashboard">SHAKAZZ</a>
          </h3>
          <div style={{ margin: '0px auto'}}>
            {props.children}
          </div>
          <AuthFooter white/> 
        </div>  
       </Container>
  );
}

export default Bleu;

import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import Image from 'next/image'
// core components

import AuthFooter from "../components/Footers/AuthFooter.js";
import AdminNavbar from '../components/Navbars/AdminNavbar';
import {Link} from '../components/Link'

function AdminBleu(props) {
  const router = useRouter();
  

  return (  
      <Container fluid style={{backgroundColor: props.wh?"#fff":'#143427'}} >
        <div style={{minHeight: '100vh', backgroundColor: '#143427'}}>
        <AdminNavbar l/>
          <Container>
            {props.children}
            <Row>
            {props.back && <Link path="/portal/depot">{`<--- Retour`}</Link>}
            {props.menu && <Link path="/portal/dashboard">{`<--- Menu`}</Link>}
            <hr style={{backgroundColor: '#679966', height:'2px', width: '100%'}}/>
            </Row>
              <AuthFooter white/>
          </Container>
        </div>
        
       </Container>
  );
}

export default AdminBleu;

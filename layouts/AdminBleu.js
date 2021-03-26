import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import Image from 'next/image'
// core components

import AuthFooter from "../components/Footers/AuthFooter.js";
import AdminNavbar from '../components/Navbars/AdminNavbar';


function AdminBleu(props) {
  const router = useRouter();

  return (  
      <Container fluid style={{backgroundColor: '#143427'}} >
        <div style={{minHeight: '100vh', backgroundColor: '#143427'}}>
        <AdminNavbar l/>
          <Container>
            {props.children}
          </Container>
          <AuthFooter white/>  
        </div>
       </Container>
  );
}

export default AdminBleu;

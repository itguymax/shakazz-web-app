import React from "react";
import Link from "next/link";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button,
  
} from "reactstrap";
import { css } from "@emotion/react";
import { device } from "../../lib/device"
import menuItems from './PublicHeaderData';
import { useRouter } from "next/router";
import  NavigationLink from '../NavigationLink'

function AdminNavbar() {
  const router = useRouter();
 
  const isBlog = router.asPath.startsWith("/blog") ? true: false;
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md" style={{backgroundColor: isBlog?'#fff':'#244230', opacity:1}}>
        <Container className="px-4">
          <Link href="/">
            <span>
              <NavbarBrand href="/">
                {/* <img
                  alt="..."
                  src={require("assets/img/brand/nextjs_argon_white.png")}
                /> */}
                <h3 style={{font: 'normal normal bold 25px/26px Ubuntu', color: isBlog ? '#244230':'#fff', letterSpacing: 0}}>Shakazz</h3>

              </NavbarBrand>
            </span>
          </Link>
          <button className="navbar-toggler" id="navbar-collapse-main">
            
            {isBlog? <svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="80" height="10"></rect>
  <rect y="20" width="80" height="10"></rect>
  <rect y="40" width="80" height="10"></rect>
</svg>:<span className="navbar-toggler-icon" /> }
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link href="/">
                    <img
                      alt="Logo shakazz"
                      src="/assets/img/brand/logo-officiel-shakazz.png"
                      style={{width: "100px", height:"100px"}}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main" 
                 
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
            {
              menuItems.map(({path, label}, i)=>(
              <NavItem key={i}>
               <NavigationLink label={label} href={path}/>
              </NavItem>    
              ))
            }
            
             
            </Nav>
             <div className="text-center" css={css`
                  @media ${device.smMobileMax}{
                    margin-bottom: 10px;
                    margin-top: 10px;
                  }
               `}>
               <Button 
               onClick={()=> router.push('/auth/login')}
               className="btn-white mr-lg-3" 
               style={{height: '40px', border: '2px solid #707070', width: '130px', border:"1px solid #707070 "}}
               
               >Connexion</Button>
              </div>
              <div className="text-center">
               <Button 
               onClick={()=> router.push('/auth/register')}
               style={{height: '40px', border:'none', color:"#fff", width: '130px', backgroundColor:"#707070"}} 
               className="btn-default"
              
               >Inscription</Button>
              </div>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;

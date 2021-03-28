import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import Image from 'next/image'
// core components
import AuthNavbar from "../components/Navbars/AuthNavbar.js";
import AuthFooter from "../components/Footers/AuthFooter.js";
import styled from 'styled-components';



function Auth(props) {
  const router = useRouter();
  React.useEffect(() => {
      console.log("router", router);
    document.body.classList.add("bg-default");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  }, []);
  return (  
      <Container fluid >
        {/* <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div> */}
        {/* Page content */}
         <div className="main-content row" style={{minHeight:'100vh'}}>
          <Col lg="6" style={{backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center'}}> 
             <h3 style={{textAlign: "left", marginTop:'1.25rem'}}>
                <a href="/">SHAKAZZ</a>
              </h3>
              <div style={{width:'400px', height:'400px', margin:'50px auto 0px auto'}}>
                <Image  
                  src={ router.pathname === "/auth/login" ? "../assets/img/login.png": "../assets/img/inscription.png"}
                  // layout="responsive"
                  width={500}
                  height={500}
                  className="object-center object-cover pointer-events-none"
                  alt= {router.pathname === "/auth/login" ? "Login page ilustration": "register page ilustration"}
                /> 
              </div>
              <AuthFooter />  
          </Col>
          <Col lg="6" className="bg-white" >
              <>{props.children}</>
          </Col>
        </div>  
       </Container>
  );
}

export default Auth;

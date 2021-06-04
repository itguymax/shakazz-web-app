/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
import {css} from "@emotion/react";
import {device} from "../../lib/device";
function AuthFooter(props) {
  return (
    <>
      <footer className="pl-0" style={{position:'absolute', bottom:'0px'}} 
      css={css`

      `}>
        <Container>
          <Row>
              <div className="copyright text-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://shakazz.com"
                  target="_blank"
                  style={{color: props.white?"#fff":null}}
                >
                  Shakazz
                </a>{" "} 
                <span>Tous les droits sont réservés.</span>
              </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default AuthFooter;

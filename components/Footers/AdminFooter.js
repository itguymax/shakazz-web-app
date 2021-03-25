/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://www.itguymax.com"
              rel="noopener noreferrer"
              target="_blank"
            >
             SHAKAZZ. Tous les droits sont reservés
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="https://www.itguymax.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                SHAKAZZ
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://www.itguymax.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                à propos
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://www.itguymax.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Blog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://www.itguymax.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                License Networking
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;

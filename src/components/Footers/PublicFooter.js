/*eslint-disable*/
import React from "react";
import menuItems from './PublicFooterData';
import { device } from '../../lib/device';
import {css} from "@emotion/react";
// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function PublicFooter() {
  return (
    <>
      <footer className="px-3" style={styles.footer}>
        <Container style={styles.footer.container}>
          <Row style={styles.footer.footerTopArea}>
             <Col md="4" style={styles.footer.footerTopArea}>
                <h1>
                  Shakazz
                </h1>
                <h5

                >Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum.</h5>
             </Col>
             <Col md="8">
                <Nav style={styles.footer.menuArea}>
                    {menuItems &&
                      menuItems.map(({ header, items }, i) => (
                        <div style={styles.footer.menus} key={i}>
                          <h3 style={styles.footer.heading}>{header}</h3>
                          <nav>
                            {items.map(({ path, label, name, icon }, i) => (
                              <NavLink
                                className={name}
                                path={path}
                                key={i}
                                style={styles.footer.link}
                              >
                                {label}
                              </NavLink>
                            ))}
                          </nav>
                        </div>
                      ))}
                </Nav>
             </Col>
          </Row>
           {/* <div className="home_page_footer home_page_footer_last">
                <Navbar className="home_page_footer" collapseOnSelect expand="lg">
                  <Navbar><p>©Shakazz All Right Reserved</p></Navbar>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                      <Nav eventKey={2} href="#memes">
                        Français
                      </Nav>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
          </div> */}
        </Container>
      </footer>
    </>
  );
}

export default PublicFooter;

const styles = {
  footer: {
    backgroundColor: '#333333',
    container: {
      width: '100%',
      alignItems: 'stretch',
      paddingTop: '100px',
      paddingBottom: '100px'
    },
    footerTopArea: {
      display: 'flex',
      flexWrap: 'wrap',
     
    },
    menuArea: {
     
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      pb: 3,
    },
    menus: {
      display: 'flex',
      flexDirection: 'column',
      // mb: ['45px', null, null, '50px', '60px'],
      // pr: 3,
      // width: ['50%', null, null, '25%'],
    },

    heading: {
      fontSize: '18px',
      color: '#FFFFFF',
      font:'normal normal bold 28px/32px Ubuntu',
      litterSpacing: '0px',
      opacity: 1,
      // mb: [4, null, null, null, 5, 6],
      lineHeight: '1.35',
    },

    link: {
      fontSize: ['14px', 1],
      color: 'text_secondary',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      // lineHeight: [1.5, null, 1.9],
      svg: {
        width: '17px',
        mr: 2,
        fontSize: 2,
        flexShrink: 0,
      },
      '&.facebook > svg': {
        color: '#3B5998',
      },
      '&.twitter > svg': {
        color: '#55ACEE',
      },
      '&.github > svg': {
        color: '#161614',
      },
      '&.dribbble > svg': {
        color: '#E74D89',
      },
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
  },
  copyrightArea: {
    // width: ['100%', null, null, null, '250px', '300px'],
    flexShrink: 0,
    // order: [2, null, null, null, 0],
    // textAlign: ['center', null, null, null, 'left'],
    '.footer__logo': {
      a: {
        mr: 0,
        // img: {
        //   mx: ['auto', null, null, null, 0],
        // },
      },
    },
    '.footer__menu': {
      display: 'flex',
      // justifyContent: ['center', null, null, null, 'flex-start'],
      flexWrap: 'wrap',
      // mt: [3, null, null, null, 4],
      a: {
        // fontSize: ['14px', 1],
        color: 'text_secondary',
        fontWeight: 'body',
        mb: 1,
        cursor: 'pointer',
        transition: 'all 0.35s',
        textDecoration: 'none',
        // lineHeight: [1.5, null, 1.9],
        ':before': {
          px: 2,
          content: '"|"',
          // color: 'text_secondary',
        },
        ':first-of-type:before': {
          display: 'none',
        },
        ':hover': {
          color: 'primary',
        },
      },
    },
    copyright: {
      // fontSize: ['14px', 1],
      color: '#6D7886',
      pt: 1,
    },
  },
};


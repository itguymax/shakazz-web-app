// /*eslint-disable*/
// import React from "react";
// import menuItems from './PublicFooterData';
// import { device } from '../../lib/device';
// import {css} from "@emotion/react";
// // reactstrap components


// function PublicFooter() {
//   return (
//     <>
//       <footer className="px-3" style={styles.footer}>
//         <Container style={styles.footer.container}>
//           <Row style={styles.footer.footerTopArea}>
//              <Col md="4" style={styles.footer.footerTopArea}>
//                 <h1>
//                   Shakazz
//                 </h1>
//                 <h5

//                 >Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum.</h5>
//              </Col>
//              <Col md="8">
//                 <Nav style={styles.footer.menuArea}>
//                     {menuItems &&
//                       menuItems.map(({ header, items }, i) => (
//                         <div style={styles.footer.menus} key={i}>
//                           <h3 style={styles.footer.heading}>{header}</h3>
//                           <nav>
//                             {items.map(({ path, label, name, icon }, i) => (
//                               <NavLink
//                                 className={name}
//                                 path={path}
//                                 key={i}
//                                 style={styles.footer.link}
//                               >
//                                 {label}
//                               </NavLink>
//                             ))}
//                           </nav>
//                         </div>
//                       ))}
//                 </Nav>
//              </Col>
//           </Row>
//            {/* <div className="home_page_footer home_page_footer_last">
//                 <Navbar className="home_page_footer" collapseOnSelect expand="lg">
//                   <Navbar><p>©Shakazz All Right Reserved</p></Navbar>
//                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                   <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="mr-auto">
//                     </Nav>
//                     <Nav>
//                       <Nav eventKey={2} href="#memes">
//                         Français
//                       </Nav>
//                     </Nav>
//                   </Navbar.Collapse>
//                 </Navbar>
//           </div> */}
//         </Container>
//       </footer>
//     </>
//   );
// }

// export default PublicFooter;

// const styles = {
//   footer: {
//     backgroundColor: '#333333',
//     container: {
//       width: '100%',
//       alignItems: 'stretch',
//       paddingTop: '100px',
//       paddingBottom: '100px'
//     },
//     footerTopArea: {
//       display: 'flex',
//       flexWrap: 'wrap',
     
//     },
//     menuArea: {
     
//       justifyContent: 'space-between',
//       flexWrap: 'wrap',
//       pb: 3,
//     },
//     menus: {
//       display: 'flex',
//       flexDirection: 'column',
//       // mb: ['45px', null, null, '50px', '60px'],
//       // pr: 3,
//       // width: ['50%', null, null, '25%'],
//     },

//     heading: {
//       fontSize: '18px',
//       color: '#FFFFFF',
//       font:'normal normal bold 28px/32px Ubuntu',
//       litterSpacing: '0px',
//       opacity: 1,
//       // mb: [4, null, null, null, 5, 6],
//       lineHeight: '1.35',
//     },

//     link: {
//       fontSize: ['14px', 1],
//       color: 'text_secondary',
//       fontWeight: 'body',
//       mb: 2,
//       cursor: 'pointer',
//       transition: 'all 0.35s',
//       display: 'flex',
//       alignItems: 'center',
//       textDecoration: 'none',
//       // lineHeight: [1.5, null, 1.9],
//       svg: {
//         width: '17px',
//         mr: 2,
//         fontSize: 2,
//         flexShrink: 0,
//       },
//       '&.facebook > svg': {
//         color: '#3B5998',
//       },
//       '&.twitter > svg': {
//         color: '#55ACEE',
//       },
//       '&.github > svg': {
//         color: '#161614',
//       },
//       '&.dribbble > svg': {
//         color: '#E74D89',
//       },
//       ':hover': {
//         color: 'primary',
//       },
//       ':last-child': {
//         mb: '0px',
//       },
//     },
//   },
//   copyrightArea: {
//     // width: ['100%', null, null, null, '250px', '300px'],
//     flexShrink: 0,
//     // order: [2, null, null, null, 0],
//     // textAlign: ['center', null, null, null, 'left'],
//     '.footer__logo': {
//       a: {
//         mr: 0,
//         // img: {
//         //   mx: ['auto', null, null, null, 0],
//         // },
//       },
//     },
//     '.footer__menu': {
//       display: 'flex',
//       // justifyContent: ['center', null, null, null, 'flex-start'],
//       flexWrap: 'wrap',
//       // mt: [3, null, null, null, 4],
//       a: {
//         // fontSize: ['14px', 1],
//         color: 'text_secondary',
//         fontWeight: 'body',
//         mb: 1,
//         cursor: 'pointer',
//         transition: 'all 0.35s',
//         textDecoration: 'none',
//         // lineHeight: [1.5, null, 1.9],
//         ':before': {
//           px: 2,
//           content: '"|"',
//           // color: 'text_secondary',
//         },
//         ':first-of-type:before': {
//           display: 'none',
//         },
//         ':hover': {
//           color: 'primary',
//         },
//       },
//     },
//     copyright: {
//       // fontSize: ['14px', 1],
//       color: '#6D7886',
//       pt: 1,
//     },
//   },
// };


/*eslint-disable*/
import React from "react";
import menuItems from './PublicFooterData';
 import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
// reactstrap components
import {css} from "@emotion/react";

function PublicFooter() {
  return (
    <footer style={{backgroundColor: "#333333",
  color: "#fff"}}>
         <Container className="py-7 " fluid css={css` 
          img{
            height:40px;
            width: 40px;
          },
          h1,h2,h5,a{
            color: #fff;
          }
          h5,a {
            font-weight:200;
            font-size: 14px;
            
            text-aling: center;
            width: 200px;
          }
          h5{
            margin-bottom: 15px;
          }
          a{
            margin-bottom: 10px;
          }
          h2{
            font-weight:bold;
            font-size: 1em;
          }
          h1{
            font-weight:bold;
            font-size: 1.5em;
          }
          .l{
            display: flex;
            flex-direction:column;
            justify-content-center: space-between;
          }
          .i img {
            height:25px;
            width: 25px;
            margin-bottom: 0px;
          }
         
         
         `}>
            <Row className="px-6 d-flex justify-content-center">
              <Col xl="3" md="3" sm="10" className="mb-4 l">
                 <h1>SHAKAZZ</h1>
                  <h5>Shakazz est une plateforme de solutions financières par le biais des cryptomonnaies.</h5>
                    <Row style={{width:"250px"}}>
                      <Col xs="3"><a href="https://www.facebook.com/shakazzcorp/" target="_blank"><img id="navImg1" src="/assets/img/fbk@300x.png"/></a></Col>
                      <Col xs="3"><a href="https://www.linkedin.com/company/shakazzcorp/about/?viewAsMember=true" target="_blank"><img id="navImg1" src="/assets/img/linkind@300x.png"/></a></Col>
                      <Col xs="3"><a href="https://twitter.com/shakazzcorp" target="_blank"><img id="navImg1" src="/assets/img/twitter@300x.png"/></a></Col>
                    </Row>
              </Col>
              <Col xl="3" md="3" sm="10" className="mb-4 l">
                <h2>Services</h2>
                <a href="/services">Crowndlending &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a>
                <a href="/services">Networking</a>
              </Col>
              <Col xl="3" md="3" sm="10" className="mb-4 l">
                <h2>Légal</h2>
                <a>Condition d'utilisation</a>
                <a>Politique de confidentialité</a>
              </Col>
              <Col xl="3" md="3" sm="10" className="mb-4 l i">
                 <h2>Contact</h2>
                  <div><img src="/assets/img/mail.png"/><a>contact@shakazz.com</a></div>
                  <div><img src="/assets/img/call.png"/> <a>+237 691 273 540</a> </div>
              </Col>
            </Row>
         </Container> 
           <div style={{borderTop: "1px solid #fff"}} css={css`
            img{
              height:30px;
              width:30px;
            }
            padding: 12px 15px 12px 15px;
            display: flex;
            justify-content: space-between;
            align-items-center: center;
            p{
              font-weight: 100;
              color: #A7A7A7;
            }
            
           `} >
             <p>©Shakazz All Right Reserved</p>
              <div><img id="navImg1" src="/assets/img/language.png"/> Français</div>
          </div>
    </footer>
  );
}

export default PublicFooter;



{/* <div className="home_page_footer home_page_footer_first">
                <ul>
                  <h1>SHAKAZZ</h1>
                  <li><h5>Shakazz est une plateforme de solutions financières par le biais des cryptomonnaies.</h5></li>
                    <Row>
                      <Col xs="3"><a href="https://www.facebook.com/shakazzcorp/" target="_blank"><img id="navImg1" src="/assets/img/fbk@300x.png"/></a></Col>
                      <Col xs="3"><a href="https://www.linkedin.com/company/shakazzcorp/about/?viewAsMember=true" target="_blank"><img id="navImg1" src="/assets/img/linkind@300x.png"/></a></Col>
                      <Col xs="3"><a href="https://twitter.com/shakazzcorp" target="_blank"><img id="navImg1" src="/assets/img/twitter@300x.png"/></a></Col>
                    </Row>
                </ul>
                <ul>
                  <h2>Services</h2>
                  <li><a href="/services">Crowndlending &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a></li>
                  <li> <a href="/services">Networking</a></li>
                </ul>
                <ul>
                  <h2>Légal</h2>
                  <li><a>Condition d'utilisation</a></li>
                  <li><a>Politique de confidentialité</a></li>
                </ul>
                <ul>
                  <h2>Contact</h2>
                  <li><img src="/assets/img/mail.png"/>contact@shakazz.com</li>
                  <li><img src="/assets/img/call.png"/> +237 691 273 540</li>
                </ul>
          </div>
          <div className="home_page_footer home_page_footer_last">
                <Navbar className="home_page_footer" collapseOnSelect expand="lg">
                  <Navbar><p>©Shakazz All Right Reserved</p></Navbar>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                      <Nav eventkey={2} href="#memes">
                        <img id="navImg1" src="/assets/img/language.png"/> Français
                      </Nav>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
          </div> */}
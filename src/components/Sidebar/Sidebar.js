/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
import Image from "next/image";
import {Global,css} from "@emotion/react";
import { device } from '../../lib/device';
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  Navbar,
  Container,
  Col,
  Row,
  Media ,
  Collapse,
  Form,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  UncontrolledDropdown,
  DropdownToggle,
  Nav,
} from "reactstrap";
import { logOutUser } from "../../services/auth.service";


function Sidebar(props) {
  // used for checking current route
  const router = useRouter();
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [isOpen, openSubmenu] = React.useState(false);
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return router.route.indexOf(routeName) > -1;
  };

  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
    openSubmenu(!isOpen);
  };
  const createSubLink = (subLinks) => {

        return subLinks.map((level, i)=> {

            return <div className="my-2">
              <Link href={level.layout + level.path}>
              <span className="sb_sidebar_item" style={{cursor:"pointer", color:"#fff", fontWeight:"100", opacity: activeRoute(level.layout + level.path)? 0.5:1, fontSize:"0.7rem"}}>{level.displayName}</span>
              </Link>
            </div>
          });
  }

    const { routes, logo } = props;
  let navbarBrand = (
    <NavbarBrand href="/" className="pt-0">
      <img alt={logo.imgAlt} className="navbar-brand-img" src={logo.imgSrc} />
    </NavbarBrand>
  );
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {

    return routes.map((prop, key) => {


      return (
        <React.Fragment key={key}>
        {prop.children.length > 0 ? (
          <>
          <Global
          styles={css`
            @media ${device.mPhone} {
              }
            @media ${device.bPhone} {
              .sb_sidebar_item{
                color:black !important;
              }
            }
          `}
          />
          <NavItem  active={activeRoute(prop.layout + prop.path)} className="mb-3">
            <Link href={prop.layout + prop.path}>
              <NavLink
                href="#itguymax"
                active={activeRoute(prop.layout + prop.path)|| prop.childrenRoutes.indexOf(router.pathname) > -1}
                onClick={closeCollapse}
              >
              <img className="mr-2"  src={activeRoute(prop.layout + prop.path) || prop.childrenRoutes.indexOf(router.pathname) > -1? prop.icon1: prop.icon2} style={{width:"15px", height:"20px" }}/>
                {/* <i className={prop.icon} /> */}
                <span className="sb_sidebar_item" style={{color:(activeRoute(prop.layout + prop.path) || prop.childrenRoutes.indexOf(router.pathname) > -1)? "#143427":"#fff" }}>{prop.name}</span>

                 {(activeRoute(prop.layout + prop.path) || prop.childrenRoutes.indexOf(router.pathname) > -1)?<span  className="arrow up  ml-3 mb--1"/>:<span  className="arrow down ml-3 mb--1"/>}
              </NavLink>
            </Link>
            <div className="ml-5 pl-2">
              {(activeRoute(prop.layout + prop.path) || prop.childrenRoutes.indexOf(router.pathname) > -1) && createSubLink(prop.children)}
            </div>
          </NavItem>
          </>
        ) : (
           <NavItem  active={activeRoute(prop.layout + prop.path)} className="mb-3">
          <Link href={prop.layout + prop.path}>
            <NavLink
              href="#itguymax"
              active={activeRoute(prop.layout + prop.path)}
              onClick={closeCollapse}
            >
             <img className="mr-2"  src={activeRoute(prop.layout + prop.path)? prop.icon1: prop.icon2} style={{width:"15px", height:"20px" }}/>
              {/* <i className={prop.icon} /> */}
              <span className="sb_sidebar_item" style={{color:activeRoute(prop.layout + prop.path)? "#143427":"#fff" }}>{prop.name}</span>
            </NavLink>
          </Link>

        </NavItem>
        )}
      </React.Fragment>
      );
    });
  };

  return (
    <Navbar color="faded" light
      className="navbar-vertical fixed-left"
      expand="sm"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="mr-2 navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Brand */}
        {logo && logo.innerLink ? (
          <Link href={logo.innerLink}>
            <span>{navbarBrand}</span>
          </Link>
        ) : null}
        {logo && logo.outterLink ? (
          <a href={logo.innerLink} target="_blank">
            {navbarBrand}
          </a>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src="/assets/img/theme/team-1-800x800.jpg"
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <Link href="/portal/profile">
                <DropdownItem>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
              </Link>
              <DropdownItem divider />
              <DropdownItem href="#itguymax" onClick={(e) => {
                e.preventDefault();
                logOutUser(router);
              }}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link href={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Navigation */}
          <Nav navbar

          css={css`
            .nav-link {

              font-weight: 100;
            }
          `}
          >{createLinks(routes)}</Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          {/* <h6 className="navbar-heading text-muted">Documentation</h6> */}
          {/* Navigation */}
          <Nav className="mb-md-3 bottom" navbar>
            <NavItem>
              <NavLink href="#itguymax" onClick={(e) => {
                e.preventDefault();
                logOutUser(router);
              }}>
                <img className="mr-2" src="/assets/img/icons/dashboard/disconnexion1.svg" style={{width:"15px", height:"20px" }} />
               <span style={{color: "#fff", fontWeight: "100"}}> Déconnexion</span>
              </NavLink>
            </NavItem>
          </Nav>
          {/* <Nav className="mb-md-3" navbar>
            <NavItem className="active-pro active">
              <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=njsad-portal-sidebar">
                <i className="ni ni-spaceship" />
                Upgrade to PRO
              </NavLink>
            </NavItem>
          </Nav> */}
        </Collapse>
      </Container>
    </Navbar>
  );
}

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link href="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;

import React from "react";
import Link from "next/link";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import { logOutUser } from "../../services/auth.service";
import { useRouter } from "next/router";
import {useAppContext} from "../../context";
import {  useFetchUserInfos } from "../../hooks";


function AdminNavbar({ brandText, l }) {
  const router = useRouter();
  const context = useAppContext();
   const { data, isLoading } = useFetchUserInfos(context.appState.accessToken);
   console.log("user dataaaaaaaaaa", data);
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link href="/">
            <>
              {l&& <h3 style={{textAlign: "left", marginTop:'1.25rem'}} className='px-3 mt-4'> 
                <a style={{font:'normal normal bold 25px/29px Ubuntu', color:'#fff' }} href="/">SHAKAZZ</a>
          </h3>}
            <a className="h4 mb-0  font-weight-bold text-uppercase d-none d-lg-inline-block">
              {brandText}
            </a>
            </>
          </Link>
          {/* <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form> */}
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt={data?.data.user?.lastName + "avatar"}
                      src={ data?.data.user?.avatarUrl || "/assets/img/def-user-profile.png"}
                    /> 
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {data?.data.user.lastName}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <Link href="/portal/profile">
                  <DropdownItem>
                    <i className="ni ni-single-02" />
                    <span>Mon profile</span>
                  </DropdownItem>
                </Link>
                <DropdownItem divider />
                <DropdownItem href="#itguymax" onClick={(e) => {
                  e.preventDefault();
                  logOutUser(router)
                }}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;

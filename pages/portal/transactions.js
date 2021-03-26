import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  
} from "reactstrap";
// layout for this page
import Portal from "../../layouts/Portal.js";
// core components
import Header from "../../components/Headers/Header.js";

function Transactions() {
  return (
    <>
      {/* <Header /> */}
      {/* Page content */}
      <Container fluid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}>
       <p> Transactions</p>
     </div>
      </Container>
    </>
  );
}

Transactions.layout = Portal;

export default Transactions;

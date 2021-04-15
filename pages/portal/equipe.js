import React from 'react';
import { Container } from 'reactstrap';
import WalletHeader from "../../src/layouts/WalletHeader";
import user from "../../src/__MOCK__/user";
import Portal from "../../src/layouts/Portal";

 function Equipe() {
  return (
    <>
      <Container fluid>
        <WalletHeader wallets={user.wallet}/>

      </Container>
    </>
  )
}

Equipe.layout = Portal;

export default Equipe;
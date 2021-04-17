import React from 'react';
import { Container } from 'reactstrap';
import Image from "next/image";
import LightBoxContainer from "../components/common/lightBoxContainer";
import user from "../__MOCK__/user";

export default function WalletHeader({wallets}) {
  const badge ="starter";
  return (
    <>
     <Container fluid  style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Image src={`/assets/img/badges/${badge}.png`} width={50} height={50} priority={true}/>
            <small>starter</small>
          </div>
           {
             wallets.map((wallet, key)=>{

               return  <LightBoxContainer width="250px" height="50px" key={key}>
                <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <small>{wallet.name}</small>
                  <p>{wallet.amount} $</p>
                </div>
          </LightBoxContainer>
             })
           }   
     </Container>
      <hr style={{backgroundColor: '#b7b7b7', marginBottom: '10px', marginTop: '10px', height:"2px"}}/>
    
    </>
  );
}



import React,{useEffect, useState} from 'react';
import { Container } from 'reactstrap';
import Image from "next/image";
import LightBoxContainer from "../components/common/lightBoxContainer";
import user from "../__MOCK__/user";
import config from '../config'
export default function WalletHeader({wallets}) {
 const [grade, setgrade]= useState('');
 useEffect(()=>{
   if(typeof window !== "undefined" && localStorage.getItem(config.info)){
     const lgrade = JSON.parse(localStorage.getItem(config.info));
     setgrade(lgrade.grade);
   }
 })
  const badge ="starter";
  return (
    <>
     <Container fluid className="lightBoxContainerHeaderFluid" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Image src={`/assets/img/badges/${badge}.png`} width={50} height={50} priority={true}/>
            <small>{grade}</small>
          </div>
           {
             wallets.map((wallet, key)=>{

               return  <LightBoxContainer key={key}>
                <div className="lightBoxContainerHeaderDiv" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <small>{`Wallet ${wallet.type} `}</small>
                  <p>{(wallet.montantUSD || 0).toLocaleString('en-US', { style: 'currency', currency: 'USD',})}</p>
                </div>
          </LightBoxContainer>
             })
           }
     </Container>
      <hr style={{backgroundColor: '#b7b7b7', marginBottom: '10px', marginTop: '10px', height:"2px"}}/>

    </>
  );
}

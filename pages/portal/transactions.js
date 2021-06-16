import React, { useState, useEffect} from "react";
import withAuth from '../../src/hoc/withAuth'
// reactstrap components
import {
  Container,
  Row
} from "reactstrap";
// layout for this page
import Portal from "../../src/layouts/Portal.js";
// core components
import Text from "../../src/components/transaction/divText";
import Button from "../../src/components/transaction/button";
import NavPil from "../../src/components/transaction/navPil";
import FakeData from "../../src/__MOCK__/transaction"
import  { Link } from "../../src/components/Link";
import { useAppContext } from '../../src/context';
import {useFetchAlltransactions,useFetchWallettransactions} from '../../src/hooks';
import { useWallets} from "../../src/hooks";
import DataLoader from "../../src/components/common/DataLoader";

function Transactions() {

  const context = useAppContext();
  const {data:allWallet, isLoading, isFetching, isSuccess} = useWallets(context.appState.accessToken);
  const [currentHTabsIcons, setHTabsIcons] = useState("hTabsIcons-1");
  const [activeButton, setActiveButton] = useState("");
  const [page, setPage] = useState(1);
  const [element, setElement] = useState(10);
  const {mutateAsync} = useFetchWallettransactions();
  const {mutateAsync: allMutation } = useFetchAlltransactions();
  const [transData, setTransData] = useState([])
  
  function indexPrimaty(tabIndex){
      setHTabsIcons("hTabsIcons-1");
  }
  const fetchInitData = async () => {
    const body = {
     page, element
   }
    const {data: initData} = await allMutation({accessToken:context.appState.accessToken, data:body});
    console.log("init data", initData);
    setTransData(initData.transactions);
  }
 const fetchwData = async (type) => {
   const body = {
     type, page, element
   }
   try {
  const {data:wd, isSuccess: isSuccessw} = await mutateAsync({accessToken:context.appState.accessToken, data:body});
   console.log("hhhhhhhhh", wd);
   setTransData(wd?.transactions)
   return wd;
   } catch(err) {
     console.log(err);
   }
 }
  const handleSetHTabs = async (indic) => {
    console.log("transaction data", indic);
     setHTabsIcons(indic);
     
    switch (indic) {
      case "hTabsIcons-1" :
      // all
        fetchInitData();
        break;
      case "hTabsIcons-2" :
      // principal
         let wal1 = allWallet?.data.wallets[allWallet?.data.wallets.findIndex((w) => w.type === "principal")];
          let re = await  fetchwData(wal1.type);
       
         console.log("wal indexed", wal1, re);
        break;
      case "hTabsIcons-3" :
      // vault
         let wal2 = allWallet?.data.wallets[allWallet?.data.wallets.findIndex((w) => w.type === "vault")];
           let re2 = await  fetchwData(wal2.type);
         console.log("wal indexed", wal2, re2);
        break;
      case "hTabsIcons-4" :
      // networking
         let wal3 = allWallet?.data.wallets[allWallet?.data.wallets.findIndex((w) => w.type === "networking")];
           let re3 = await  fetchwData(wal3.type);
         console.log("wal indexed", wal3, re3);
        break;
      case "hTabsIcons-5" :
      // networking
         let wal4 = allWallet?.data.wallets[allWallet?.data.wallets.findIndex((w) => w.type === "transfert")];
           let re4 = await  fetchwData(wal4.type);
         console.log("wal indexed", wal4, re4);
        break;
      default:
        break;
    }
   
  }

  useEffect(()=> {
    fetchInitData();
  },[])

  let data = FakeData();
  if(isLoading) return <DataLoader/>;
  console.log("walletssss", allWallet?.data.wallets);
  console.log("data......", transData);
  return (
    <Portal>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Text text = "Faites une transaction:"/>
        </Row>
        <Row className="justify-content-md-center">
          <Link label="Dépot" path="/portal/depot" style={{ margin: '10px',height:'35px' ,backgroundColor: '#007A5E', cursor:'pointer', padding:'8px', borderRadius:'10px', width:'9em',fontStyle :'normal', fontSize:'15px', color:'#FFFFFF', fontFamily:'Ubuntu', fontWeight:'bold', textAlign:'center'}}/>
          <Link label="Retrait" path="/portal/retrait" style={{ margin: '10px',height:'35px' ,backgroundColor: '#CE1126', cursor:'pointer', padding:'8px', borderRadius:'10px', width:'9em',fontStyle :'normal', fontSize:'15px', color:'#FFFFFF', fontFamily:'Ubuntu', fontWeight:'bold', textAlign:'center'}}/>
          <Link label="Transfert" path="/portal/transfert" style={{ margin: '10px',height:'35px' ,backgroundColor: '#CC9933', cursor:'pointer', padding:'8px', borderRadius:'10px', width:'9em',fontStyle :'normal', fontSize:'15px', color:'#FFFFFF', fontFamily:'Ubuntu', fontWeight:'bold', textAlign:'center'}}/>
        </Row>
        <Row >
          <Text text = "Historique"/>
        </Row>
        <NavPil data = {transData} handleSetHTabs =  {handleSetHTabs}  currentHTabsIcons =  {currentHTabsIcons}/>
      </Container>
      </Portal>
  );
}


export default  withAuth(Transactions);

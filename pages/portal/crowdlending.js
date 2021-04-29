import React, { useState, useEffect} from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Form,
  Button,
  
} from "reactstrap";
// layout for this page
import Portal from "../../src/layouts/Portal";
// core components

import Header from "../../src/components/Headers/Header.js";
import WalletHeader from "../../src/layouts/WalletHeader"
import user from "../../src/__MOCK__/user";
import pools from "../../src/__MOCK__/pools";
import coffres from "../../src/__MOCK__/coffres";
import LightBoxContainer from '../../src/components/common/lightBoxContainer';
import { ArrowButton , FlatButton} from "../../src/components/common/SButton";
import Sinput from "../../src/components/forms/Sinput";
import SimulationTable from "../../src/components/SimulationTable";
import Coffre from "../../src/components/coffre";
import Router from "next/router";
import withAuth from '../../src/hoc/withAuth';

const Crowdlending = () => {
 
  const [copiedText, setCopiedText] = useState();
  const [toggle, setToggle] = useState(false);
  const [is360, set360] = useState(true);
  const [is720, set720] = useState(false);
  const [is1080, set1080] = useState(false);
  const [is1800, set1800] = useState(false);
  const [capital, setCapital] = useState(100);
  // const [taux, setTaux] = useState(7.5);
  const [coffreDatas, setCoffreDatas] = useState([]);
  const [selectedPool, setSelectedPool] = useState( 
      {
     id: 1,
     name: "Pool mensuelle",
     percentage: "7.5%",
     taux360:7.5,
     taux720: 8.5,
     taux1080: null,
     taux1800: null,
     frequence: 30
  }
  );
 



  const periode360 = () => {
    console.log("360");
    set360(true);
    set720(false);
    set1080(false);
    set1800(false);
  };
  const periode720 = () => {
     set720(true);
     set360(false);
     set1080(false);
    set1800(false);
  };
  const periode1080 = () => {
     set720(false);
     set360(false);
     set1080(true);
    set1800(false);
  };
  const periode1800 = () => {
     set720(false);
     set360(false);
     set1080(false);
    set1800(true);
  };
  const onArrowClick = (pool) => {
    periode360();
    setSelectedPool(pool);
    console.log("arrow clicked", pool);
  };
  const onInputChange = (event)=> {
    console.log(parseInt(event.target.value));
    setCapital(parseInt(event.target.value));
  };
  const periode = is360?360:is720?720:is1080?1080:1800;
   let t = 7.5;
  if(periode===360){
    t = selectedPool.taux360;
    console.log("taux", selectedPool.taux360)
  } else if (periode===720){
    t = selectedPool.taux720;
  } else if (periode===1080){
    t = selectedPool.taux1080;
  } else{
    t = selectedPool.taux1800;
  }
  const mesCoffres = [];

  const ouvrirCoffre = () => {
    let coffredata = {
      poolName: selectedPool.name,
      capital: capital,
      interet: (parseInt(capital) * (parseFloat(t)/100)) * (periode / selectedPool.frequence),
      periode: periode,
      createdAt: new Date(),

    }
    alert("creation coffre fort");
    
    setCoffreDatas([...coffreDatas, coffredata]);
    console.log("coffre fort", coffreDatas);
  }
 console.log("coffre fort2", coffreDatas);
  return (
    <>
      <Container fluid>
      <WalletHeader wallets={user.wallet}/>
      <Button onClick={()=> Router.push("equipe") }> Equipe</Button>
     <Row className="mt-xl-3 mb-5">
       <Col xl={4}>
        <h2 className="mb-xl-5" style={{font: "normal normal bold 30px/36px Ubuntu", color: "#444"}}>Ouvrir un coffre fort</h2>
         {
           pools.map((pool, key)=>{
             return <LightBoxContainer width="100%" key={key}>
                  <div className="py-0 px-3"  style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <small  className="text-center" style={{color: "#707070",font: "normal normal bold 16px/24px Ubuntu", width:"100px"}}>{pool.name}</small>
                  <span className="text-center" style={{font: "normal normal bold 33px/60px Ubuntu",color: "#707070"}}>{pool.percentage}</span>
                  <ArrowButton labelColor="#cc9933" label="Ouvrir" arrowImage="/assets/img/arrow-gold.svg" handleClick={() => onArrowClick(pool)}/>
                </div>
             </LightBoxContainer>
           })
         }
       </Col>
       <Col xl={8}>
          <LightBoxContainer borderR="20px" width="100%">
              <Form >
                <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderBottom: "2px solid #b7b7b7" }}>
                <h2 className="" style={{font: "normal normal bold 20px/36px Ubuntu", color: "#444"}}>Montant à bloquer</h2>
                <small>{selectedPool.name}</small>
                  <Sinput
                      name="montant"
                      placeholder=""
                      register={()=>{}}
                      inputBg="#FFF"
                      iStyle={{border:'1px solid #707070', borderRadius:"25px", overflow:"hidden", width:"250px"}}
                      inputBg="#fff"
                      type="number"
                      handleOnchange={onInputChange}
                      inputvalue={capital}    
                  />
                  <small>minimum d'investissement est de 100 $</small>
                  <div className="mb-4 mt-5">
                    {selectedPool.taux360 && <FlatButton disabled={is360} label="360" width="90px" bgc={is360?"#cc9933":"#444"} handleClick={ periode360}/>}
                    {selectedPool.taux720 && <FlatButton disabled={is720} label="720" width="90px"  bgc={is720?"#cc9933":"#444"} handleClick={ periode720}/>}
                    {selectedPool.taux1080 &&  <FlatButton disabled={is1080} label="1080" width="90px"  bgc={is1080?"#cc9933":"#444"} handleClick={ periode1080}/>}
                     {selectedPool.taux1800 &&  <FlatButton disabled={is1800} label="1800" width="90px"  bgc={is1800?"#cc9933":"#444"} handleClick={ periode1800}/>}
                  </div>
                 
              </div>
              <Row className="d-flex justify-content-center align-items-center mb-4">
                <Container fluid className="py-3">
                   <h2 className="" style={{font: "normal normal bold 20px/36px Ubuntu", color: "#444"}}>Simulation</h2>               
                </Container>
                 <SimulationTable periode={periode} taux={t} pool={{name:selectedPool.name, frequence: selectedPool.frequence}} capital={capital}/>
                 <FlatButton  handleClick={ouvrirCoffre} label="Ouvrir mon coffre"  bgc="#cc9933" width="250px"/>
              </Row>            
            </Form>
         </LightBoxContainer>
       </Col>
     </Row>
      {coffreDatas.length  > 0 && <h2 className="mb-5" style={{font: "normal normal bold 20px/36px Ubuntu", color: "#444"}}>Mes coffres</h2> }
      {/* <Coffre taux={t} periode={periode} pool={{name:selectedPool.name}} capital={capital} /> */}
      {coffreDatas.length  > 0 ? <>
        {
          coffreDatas.map((item, key)=> <Coffre key={key} index={key} taux={t} interet={item.interet} periode={item.periode} pool={{name:item.poolName}} capital={item.capital} date={item.createdAt} />)
        }
      </> :null}
       
      </Container>
    </>
  );
};

Crowdlending.layout = Portal;

export default withAuth(Crowdlending);

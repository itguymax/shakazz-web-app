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
  
} from "reactstrap";
// layout for this page
import Portal from "../../src/layouts/Portal";
// core components
import Header from "../../src/components/Headers/Header.js";
import WalletHeader from "../../src/layouts/WalletHeader"
import user from "../../src/__MOCK__/user";
import pools from "../../src/__MOCK__/pools";
import LightBoxContainer from '../../src/components/common/lightBoxContainer';
import { Button } from "bootstrap";
import { ArrowButton , FlatButton} from "../../src/components/common/SButton";
import Sinput from "../../src/components/forms/Sinput";
import SimulationTable from "../../src/components/SimulationTable";
import Coffre from "../../src/components/coffre";
import moment from "moment";

const Crowdlending = () => {
    const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    console.log("year", year);
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [copiedText, setCopiedText] = useState();
  const [toggle, setToggle] = useState(false);
  const [is360, set360] = useState(true);
  const [is720, set720] = useState(false);
  const [capital, setCapital] = useState(100);
  const [taux, setTaux] = useState(7.5);
  const [coffre, setCoffre] = useState([]);
  const [selectedPool, setSelectedPool] = useState( 
      {
     id: 1,
     name: "Pool mensuelle",
     percentage: "7.5%",
     taux360:7.5,
     taux720: 8.5,
     taux1080: 8.5,
     taux1800: 8.5,
     frequence: 30
  }
  );
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());



  const periode360 = () => {
    console.log("360");
    set360(!is360);
    set720(!is720);
  };
  const periode720 = () => {
     set720(!is720);
     set360(!is360);
  };
  const onArrowClick = (pool) => {
    setSelectedPool(pool);
    console.log("arrow clicked", pool);
  };
  const onInputChange = (event)=> {
    console.log(parseInt(event.target.value));
    setCapital(parseInt(event.target.value));
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
console.log("date", moment().startOf('day').fromNow());
  return (
    <>
      <Container fluid>
      <WalletHeader wallets={user.wallet}/>
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
                    <FlatButton disabled={is360} label="360" width="90px" bgc={is360?"#cc9933":"#444"} handleClick={ periode360}/>
                    <FlatButton disabled={is720} label="720" width="90px"  bgc={is720?"#cc9933":"#444"} handleClick={ periode720}/>
                  </div>
                 
              </div>
              <Row className="d-flex justify-content-center align-items-center mb-4">
                <Container fluid className="py-3">
                   <h2 className="" style={{font: "normal normal bold 20px/36px Ubuntu", color: "#444"}}>Simulation</h2>               
                </Container>
                 <SimulationTable periode={is360?360:720} taux={taux} pool={selectedPool} capital={capital}/>
                 <FlatButton  type="submit" label="Confirmer"  bgc="#cc9933" width="250px"/>
              </Row>            
            </Form>
         </LightBoxContainer>
       </Col>
     </Row>
      <h2 className="mb-5" style={{font: "normal normal bold 20px/36px Ubuntu", color: "#444"}}>Statistiques</h2> 
      <Coffre/>
       <div>
      
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
      </Container>
    </>
  );
};

Crowdlending.layout = Portal;

export default Crowdlending;

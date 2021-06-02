import React, {useEffect, useState} from 'react'
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import LightBoxContainer from "../components/common/lightBoxContainer";
import { Container, Row,Col } from "reactstrap";
import {  FlatButton} from "./common/SButton";
import ProgressBar from "../components/ProgressBar";
import {useClaimChest, useChestDailyTransactions}  from "../hooks";
import { useAppContext } from '../context';
import { useRouter } from 'next/router';

export default function coffre( {pool, item, index}) {
  console.log("chestttttttt", item);
  const context = useAppContext();
  const router = useRouter();
  const { mutateAsync, isLoading } = useClaimChest();
  const {mutationAsync: dailyTMutation, isLoading: dailyTLoad } = useChestDailyTransactions();
     const calculateTimeLeft = () => {
      const createdTime = new Date(item.createdAt);
    const difference =  createdTime.setDate(createdTime.getDate() + 1)  - +new Date()  ;
  //  console.log("created time", createdTime);
  //  console.log("7 days later", createdTime.setDate(createdTime.getDate() + 7) )
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)) || "00",
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24) || "00",
        minutes: Math.floor((difference / 1000 / 60) % 60) || "00",
        seconds: Math.floor((difference / 1000) % 60) || "00",
      };
    }

    return timeLeft;
  };
   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
     <div className="mx-2" style={{display: "flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
        <small style={{font: "normal normal bold 12px/13px Ubuntu"}} className="mb-2">{interval}</small>
        <LightBoxContainer width="50px" height="60px" borderR="20px">
         <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
           <h1 className="pt-2" style={{color:"#444"}}>{timeLeft[interval]} </h1>
         </div>
      </LightBoxContainer>
     </div>
    );
  });
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  useEffect(()=>{
    router.prefetch("/portal/daily-transactions");
  }, []);
  const percentage =((item.chestReciveROI/item.interet) * 100).toFixed(2);
  console.log("pourcentageeeee", percentage,item.chestReciveROI,item.interet )
 const claimgain = async () => {
   try{
     const res = await mutateAsync({accessToken: context.appState.accessToken, chestID:item._id});
     console.log("claim response ", res);
     alert(`${res.message}`);
   } catch(err){
     console.log(err);
   }
   console.log("claim chest", item);
 }
 const handleChestDailyTransactions = () => {
       router.push({pathname:'/portal/daily-transactions', query: { id: item._id },});
 }
  // le = (parseIn) * (parseFloat(taux)/100)) * / pool.frequence);
  return (
    <>
      <LightBoxContainer>
          <Container fluid className="">
            <Row className="py-3">
               <Col xl="4">
                 <h4 style={{color:"#444", fontWeight:"600", marginBottom:"15px"}}>{`Coffre fort ${index+1}`} </h4>
                 <h4 style={{color:"#cc9933", fontWeight:"bold"}}>{item.denominationPool || ""}</h4>
                 <h4 style={{color:"#444", fontWeight:"100"}}>Montant d:{" "} <span style={{color:"#444", fontWeight:"bold"}}>{item.montantUSD}</span></h4> 
                 <h4 style={{color:"#444", fontWeight:"100"}}>Total récompenses:{" "}<span style={{color:"#444", fontWeight:"bold"}}>{item.interet}</span> </h4> 
                 <h4 style={{color:"#444"}}>{item.stakePeriode}{" "}jours</h4>
               </Col>
             
               <Col style={{display: "flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                 {timerComponents.length ? <>
                 
                    <p>Votre compte sera actif dans:</p>
                    <div style={{display:"flex",flexDirection:"row", justifyContent:"space-around"}}>{timerComponents}</div>
                 
               </> :
                 
                    (<ProgressBar percentage={percentage}  handleClick={handleChestDailyTransactions}/>)
              
                }
               </Col>
             <Col xl="4" style={{display: "flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} >
                <div style={{display: "flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                    <h1 style={{color:"#444"}}> {`${item.gain}` + " "}$</h1>
                    <FlatButton  handleClick={claimgain} label="Reclamer" bgc="#cc9933" width="150px"/>
                </div>
             </Col>
            </Row>
          </Container>  
      </LightBoxContainer> 
    </>
  )
}

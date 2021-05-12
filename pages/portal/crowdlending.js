import React, { useState, useEffect} from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import {Global,css} from "@emotion/react"
import { device } from '../../src/lib/device.js';
// reactstrap components
import { useQuery, useQueryClient,QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

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
import { QueryCache } from "react-query";
import { useAppContext } from '../../src/context';
import {useWallets, useFetchOptions,useFetchUserChest, useAddChest} from '../../src/hooks';
import {fetchOptions} from '../../src/services';

const queryClient = new QueryClient();

const Crowdlending = () => {

  const context = useAppContext();
const {data, isLoading} = useWallets(context.appState.accessToken);
const {data:optionsData, isLoading:isLoadingOptions} = useFetchOptions();
const {data: chestData, isLoading:isLoadingChest} = useFetchUserChest(context.appState.accessToken);
const { mutateAsync: addChestMutation, isLoading:addChestLoading } =  useAddChest()

  const [copiedText, setCopiedText] = useState();
  const [toggle, setToggle] = useState(false);
  const [capital, setCapital] = useState(100);
  // const [taux, setTaux] = useState(7.5);
  const [selectedPool, setSelectedPool] = useState(optionsData.data.options[0]);
  const [selectedPeriode, setSelectedPeriode] = useState(optionsData.data.options[0].stakePeriode[0]);
  const [stakeIndex, setStakeIndex] = useState(0);
   const [errormsg, setErrormsg]= useState(null);
  const [successmsg, setSuccessmsg]= useState(null);
  

 const handlePeriodeSelection = (data) => {
   console.log("selected periode ", data);
    setSelectedPeriode(data);
 }

 
  const onArrowClick = (data, index) => {
    console.log("selected pool", data, index);
    setStakeIndex(index)
    setSelectedPeriode(data.stakePeriode);
    setSelectedPool(data);
  };
  const onInputChange = (event)=> {
    setCapital(parseInt(event.target.value));
  };
 
  const mesCoffres = [];

  const ouvrirCoffre = () => {
    // let coffredata = {
    //   poolName: selectedPool.nom,
    //   capital: capital,
    //   interet: (parseInt(capital) * (parseFloat(t)/100)) * (setSelectedPeriode.duree / selectedPool.frequence),
    //   periode: setSelectedPeriode.duree,
    //   createdAt: new Date(),

    // }
    const body = {
    data : {
        chest : {
            denomination : "chest",
            montant : capital
        },
        wallet : {
            type : "principal"
        },
        option : {
            id : selectedPool._id,
            index : stakeIndex,
            delayBonus: 7
        }
    }
}

try {
  const res = addChestMutation({accessToken: context.appState.accessToken,data:body});
   const {error, message,success, data} = res;
        if(error && !success){
        setSuccessmsg(null);
        setErrormsg(message);
         
        alert("une erreur s'est produite")
       } else { 
          queryClient.invalidateQueries('Fetch user chest');
         setErrormsg(null);
         setSuccessmsg(message);
          alert("creation coffre fort");
          
       }
     
  console.log("bbbbbbbbbbbbb", res);
} catch (err){
  console.log(err);
}
}

 console.log("options", optionsData.data.options);
  return (
    <Portal>
      <Container fluid>
      <Global
      styles={css`
        .lightBoxContainerHeaderDiv{
          width:12em;
          height:4em;
          padding-top:1.5em;
          cursor:pointer !important;
        }
        @media ${device.sPhone} {
          }
        @media ${device.mPhone} {
          }
        @media ${device.iphoneX} {
          }
        @media ${device.bPhone} {
          .lightBoxContainerHeaderFluid{
            flex-direction: column !important;
            width:20em !important;
            margin:auto !important;
          }
          .lightBoxContainerHeaderDiv{
            width:17em !important;
          }
        }
        @media ${device.sTablet} {
          .lightBoxContainerHeaderFluid{
            width:38em;
            margin-left:-3em;
          }
          .lightBoxContainerHeaderDiv{
            width:10em;
            margin-left:-1.8em;
          }
        }
        @media ${device.bTablet} {
          .lightBoxContainerHeaderDiv{
            margin-left:-1em;
          }
        }
      `}
      />
      {isLoading? "Loading wallets...": (<WalletHeader wallets={data.data.wallets}/>)}

     <Row className="mt-xl-3 mb-5">
       <Col xl={4}>
        <h2 className="mb-xl-5" style={{font: "normal normal bold 30px/36px Ubuntu", color: "#444"}}>Ouvrir un coffre fort</h2>
         {
           optionsData.data.options.map((pool, key)=>{
             console.log("map pool", pool);
             const tm = pool.stakePeriode.filter((item) => item.duree === 360)
             return <LightBoxContainer width="100%" key={key}>
                  <div className="py-0 px-3"  style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <small  className="text-center" style={{color: "#707070",font: "normal normal bold 16px/24px Ubuntu", width:"100px"}}>{pool.nom}</small>
                  <span className="text-center" style={{font: "normal normal bold 33px/60px Ubuntu",color: "#707070"}}>{`${tm[0].taux }%`}</span>
                  <ArrowButton labelColor="#cc9933" label="Ouvrir" arrowImage="/assets/img/arrow-gold.svg" handleClick={() => onArrowClick(pool, key)}/>
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
                <small>{selectedPool.nom}</small>
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
                    {selectedPool.stakePeriode.map(( stakep, key ) => <FlatButton key={key} disabled= {stakep.duree === selectedPeriode.duree}  label={stakep.duree} width="90px" bgc={stakep.duree === selectedPeriode.duree?"#cc9933":"#444"} handleClick={ () => handlePeriodeSelection(stakep)}/>)}
                  </div>

              </div>
              <Row className="d-flex justify-content-center align-items-center mb-4">
                <Container fluid className="py-3">
                   <h2 className="" style={{font: "normal normal bold 20px/36px Ubuntu", color: "#444"}}>Simulation</h2>
                </Container>
                 <SimulationTable periode={selectedPeriode.duree} taux={selectedPeriode.taux} pool={{name:selectedPool.nom, frequence: selectedPool.frequence}} capital={capital}/>
                 <FlatButton  handleClick={ouvrirCoffre} label="Ouvrir mon coffre"  bgc="#cc9933" width="250px"/>
              </Row>
            </Form>
         </LightBoxContainer>
       </Col>
     </Row>
      {/* {chestData.data.chests.length  > 0 && <h2 className="mb-5" style={{font: "normal normal bold 20px/36px Ubuntu", color: "#444"}}>Mes coffres</h2> } */}
      {/* <Coffre taux={t} periode={periode} pool={{name:selectedPool.name}} capital={capital} /> */}
      {chestData?.data.chests.length > 0 ? <>
        <h2 className="mb-5" style={{font: "normal normal bold 20px/36px Ubuntu", color: "#444"}}>Mes coffres</h2>
        {
          chestData?.data.chests.map((item, key)=> <Coffre key={key} index={key} taux={item.taux} interet={item.interet} periode={item.stakePeriode} pool={{name: selectedPool.nom}} capital={item.montantUSD} date={item.createdAt} />)
        }
      </> : <div> <h1 className="text-center"> Vous n'avez aucun coffre ouvert</h1> </div>}

      </Container>
    </Portal>
  );
};


export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['Fetch options'], () => fetchOptions())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default withAuth(Crowdlending);

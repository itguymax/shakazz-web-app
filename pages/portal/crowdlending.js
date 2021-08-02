import React, { useState, useEffect} from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import {Global,css} from "@emotion/react"
import { device } from '../../src/lib/device.js';
import Toast from "../../src/components/forms/Toast";
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
  Spinner,
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
import {scrollToBottom} from "../../src/helpers/scrollToBottom.js"
import Router from "next/router";
import withAuth from '../../src/hoc/withAuth';
import { QueryCache } from "react-query";
import { useAppContext } from '../../src/context';
import {useWallets, useFetchOptions,useFetchUserChest, useAddChest} from '../../src/hooks';
import {fetchOptions} from '../../src/services';
import  CustomDropdown  from '../../src/components/common/CustomDropdown';
import DataLoader from "../../src/components/common/DataLoader";
const queryClient = new QueryClient();
const arrowClosed = (
  <span className="arrow-closed" />
)
const arrowOpen = (
  <span className="arrow-open" />
)

const Crowdlending = () => {
const PRINCIPAL = "principal";
const TRANSFERT = "transfert";
const optionstype = [PRINCIPAL,TRANSFERT];
const context = useAppContext();
const {data, isLoading} = useWallets(context.appState.accessToken);
const {data:optionsData, isLoading:isLoadingOptions} = useFetchOptions();
const {data: chestData, isLoading:isLoadingChest} = useFetchUserChest(context.appState.accessToken);
const { mutateAsync: addChestMutation, isLoading:addChestLoading } =  useAddChest()
// console.log("chesttttt", chestData);
  const [copiedText, setCopiedText] = useState();
  const [toggle, setToggle] = useState(false);
  const [capital, setCapital] = useState(100);
  const [selectedType, setType] = useState(optionstype[0]);
  // const [taux, setTaux] = useState(7.5);
  const [selectedPool, setSelectedPool] = useState(optionsData?.data?.options[0]);
  const [selectedPeriode, setSelectedPeriode] = useState(optionsData?.data?.options[0].stakePeriode[0]);
  const [stakeIndex, setStakeIndex] = useState(0);
  const [errormsg, setErrormsg]= useState('');
  const [successmsg, setSuccessmsg]= useState(null);
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState({});
  const onDismiss = () => setAlertVisible(false);

 const handlePeriodeSelection = (data) => {
   const index = selectedPool.stakePeriode.findIndex((op) => op._id === data._id);
    setSelectedPeriode(data);
    setStakeIndex(index);
 }

  const onArrowClick = (data, index) => {
    // console.log("selected pool", data, index);
    // setStakeIndex(index)
    setSelectedPeriode(data.stakePeriode);
    setSelectedPool(data);
  };
  const onInputChange = (event)=> {
    setCapital(parseInt(event.target.value));
  };

  const mesCoffres = [];

  const ouvrirCoffre = async () => {

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
            type : selectedType,
        },
        option : {
            id : selectedPool._id,
            index : stakeIndex,
            delayBonus: 1
        }
    }
}

try {
  const res = await addChestMutation({accessToken: context.appState.accessToken,data:body});
   queryClient.invalidateQueries('Fetch user chest');
   //console.log("dddddddddddd", res);
   const {error, message,success, data} = res;
        if(error){
        setSuccessmsg(null);
        setErrormsg(res.message);
        setResponseAlert(res);
        setAlertVisible(true);

        return ;
       }
       if(success) {
          setResponseAlert(res);
          setAlertVisible(true);
         scrollToBottom();
         setErrormsg(null);
         setSuccessmsg(message);

        return;
       }

  // console.log("bbbbbbbbbbbbb", res);
} catch (err){
  console.log(err);
}
}

 const onSelect = (type) => {
      console.log("####################", type);
    setType(type.value);
   }
if(isLoadingOptions){
  return <DataLoader/>
}

const defaultOption = selectedType;
 console.log("$$$$$$$$$$", defaultOption);
  return (
    <Portal>
    <Global
    styles={css`
      /*Responsive*/
        html {
          scroll-behavior: smooth;
        }
    `}
  />
      <Container fluid>
      {isLoading? "Loading wallets...": (<WalletHeader wallets={data.data.wallets}/>)}

     <Row className="mt-xl-3 mb-5">
       <Col xl={4}>
        <h2 className="mb-xl-5" style={{font: "normal normal bold 30px/36px Ubuntu", color: "#444"}}>Ouvrir un coffre fort</h2>
         {
           optionsData?.data?.options.map((pool, key)=>{
             {/* console.log("map pool", pool); */}
             const tm = pool.stakePeriode[0];
             return <LightBoxContainer width="100%" key={key}>
                  <div className="py-0 px-3"  style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <small  className="text-center" style={{color: "#707070",font: "normal normal bold 16px/24px Ubuntu", width:"100px"}}>{pool.nom}</small>
                  <span className="text-center" style={{font: "normal normal bold 33px/60px Ubuntu",color: "#707070"}}>{`${tm.taux }%`}</span>
                  <ArrowButton labelColor="#cc9933" label="Ouvrir" arrowImage="/assets/img/arrow-gold.svg" handleClick={() => onArrowClick(pool, key)}/>
                </div>
             </LightBoxContainer>
           })
         }
         <div>
            <h4>Choisir le wallet d'ouverture du coffre</h4>
           <CustomDropdown
            arrowClosed={arrowClosed}
            arrowOpen={arrowOpen}
            options={optionstype}
            value={defaultOption}
            placeholder="Choisir le wallet d'ouverture du coffre"
            name="wallets"
            onChange={onSelect}

        /><br/>
        {errormsg && <div className="text-muted font-italic py-4 mt-1">

                  <span className="text-danger font-weight-700">{errormsg}</span>

              </div>}
              { successmsg && <div className="text-muted font-italic py-4 mt-1">

                  <span className="text-success font-weight-700">{successmsg}</span>

              </div>}
         </div>

       </Col>
       <Col xl={8}>
          <LightBoxContainer borderR="20px" width="100%">
              <Form >
                <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderBottom: "2px solid #b7b7b7" }}>
                <h2 className="" style={{font: "normal normal bold 20px/36px Ubuntu", color: "#444"}}>Montant à bloquer</h2>
                <small>{selectedPool?.nom}</small>
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
                    {selectedPool?.stakePeriode?.map(( stakep, key ) => <FlatButton key={key} disabled= {stakep.duree === selectedPeriode.duree}  label={stakep.duree} width="90px" bgc={stakep.duree === selectedPeriode.duree?"#cc9933":"#444"} handleClick={ () => handlePeriodeSelection(stakep)}/>)}
                  </div>

              </div>
              <Row className="d-flex justify-content-center align-items-center mb-4">
                <Container fluid className="py-3">
                   <h2 className="" style={{font: "normal normal bold 20px/36px Ubuntu", color: "#444"}}>Simulation</h2>
                </Container>
                 <SimulationTable periode={selectedPeriode?.duree || 0} taux={selectedPeriode?.taux || 0} pool={{name:selectedPool?.nom, frequence: selectedPool?.frequence|| 0}} capital={capital || 0}/>

             {addChestLoading?  <Spinner style={{ width: '2rem', height: '2rem' , color:"#cc9933"}}/> :<FlatButton  handleClick={ouvrirCoffre} label="Ouvrir mon coffre"  bgc="#cc9933" width="250px"/>}

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
          chestData?.data.chests.map((item, key)=> <Coffre key={key} index={key} item={item} taux={item.taux} interet={item.interet} periode={item.stakePeriode} pool={{name: selectedPool?.nom}} capital={item.montantUSD} date={item.createdAt} />)
        }
      </> : <div> <h1 className="text-center"> Vous n'avez aucun coffre ouvert</h1> </div>}
      <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
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

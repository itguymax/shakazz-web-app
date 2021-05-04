import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import WalletHeader from "../../src/layouts/WalletHeader";
import user from "../../src/__MOCK__/user";
import Portal from "../../src/layouts/Portal";
import {css} from "@emotion/react";
import {device } from "../../src/lib/device";
import TabH from "../../src/components/TabH";
import downlines from "../../src/__MOCK__/downlines"
import {
  Nav,
  TabContent,
  TabPane,
} from 'reactstrap';
import GenerationCard from '../../src/components/GenerationCard';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import {  FlatButton} from "../../src/components/common/SButton";
import PopulationTable from '../../src/components/PopulationTable';
import withAuth from '../../src/hoc/withAuth';
const generationCardData = [
  {
    id:1,
    bgc:"#F3C465",
    name:"Génération 1"
  },
  {
    id:2,
    bgc:"#CC9933",
    name:"Génération 2"
  },
  {
    id:3,
    bgc:"#F6AC18",
    name:"Génération 3"
  },
  {
    id:4,
    bgc:"#97E3C4",
    name:"Génération 4"
  },
  {
    id:5,
    bgc:"#1AA26B",
    name:"Génération 5"
  }
]

 function Equipe() {

   const [hTabsIcons, setHTabsIcons] = useState("hTabsIcons-1");
    const [showPopulation, setShowPopulation] = useState(false);
     const [selectedGen, setselectedGen] = useState(false);
     const [children, setChildren] = useState([]);
  const handleSetHTabs = ( indic) => {
    setHTabsIcons(indic);
  }
  const findChildren = (childrenGen) => {
    
     
   return  childrenGen.map((id, key)=> {
     return  downlines.filter(item => item.id === id)
    }).flat();

  }
  const getGenerationPopulation = (item) => {
      setselectedGen(item);
       switch(item.id){
         case 1:
           setChildren( findChildren(user.children.child1));
           break;
        case 2:
           setChildren(findChildren(user.children.child2));
           break;
        case 3:
           setChildren(findChildren(user.children.child3));
           break;
        case 4:
           setChildren(findChildren(user.children.child4));
           break;
        case 5:
           setChildren(findChildren(user.children.child5));
           break;
        default:
          setChildren([]);
          break;
       } 
      setShowPopulation(true);
  
}

  return (
    <Portal>
      <Container fluid>
        <WalletHeader wallets={user.wallet}/>
              <div css={css`
        
        .nav-pills .nav-link{
          box-shadow: none;
          margin-bottom:0px;
        }
        .nav-link a{
          margin-bottom: 0px !important;
        }
        .nav-pills .nav-link.active, .nav-pills .nav-link, h1 {
              color:#333;
  
              background-color:#fff;
              padding:0px;
        }
       h3{
         display: flex;
         flex-direction: column;
         font-size: 16px;
         font-weight:100;
         text-align: center;
         width:160px;
         padding-bottom: 5px !important;
         color:#333;

       }
       span{
         border: 4px solid #24422F;
         position:absolute;
         width: 180px;
         bottom: -5px;
         z-index:999;
       }
    `}>

        <Nav className="nav-fill flex-column flex-lg-row flex-md-row" pills role="tablist" 
          style={{ position: "relative"}}
         css={css`
            border-bottom:2px solid #B7B7B7;
            padding-top: 10px !important;
            /* @media (max-width: 500px ){
                border-bottom: none;
                h3{
                  font-size: 14px;
                  width:80%;
                }
            } */
            /* @media ${device.tablet} {
                width:100%;
                .nav {
                  flex-wrap: unset;
                }
                .nav-pills .nav-item {
                  padding-right: 0px;
                }
            } */
         `}
         >
         <TabH  textStyle={{}} handleSetHTabs={handleSetHTabs} hTabsIcons={hTabsIcons} indicator="hTabsIcons-1" text="Actifs" />
         <TabH  handleSetHTabs={handleSetHTabs} hTabsIcons={hTabsIcons} indicator="hTabsIcons-2" text="Non-actifs" />
         <TabH  handleSetHTabs={handleSetHTabs} hTabsIcons ={hTabsIcons} indicator="hTabsIcons-3"  text="Tout" />
        </Nav>
      </div>
        <div>
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane  className="py-4"  tabId={`hTabsIcons-1`} role="tabpanel">
              {!showPopulation ? <div  style={{display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
                { generationCardData.map((item, key)=> <GenerationCard key={key} g={item.id} gbgc={item.bgc} gto="2000" gp="10" handleClick={() => getGenerationPopulation(item)}/>)}
                
              </div> :
                <div >
                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                       {
                         generationCardData.map((item, key) =>  <FlatButton key={key} label={item.name} width="200px" bgc={item.bgc} handleClick={ ()=>getGenerationPopulation(item)}/>)
                       } 
                    </div>
                    <PopulationTable popData={children}/>
                </div>
              
               }
             
            </TabPane>  
          </TabContent>
        </div>

      </Container>
    </Portal>
  )
}



export default withAuth(Equipe);
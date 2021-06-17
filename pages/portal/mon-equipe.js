import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import WalletHeader from "../../src/layouts/WalletHeader";
import user from "../../src/__MOCK__/user";
import Portal from "../../src/layouts/Portal";
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
import { useAppContext } from '../../src/context';
import {useWallets, useFetchUserTree} from '../../src/hooks';
import {Global,css} from "@emotion/react";
import {
  useQuery,
  useQueryClient,
  QueryClient,
} from 'react-query'
import DataLoader from "../../src/components/common/DataLoader.js";
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
    const context = useAppContext();
  const {data, isLoading} = useWallets(context.appState.accessToken);
  const { data: treeData, isLoading: treeLoading, isError} = useFetchUserTree(context.appState.accessToken);
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
  const getGenerationPopulation = (item, text) => {
    console.log("get gene pop", item);
      setselectedGen(item);

       switch(text){
         case "all":
           setChildren(item);
           break;
        case "actif":
            setChildren(item.filter(l => l.licence));
         break;
         case "non-actif":
           setChildren(item.filter(l => !l.licence));
           break;
        default:
           setChildren([]);
           break;
        }
      setShowPopulation(true);

}
if(treeLoading){
  return <DataLoader/>
}
if(isError){
  alert("erreur serveur");
  return;
}
console.log("user tree", treeData);
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
          .equipe_list_generation_block{
            flex-direction: column;
          }
          .equipe_list_generation_block button{
            margin-top:1em;
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
              {!showPopulation ? <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
                { generationCardData.map((item, key)=> <GenerationCard key={key} g={item.id} gbgc={item.bgc} gto={treeData?.data.user.teamTurnover[`child${item.id}`]} gp={treeData?.data.user.tree[`child${item.id}`].filter(item => item.license).length} handleClick={() => getGenerationPopulation(treeData?.data.user.tree[`child${item.id}`], "actif")}/>)}

              </div> :
                <div >
                    <div className="equipe_list_generation_block" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                       {
                         generationCardData.map((item, key) =>  <FlatButton key={key} label={item.name} width="200px" bgc={item.bgc} handleClick={ ()=>getGenerationPopulation(treeData?.data.user.tree[`child${item.id}`], "actif")}/>)
                       }
                    </div>
                    <PopulationTable popData={children}/>
                </div>

               }

            </TabPane>
               <TabPane  className="py-4"  tabId={`hTabsIcons-2`} role="tabpanel">
              {!showPopulation ? <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
                { generationCardData.map((item, key)=> <GenerationCard key={key} g={item.id} gbgc={item.bgc} gto={treeData?.data.user.teamTurnover[`child${item.id}`]} gp={treeData?.data.user.tree[`child${item.id}`].filter(item => !item.license).length} handleClick={() => getGenerationPopulation(treeData?.data.user.tree[`child${item.id}`],"non-actif")}/>)}

              </div> :
                <div >
                    <div className="equipe_list_generation_block" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                       {
                         generationCardData.map((item, key) =>  <FlatButton key={key} label={item.name} width="200px" bgc={item.bgc} handleClick={ ()=>getGenerationPopulation(treeData?.data.user.tree[`child${item.id}`], "non-actif")}/>)
                       }
                    </div>
                    <PopulationTable popData={children}/>
                </div>

               }

            </TabPane>
               <TabPane  className="py-4"  tabId={`hTabsIcons-3`} role="tabpanel">
              {!showPopulation ? <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
                { generationCardData.map((item, key)=> <GenerationCard key={key} g={item.id} gbgc={item.bgc} gto={treeData?.data.user.teamTurnover[`child${item.id}`]} gp={treeData?.data.user.tree[`child${item.id}`].length} handleClick={() => getGenerationPopulation(treeData?.data.user.tree[`child${item.id}`], "all")}/>)}

              </div> :
                <div >
                    <div className="equipe_list_generation_block" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                       {
                         generationCardData.map((item, key) =>  <FlatButton key={key} label={item.name} width="200px" bgc={item.bgc} handleClick={ ()=>getGenerationPopulation(treeData?.data.user.tree[`child${item.id}`], "all")}/>)
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

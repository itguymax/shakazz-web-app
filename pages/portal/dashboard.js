import React, { useState, useEffect } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import settings from "../../src/__MOCK__/settings";
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {useAppContext} from "../../src/context";
import moment from "moment";
// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  Button,
  Table,
  Progress,
  Media,
} from "reactstrap";
// layout for this page
import Portal from "../../src/layouts/Portal.js";
// core components
import {
  chartOptions,
  parseOptions,
} from "../../variables/charts.js";
import  { Link } from "../../src/components/Link";
import  LightBoxContainer from '../../src/components/common/lightBoxContainer';
import DashboardWallets from '../../src/components/DashboardWallets';
import ProgressBar from "../../src/components/ProgressBar";
import { currentUser } from "../../src/__MOCK__/user";
import { isDirective } from "graphql";
import withAuth from '../../src/hoc/withAuth';
import { constantes  } from "../../src/config/";
import {  useFetchAlltransactions,useFetchUserInfos } from "../../src/hooks";

let c;
function Dashboard( props ) {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [page, setPage] = useState(1);
  const [transData, setTransData] = useState([])
  const [element, setElement] = useState(10);
  const [copied, setCopied] = useState(false);
  const context = useAppContext();
  c = context;
const {mutateAsync: allMutation, isLoading } = useFetchAlltransactions();
  const [token, setToken]= useState(context.appState.accessToken);
  const [isUserInfoCompleted , setUserInfoCompleted] = useState(false);
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
    const fetchInitData = async () => {
    const body = {
     page, element
   }
    const {data: initData} = await allMutation({accessToken:context.appState.accessToken, data:body});
  
    // console.log("init data", initData);
    setTransData(initData.transactions);
  }
   useEffect(()=> {
    fetchInitData();
  },[])
   const { data: userData, isLoading: userDataLoading } = useFetchUserInfos(c.appState.accessToken);

   console.log("user data loading", userData);
  // console.log("slice 10", transData.slice(0,10))
  return (
    <Portal>
      <Container>
       {userDataLoading? null : (
          <div style={{cursor: "pointer"}}>
          <h2>Votre lien d'affiliation </h2>
          <CopyToClipboard className="mr-2" text={userData? userData?.data?.user?.affiliationLink:""}
          onCopy={() => 
            setCopied(true)
          }>
          <span>{userData? userData?.data?.user?.affiliationLink: ""}</span>
        </CopyToClipboard>
          {copied ? <span style={{color: '#007A5E'}}>Copié</span> : <span style={{color: '#cc9933'}}>Copie</span>}
        </div>
       ) }
         <Row className="mt-5">
           <Col className="mb-5 mb-xl-0" xl="9">
              <LightBoxContainer borderLess bg="#f6f6f6" direction="row">
                <Col xl="8" className="p-4 col-xl-8" >
                  <div>
                      <h2 style={{font:'normal italic bold 18px/19px Ubuntu', color: '#444'}} >{`Bon retour ${userData?.data.user.psedo},`}</h2>
                      <p style={{fontSize: '14px', lineHeight: '1.5'}}>La liquidité est débloquée au terme <br/> des 360 jours après l'ouverture et  <br/> création du vault</p>
                      <Link label="Consulter" path="/portal/legacy" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                  </div>
                </Col>
                <Col xl="4" >
                    <ProgressBar percentage={userData?.data.user?.generalPercentage || 0}  bgc="#f6f6f6"/>
                </Col>
             </LightBoxContainer>
             <Row className="mt-5">
                <Col xl="8">
                    <LightBoxContainer>
                      <div className="pt-3 pr-3 pl-3 pb-3">
                        <Row className="align-items-center">
                          <div className="col">
                            <h3 className="mb-0">Transactions</h3>
                          </div>
                          <div className="col text-right">
                           us
                          </div>
                        </Row>
                     </div>
                    <Table className="align-items-center table-flush" responsive>
                        <thead style={{backgroundColor: "#cc993a"}}>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Type</th>
                            <th scope="col">Status</th>
                            <th scope="col">Montant</th>
                          </tr>
                        </thead>
                       
                        { isLoading? <span> Loading...</span>:
                           <tbody>
                           {
                          transData.slice(0,10).map((item, key)=> 
                            <tr key={key}>
                            <th scope="row"> {item._id}</th>
                            <td>{ moment(item.createdAt).format('YYYY/MM/DD')}</td>
                            <td>{item.type}</td>
                            <td>{item.statut}</td>
                            <td>{(item.montantUSD ).toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</td>
                          </tr>
                          )
                        
                         }
                         </tbody>
                        }
                          
                       
                      </Table>
                   </LightBoxContainer>
                  
                </Col>
                  <Col xl="4">
                    <DashboardWallets/>
                 </Col>
             </Row>
           </Col>
          <Col xl="3" className="pr-lg-1 pl-lg-2">
               <LightBoxContainer height="300px">
                  <div className="container p-4" >
                    <div >
                    <h2 style={{font: 'normal normal bold 16px/18px Ubuntu', color: '#444'}} >Legacy</h2>
                    <p style={{fontSize: '14px', lineHeight: '1.2'}}>Nul ne sait ce que demain réserve, pensez à votre postérité.</p>
                    <Link label="Ajoutez des bénéficiaires" path="/portal/legacy" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                    </div>
                  </div>
               </LightBoxContainer>
              <LightBoxContainer height="300px">
                  <div className="container p-4 mb-4" >
                    <div >
                    <h2 style={{font: 'normal normal bold 16px/18px Ubuntu', color: '#444'}} >Profil</h2>
                     <Media className="">
                          <img
                          className=" avatar rounded-circle mr-3"
                            alt={userData?.data.user?.lastName + "avatar"}
                            src={userData?.data.user?.avatarUrl || "/assets/img/def-user-profile.png"}
                          ></img>
                      <div style={{flexDirection:"column", display:"flex"}}>
                        <span className=" name  ">
                          {userData?.data.user?.lastName}
                        </span>
                        <span className="  mb-0 text-sm">
                          {userData?.data?.user?.gender}
                        </span>
                        <span className=" mb-0 text-sm">
                         {userData?.data?.user?.dateOfbirth}
                        </span>
                      </div>
                    </Media>
                    <div>
                      <img src={userData?.data.user.address?.country?.flag} /> <span>{userData?.data.user.address?.country?.name}</span>
                      <p>{ userData?.data.user.phone}</p>
                    </div>
                  </div>
                    <Link label="Mettre à jour le profil" path="/portal/profile" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                       <span
                          style={{
                            display: 'inline-block',
                            marginLeft: '.5rem',
                            width: 10,
                            height: 10,
                            background:  !userData?.data.user.phone || !userData?.data.user.address?.country?.name ? 'green' : 'transparent',
                            transition: !userData?.data.user.phone || !userData?.data.user.address?.country?.name  ? 'all .3s ease' : 'none',
                            borderRadius: '100%',
                            transform: 'scale(2)',
                          }}
                       />
                  </div>
              </LightBoxContainer>
             <LightBoxContainer height="300px">
                <div className="container p-4" >
                <div className="mb-5" >
                  <h2 className="mb-3" style={{font: 'normal normal bold 16px/18px Ubuntu', color: '#444'}} >Sécurité </h2>
                  <div style={{display:'flex', flexDirection:"row", justifyContent:"space-between"}}> <p style={{fontSize: '16px', lineHeight: '1.2'}}>Verification Email </p> {userData?.data.user.emailIsVerified? <span style={{color:"#32DC00", fontSize:'25px', marginTop:'-5px'}}>&#10003;</span>:<span style={{color:"#EF2929", fontSize:'25px', marginTop:'-5px'}}>&#10007;</span>}</div>
                  <div style={{display:'flex', flexDirection:"row", justifyContent:"space-between"}}> <p style={{fontSize: '16px', lineHeight: '1.2'}}>Double vérification</p>  {userData?.data.user.twofaIsVerified? <span style={{color:"#32DC00", fontSize:'25px', marginTop:'-5px'}}>&#10003;</span>:<span style={{color:"#EF2929", fontSize:'25px', marginTop:'-5px'}}>&#10007;</span>}</div>
                  <div style={{display:'flex', flexDirection:"row", justifyContent:"space-between"}}> <p style={{fontSize: '16px', lineHeight: '1.2'}}>KYC</p>  {userData?.data.user.kycIsVerified? <span style={{color:"#32DC00", fontSize:'25px', marginTop:'-5px'}}>&#10003;</span>:<span style={{color:"#EF2929", fontSize:'25px', marginTop:'-5px'}}>&#10007;</span>}</div>
                </div>
                <Link label="Mettre à jour votre sécurité" path="/portal/securite" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                </div>
            </LightBoxContainer>
          </Col>
        </Row>
      </Container>
    </Portal>
  )
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery(['posts', 10], () => fetchPosts(10))

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }

// export async function getStaticProps(context) {
  
//   return {
//     props: { userData }, // will be passed to the page component as props
//   }
// }

export default withAuth(Dashboard);

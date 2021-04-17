import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
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

function Dashboard() {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
      <Container>
      <h1>Dashboard</h1>
         <Row className="mt-5">
                  <a href="/portal/kyc">Kyc</a>
           <Col className="mb-5 mb-xl-0" xl="9">
              <LightBoxContainer borderLess bg="#f6f6f6" direction="row">
                <Col xl="8" className="p-4 col-xl-8" >
                  <div>
                      <h2 style={{font:'normal italic bold 18px/19px Ubuntu', color: '#444'}} >Bon retour Yvan,</h2>
                      <p style={{fontSize: '14px', lineHeight: '1.5'}}>La liquidité est débloquée au terme <br/> des 360 jours après l'ouverture et  <br/> création du vault</p>
                      <Link label="Consulter" path="/portal/legacy" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                  </div>
                </Col>
                <Col xl="4">
                   <h2 style={{font: 'normal normal bold 16px/18px Ubuntu', color: '#444'}} >Legacy</h2>
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
                            <th scope="col">Détails</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">/argon/</th>
                            <td>4,569</td>
                            <td>340</td>
                            <td>4,569</td>
                            <td>340</td>
                            <td>
                              46,53%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">/argon/</th>
                            <td>3,985</td>
                            <td>319</td>
                            <td>3,985</td>
                            <td>319</td>
                            <td>
                              46,53%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">/argon/</th>
                            <td>3,513</td>
                            <td>294</td>
                            <td>3,513</td>
                            <td>294</td>
                            <td>
                              36,49%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">/argon/</th>
                            <td>2,050</td>
                            <td>147</td>
                            <td>2,050</td>
                            <td>147</td>
                            <td>
                            50,87%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">/argon/</th>
                            <td>1,795</td>
                            <td>190</td>
                            <td>1,795</td>
                            <td>190</td>
                            <td>
                              46,53%
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                   </LightBoxContainer>
                </Col> 
                  <Col xl="4">
                    <LightBoxContainer>
                      <div className="container p-4">
                        <div >
                          <h2 style={{font: 'normal normal italic 16px/18px Ubuntu', color: '#444'}} >Wallet principal</h2>
                          <h1 className="mb-4 mt-4" style={{font: 'normal normal normal 30px/35px Ubuntu',color: '#444',  lineHeight: '1.2'}}> {(29000).toLocaleString('en-US', { style: 'currency', currency: 'USD',})}</h1>
                          <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            <Link label="Dépôt" path="/portal/depot" style={{ background: '#007A5E 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                            <Link label="Retrait" path="/portal/retrait" style={{ background: '#CE1126 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                            <Link label="Transfert" path="/portal/transfert" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                          </div>
                        </div>
                      </div>
                   </LightBoxContainer>
                    <LightBoxContainer>
                      <div className="container p-4">
                        <div >
                          <h2 style={{font: 'normal normal italic 16px/18px Ubuntu', color: '#444'}} >Wallet vault</h2>
                          <h1 className="mb-4 mt-4" style={{font: 'normal normal normal 40px/45px Ubuntu',color: '#444',  lineHeight: '1.2'}}>{(250000).toLocaleString('en-US', { style: 'currency', currency: 'USD',})}</h1>
                          <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            <Link label="Transfert" path="/portal/transfert" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                          </div>
                        </div>
                      </div>
                   </LightBoxContainer>
                    <LightBoxContainer>
                      <div className="container p-4">
                        <div >
                          <h2 style={{font: 'normal normal italic 16px/18px Ubuntu', color: '#444'}} >Wallet Networking</h2>
                          <h1 className="mb-4 mt-4" style={{font: 'normal normal normal 40px/45px Ubuntu',color: '#444',  lineHeight: '1.2'}}> {(29000).toLocaleString('en-US', { style: 'currency', currency: 'USD',})}</h1>
                          <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            <Link label="Transfert" path="/portal/transfert" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                          </div>
                        </div>
                      </div>
                   </LightBoxContainer> 
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
                  <div className="container p-4" >
                    <div >
                    <h2 style={{font: 'normal normal bold 16px/18px Ubuntu', color: '#444'}} >Legacy</h2>
                    <p style={{fontSize: '14px', lineHeight: '1.2'}}>Nul ne sait ce que demain réserve, pensez à votre postérité.</p>
                    <Link label="Ajoutez des bénéficiaires" path="/portal/legacy" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                    </div>
                  </div>
              </LightBoxContainer> 
             <LightBoxContainer height="300px">
                <div className="container p-4" >
                <div >
                <h2 style={{font: 'normal normal bold 16px/18px Ubuntu', color: '#444'}} >Sécurité</h2>
                <p style={{fontSize: '14px', lineHeight: '1.2'}}>Nul ne sait ce que demain réserve, pensez à votre postérité.</p>
                <Link label="Mettre à jour votre sécurité" path="/portal/legacy" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>
                </div>
                </div>
            </LightBoxContainer>
          </Col>
        </Row>    
      </Container>
  )
}

Dashboard.layout = Portal;

export default Dashboard;


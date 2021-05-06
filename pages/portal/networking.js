import React, { useState } from "react";
import withAuth from '../../src/hoc/withAuth';
// reactstrap components
import { Container, Row, Col } from "reactstrap";
// layout for this page
import Portal from "../../src/layouts/Portal.js";
// import  LightBoxContainer from '../../src/components/common/lightBoxContainer';
// core components
import  RowUnderline from '../../src/components/networking/RowUnderline';
import  Youtube from '../../src/components/networking/youtube';
import  Flyer from '../../src/components/networking/flyer';
import  Licence from '../../src/components/networking/licence';
import  Carte from '../../src/components/networking/carte';
import  Link from '../../src/components/networking/lien';
import  Pdf from '../../src/components/networking/pdf';
import WalletHeader from "../../src/layouts/WalletHeader";
import { useAppContext } from '../../src/context';
import {useWallets} from '../../src/hooks';


function Networking() {
  const context = useAppContext();
  const {data, isLoading} = useWallets(context.appState.accessToken);
const onChange = (index) => {
  setLink(index)
}

const [link, setLink] = useState(
 0
)

const user = {
  nom : "Ludovic Feutse",
  poste : "Poste",
  email : "feutseludovic@gmail.com",
  tel : "(+237-696-404-016)",
  site : "ludovicFeutse.com",
  address : "ekounou",
}

function selectComponent(){
  if(link == 0)
   return <Carte/>
  if(link == 1) 
    return <Flyer/>
  if(link == 2) 
    return <Licence/>
  if(link == 3) 
    return <Link/>
  if(link == 4) 
    return <Pdf/>
  if(link == 5) 
    return <Youtube/>  
  }



  return (
    <Portal>
      {/* <Header /> */}
      
      <Container fluid>   
        {isLoading? "Loading wallets...": (<WalletHeader wallets={data.data.wallets}/>)}
        <div className="align-items-center mt-5"> 
          <Row className="" style =  {{  }}>
            <Col className="" xl="4" lg="5" md="12" xs="12" style =  {{ }}>
              <div style =  {{ }}>
                  <RowUnderline user={user} item = "0" selectElement = {onChange} titre = "Carte Visite" image = '/assets/img/download.png' /> 
                  <RowUnderline item = "1" selectElement = {onChange}  titre = "Flyers" image = '/assets/img/download.png' /> 
                  <RowUnderline item = "2" selectElement = {onChange} titre = "Licence" image = '/assets/img/download.png' /> 
                  <RowUnderline item = "3" selectElement = {onChange} titre = "Lien d'affiliation" image = '/assets/img/link.png' /> 
                  <RowUnderline item = "4" selectElement = {onChange} titre = "PDF networker" image = '/assets/img/download.png' /> 
                  <RowUnderline item = "5" selectElement = {onChange} titre = "Vidéeo de présentation" image = '/assets/img/download.png' /> 
              </div>
            
            </Col>
            <Col className="d-flex  flex-wrap align-items-center " xl="8" lg="7" md="12" xs="12" style={{width: '50%'}}  >
            
            {selectComponent()}
          </Col>
          </Row>
        </div>
      </Container>
    </Portal>
  );
}


export default withAuth( Networking );

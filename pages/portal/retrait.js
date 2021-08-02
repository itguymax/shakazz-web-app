import React, {useState, useEffect} from 'react'
import AdminBleu from '../../src/layouts/AdminBleu'
import Portal from "../../src/layouts/Portal.js";
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  Button,
  Table,
  Progress,
  Form,Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap"
import Sinput from "../../src/components/forms/Sinput";
import  Arrowback from '../../src/components/common/arrowBack';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import  LightBoxContainer from '../../src/components/common/lightBoxContainer';
import { retraitSchema } from "../../src/validations";
import withAuth from '../../src/hoc/withAuth';
import Toast from "../../src/components/forms/Toast";
import OrangeMoneyForm from "../../src/components/forms/OrangeMoneyForm";
import MtnMoneyForm from "../../src/components/forms/MtnMoneyForm";
import VisaForm from "../../src/components/forms/VisaForm";
import MasterCardForm from "../../src/components/forms/MasterCardForm";
import MobiCashForm from "../../src/components/forms/MobiCashForm";
import MoovMoneyForm from "../../src/components/forms/MoovMoneyForm";
import FloozMobileMoneyForm from "../../src/components/forms/FloozMobileMoneyForm";
import BitcoinForm from "../../src/components/forms/BitcoinForm";
import { useConverter, useRetrait, usePortefeuille, useWallets} from '../../src/hooks'
import { useAppContext } from '../../src/context';
import { filterwallet } from '../../src/helpers/filterWallet'
import {operateurs} from '../../src/helpers/operatorsList'
import {constantes} from '../../src/config';
import {Global,css} from "@emotion/react"
import { useRouter } from 'next/router';
import { device } from '../../src/lib/device.js';
function Retrait() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(retraitSchema),
  });
  const context = useAppContext();
  const [actualModalPage, setActualModalPage] = useState({});
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState({});
  const onDismiss = () => setAlertVisible(false);
  const {data:dtc} = useConverter("BTC","USD");
  const [show, setShow] = useState(false);
  const [token,setToken] = useState(context.appState.accessToken)
  const [portefeuilleOptions, setPortefeuille] = useState([]);
  const [typePorteFeuilleOptions, setTypePorteFeuille] = useState(operateurs.nom);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionMode, setSelectedOptionMode] = useState("");
  const [walletID, setwalletID] = useState("");
  const [walletData, setWalletData] = useState([]);
  const {data:dt, isLoading} = usePortefeuille(token);
  const {data:dw, isLoading:idw} = useWallets(context.appState.accessToken);
  const defautOption = selectedOption;
  const defautOptionMode = selectedOptionMode;
  const [modalTitle, setModalTitle] = useState("");
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const toggleModal = () => {
    if(selectedOptionMode !== "") {
      toggleActualModalPage(selectedOptionMode);
      setModal(!modal);
    }else{
      setResponseAlert({error:true,message:"Veuillez sélectionner un type de portefeuille"});
      setAlertVisible(true);
    }
  };
  const toggleActualModalPage = (selectedOptionMode)=>{
    if(selectedOptionMode === 'Orange Money'){
      setModalTitle('Orange Money');
      return setActualModalPage(<OrangeMoneyForm/>);
    }else if(selectedOptionMode === 'MTN Money'){
      setModalTitle('MTN Money');
        return setActualModalPage(<MtnMoneyForm/>);
    }else if(selectedOptionMode === 'VISA'){
      setModalTitle('VISA');
        return setActualModalPage(<VisaForm/>);
    }else if(selectedOptionMode === 'MasterCard'){
      setModalTitle('MasterCard');
        return setActualModalPage(<MasterCardForm/>);
    }else if(selectedOptionMode === 'MobiCash'){
      setModalTitle('MobiCash');
        return setActualModalPage(<MobiCashForm/>);
    }else if(selectedOptionMode === 'Moov Money'){
      setModalTitle('MoovMoney');
        return setActualModalPage(<MoovMoneyForm/>);
    }else if(selectedOptionMode === 'Flooz Mobile Money'){
      setModalTitle('FloozMobileMoney');
        return setActualModalPage(<FloozMobileMoneyForm/>);
    }else if(selectedOptionMode === 'Bitcoin'){
      setModalTitle('Bitcoin');
        return setActualModalPage(<BitcoinForm/>);
    }
  };
  /*const onSubmit = (data) => {console.log(data)
    const body = {
      data : {
        user: {
            transaction:psw,
        },
        whitdrawal: {
            wId:walletID,
        },
        principal: {
            amount: parseFloat(usdVal),
        }
    }
    }
    setDataModal({amount:usdVal,mode_versement:selectedOptionMode,numero:selectedOption});
    openDepotModal();

  };*/
   const handleOnSelectOption = (option) => {
        setSelectedOption(option.value);
        setwalletID(walletData?.filter(item => item.nom === option.value)[0].address);
   }
   const handleOnSelectOptionMode = (option) => {
        setSelectedOptionMode(option.value);
   }
   const handleToggleshow = () => setShow(!show);
   const wp = dw?.data.wallets.filter((item)=> item.type === constantes.wallets.p) ;
   //console.log("hhhhhhhhh", wp);
   /*useEffect(()=> {
     if( typeof window !== "undefined" && dt){
        setPortefeuille(dt.data.porte_feuilles.map(item => item.nom));
        setWalletData(dt.data.porte_feuilles.filter(item => item.nom))
     }
   })*/
   useEffect(() => {
      // Prefetch the dashboard page
      router.prefetch('/portal/dashboard');
    }, [])
  return (
    <AdminBleu>
    <div>
    <Global
    styles={css`
      @media ${device.iphoneX} {
          .modal-content {
            width:22.5em !important;
          }
        }
      @media ${device.sPhone} {
        .modal-content {
          width:21.5em !important;
        }
        }
      @media ${device.mPhone} {
        .modal-content {
          width:19em !important;
        }
        }
      @media ${device.bPhone} {
        .modal-content {
          width:24.5em;
        }
      }
      @media ${device.vsPhone} {
        .modal-content {
          width:16.5em !important;
        }
      }
    `}
    />
      <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#fff"}}> Soumettre une demande de retrait</h1>
      <Row className="mt-4 justify-content-between">
        <Col xl="9">
           <Form role="form">
              <Sinput
              label="Type de porte feuille"
              name="mode_versement"
              inline
              options={typePorteFeuilleOptions}
              register={register}
              defaultOption={defautOptionMode}
              placeholder="Choisir un type de porte feuille"
              dd
              onSelect={handleOnSelectOptionMode}
            />
              <Row>
                 <Col xl="3"></Col>
                 <Col xl="6">
                   <Button className="mt-3 mb-1"  onClick={toggleModal} style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
                 Poursuivre
                </Button>
                 </Col>
              </Row>
           </Form>
        </Col>
        <Col className=" d-flex  align-items-center  " xl="3" style={{flexDirection: 'column'}}>
         <h4 className="pb-3 "  style={{font: 'normal normal italic 18px/19px Ubuntu', color: "#fff"}}>Montant disponible</h4>
         <LightBoxContainer borderR="20px" width="180px">
          <div className="d-flex justify-content-center align-items-center pt-2 pb-2" style={{flexDirection: 'column'}}>
             <h2 style={{font: 'normal normal italic 16px/18px Ubuntu', color: '#444'}} >Wallet principal</h2>
              {idw?"...":(
                <h1 className="" style={{font: 'normal normal normal 20px/25px Ubuntu',display: 'block',color: '#679966',  lineHeight: '1.2'}}> {(wp[0]?.montantUSD||0).toLocaleString('en-US', { style: 'currency', currency: 'USD',})}</h1>
              )}
          </div>
         </LightBoxContainer>

        </Col>
      </Row>
    </div>
    <div style={{position:"fixed",opacity:"0.8"}}>
     <Modal isOpen={modal} toggle={toggleModal} className="">
       <ModalHeader toggle={toggleModal}>{modalTitle}</ModalHeader>
       <ModalBody>
        {actualModalPage}
       </ModalBody>
       <ModalFooter>
       </ModalFooter>
     </Modal>
   </div>
   <Row style={{marginBottom:"-2.5em"}}>
     <Col xs="10"></Col>
     <Col xs="2" style={{float:"right"}}><Arrowback url={"/portal/dashboard"}/></Col>
   </Row>
   <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
    </AdminBleu>
  )
}


//  Retrait.layout = AdminBleu;
export default  withAuth(Retrait);

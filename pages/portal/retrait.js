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
  Form,
} from "reactstrap"
import Sinput from "../../src/components/forms/Sinput";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import  LightBoxContainer from '../../src/components/common/lightBoxContainer';
import { retraitSchema } from "../../src/validations";
import Smodal from '../../src/components/common/Smodal';
import withAuth from '../../src/hoc/withAuth';
import { useConverter, useRetrait, usePortefeuille, useWallets} from '../../src/hooks'
import { useAppContext } from '../../src/context';
import { filterwallet } from '../../src/helpers/filterWallet'
import {constantes} from '../../src/config';
import {Global,css} from "@emotion/react"
import { device } from '../../src/lib/device.js';
function Retrait() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(retraitSchema),
  });
  const context = useAppContext();
  const {data:dtc} = useConverter("BTC","USD");
  const [usdVal, setUSDVal] = useState(0);
  const [show, setShow] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [token,setToken] = useState(context.appState.accessToken)
  const [psw, setPsw] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [portefeuilleOptions, setPortefeuille] = useState([]);
  const [modeVersementOptions, setModeVersement] = useState(["VISA","MasterCard","Orange Money","MTN Money","Bitcoin"]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionMode, setSelectedOptionMode] = useState("");
  const [walletID, setwalletID] = useState("");
  const [walletData, setWalletData] = useState([]);
  const openDepotModal = () => setOpenModal(!openModal);
  const {data:dt, isLoading} = usePortefeuille(token);
  const {data:dw, isLoading:idw} = useWallets(context.appState.accessToken);
  const defautOption = selectedOption;
  const defautOptionMode = selectedOptionMode;
  const onSubmit = (data) => {console.log(data)
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

  };
   const handleOnSelectOption = (option) => {
        setSelectedOption(option.value);
        setwalletID(walletData?.filter(item => item.nom === option.value)[0].address);
   }
   const handleOnSelectOptionMode = (option) => {
        setSelectedOptionMode(option.value);
   }
   const handleToggleshow = () => setShow(!show);
   const changePassword = (event) => {
     setPsw(event.target.value)
   };
   const changeAmount = (event) => {
     setUSDVal(event.target.value)
   };
   const wp = dw?.data.wallets.filter((item)=> item.type === constantes.wallets.p) ;
   //console.log("hhhhhhhhh", wp);
   useEffect(()=> {
     if( typeof window !== "undefined" && dt){
        setPortefeuille(dt.data.porte_feuilles.map(item => item.nom));
        setWalletData(dt.data.porte_feuilles.filter(item => item.nom))
     }
   })

  return (
    <AdminBleu>
    <div>
    <Global
    styles={css`
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
      @media ${device.iphoneX} {
          .modal-content {
            width:22.5em;
          }
        }
      @media ${device.bPhone} {
        .modal-content {
          width:25em;
        }
      }
    `}
    />
      <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#fff"}}> Soumettre une demande de retrait</h1>
      <Row className="mt-4 justify-content-between">
        <Col xl="9">
           <Form role="form">
                <Sinput
                label="Montant à retirer (USD)"
                name="amount"
                placeholder="0"
                type="number"
                // rgba(68, 68, 68, 1)
                register={register}
                handleOnchange={changeAmount}
                inputBg="#679966"
                inline
                usd
              />
                <Sinput
                label="Adresse du portefeuille à débiter"
                name="portefeuille"
                inline
                options={portefeuilleOptions}
                register={register}
                defaultOption={defautOption}
                placeholder="Choisir un portefeulle"
                dd
                onSelect={handleOnSelectOption}
              />
              <Sinput
              label="Mode de versement"
              name="mode_versement"
              inline
              options={modeVersementOptions}
              register={register}
              defaultOption={defautOptionMode}
              placeholder="Choisir un mode de versement"
              dd
              onSelect={handleOnSelectOptionMode}
            />
              <Sinput
                label="Mot de passe de la transaction"
                name="transactionPassword"
                placeholder="Mot de passe de transaction"
                type={show?"text":"password"}
                inputBg="#679966"
                register={register}
                inline
                append
                iStyle={{ borderRadius:"15px",backgroundColor: "#679966"}}
                icon={show ? "fa fa-eye":"fa fa-eye-slash"}
                handleToggleshow={handleToggleshow }
                handleOnchange={changePassword}
              />
              <Sinput
              label="Veuillez entrer le numéro à créditer"
              name="numero"
              placeholder="RIB,Numéro de téléphone,adresse Bitcoin...etc"
              type="text"
              register={register}
              // rgba(68, 68, 68, 1)
              inputBg="#679966"
              inline
            />
              <Row>
                 <Col xl="3"></Col>
                 <Col xl="6">
                   <Button className="mt-3 mb-1"  onClick={onSubmit} style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
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
        {openModal&& <Smodal data={dataModal} handleClose={openDepotModal} open={openModal}/>}
      </Row>
    </div>
    </AdminBleu>
  )
}


//  Retrait.layout = AdminBleu;
export default  withAuth(Retrait);

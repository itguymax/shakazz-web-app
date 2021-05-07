import React, {useState} from 'react'
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
  const [usdVal, setUSDVal] = useState(100);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [token,setToken] = useState(context.appState.accessToken)
  const [psw, setPsw] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [portefeuilleOptions, setPortefeuille] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const openDepotModal = () => setOpenModal(!openModal);
  const {data:dt, isLoading} = usePortefeuille(token);
  const {data:dw, isLoading:idw} = useWallets(context.appState.accessToken);

  // if(dt?.success && !dt?.error){
  //   const {data} = dt;
  //   if(data.porte_feuille.length < 1){
  //       alert("Vous n'avez par de porte feuille, cree s'en ");
  //   }
  //   setPortefeuille(data.porte_feuille);
  // } else {
  //   alert("Une erreur est survenue")
  // }
  console.log("porte feuille", dt);
  const onSubmit = (data) => {
    const body = {
      data : {
        user: {
            transaction:psw,
        },
        whitdrawal: {
            wId:""
        },
        principal: {
            amount: parseInt(usdVal),
        }
    }
    }
    setData({montant:parseInt(usdVal),quantitebtc: (usdVal/ dtc?.USD).toFixed(5), method:"Bitcoin",wallet:""});
    openDepotModal();

  };
  const changeUSDtoBTC = (data) => {
      console.log("usdTo btc", data.target.value);
      setUSDVal(data.target.value);

   }
   const handleOnSelectOption = (option) => {
        setSelectedOption(option.value);
   }
   const handleToggleshow = () => setShow(!show);
   const changePassword = (event) => {
     setPsw(event.target.value)
   };
   const defautOption = selectedOption;
   const wp = dw?.data.wallets.filter((item)=> item.type === constantes.wallets.p) ;
   //console.log("hhhhhhhhh", wp);
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
      <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#fff"}}> Effectuer un retrait</h1>
      <Row className="mt-4 justify-content-between">
        <Col xl="9">
           <Form role="form">
                <Sinput
                label="Montant à retirer"
                name="montant"
                placeholder="6,000"
                type="text"
                // rgba(68, 68, 68, 1)
                register={register}
                inputvalue={usdVal}
                inputBg="#679966"
                inline
                handleOnchange={changeUSDtoBTC}
                usd
              />

              <Sinput
                label="Equivalence"
                name="quantitebtc"
                placeholder="0.001"
                type="text"
                register={register}
                inputBg="#679966"
                inline
                inputvalue={(usdVal/ dtc?.USD).toFixed(5)}
                readOnly={true}
                btc
              />
                <Sinput
                label="Adresse à créditer"
                name="portefeuille"
                inline
                options={portefeuilleOptions || dt}
                defaultOption={defautOption}
                placeholder="Choisir un portefeulle"
                dd
                register={register}
                onSelect={handleOnSelectOption}
              />

              <Sinput
                label="Mot de passe de la transaction"
                name="transactionPassword"
                placeholder="Mot de passe de transaction"
                 type={show?"text":"password"}
                register={register}
                inputvalue={psw}
                inputBg="#679966"
                inline
                append
                iStyle={{ borderRadius:"15px",backgroundColor: "#679966"}}
                icon={show ? "fa fa-eye":"fa fa-eye-slash"}
                handleToggleshow={handleToggleshow }
                handleOnchange={changePassword}
              />
              <Row>
                 <Col xl="3"></Col>
                 <Col xl="6">
                   <Button className="mt-3 mb-1"  onClick={onSubmit} style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
                 Confirmer
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
        {openModal&& <Smodal data={data} handleClose={openDepotModal} open={openModal}/>}
      </Row>
    </div>
    </AdminBleu>
  )
}


//  Retrait.layout = AdminBleu;
export default  withAuth(Retrait);

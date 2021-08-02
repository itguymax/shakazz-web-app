import React, {useState, useEffect} from 'react'
import Public from '../../../src/layouts/Public'
import {Global,css} from "@emotion/react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { achatCrypto } from "../../../src/validations";
import { useAppContext } from '../../../src/context';
import { useRouter } from 'next/router';
import {useDepositCrypto} from '../../../src/hooks';
import Toast from "../../../src/components/forms/Toast";
import withAuth from '../../../src/hoc/withAuth';
import Portal from "../../../src/layouts/Portal.js";
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  Button,Spinner,
  Table,
  Progress,
  Form,Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap"
import Sinput from "../../../src/components/forms/Sinput";
import {cp_init} from "../../../src/helpers/cp";
import { useConverter,useConverterAl1 } from '../../../src/hooks';
//import { v4 as uuidv4 } from 'uuid';
import {useMutation, useQueryClient} from 'react-query';
function BuyCryptos() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(achatCrypto),
  });
  const cryptos = [{
    nom:"Bitcoin",
    code:"CRYPTO100"
  },{
    nom:"USDT",
    code:"CRYPTO101"
  }];

  const optionstype = [cryptos[0].nom,cryptos[1].nom];
  const context = useAppContext();
  const router = useRouter();
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState({});
  const onDismiss = () => setAlertVisible(false);
  const [dataConverter, setDataConverter] = useState("BTC");
  const {data:dtc} = useConverter("BTC","USD");
  const {data:dtc2} = useConverterAl1("USDT","USD");
  const [amountUSD, setAmountUSD] = useState(0);
  const [amountCrypto, setAmountCrypto] = useState(0);
  const [amountXAF, setAmountXAF] = useState(0);
  const [actualCrypto, setActualCrypto] = useState(cryptos[0].code);
  const [selectedType, setType] = useState("");
  const [destinationOption, setDestinationOption] = useState([cryptos[0].nom,cryptos[1].nom]);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    if(selectedType !== "") setModal(!modal);
  };
  const handleOnSelectTypeCrypto = (type) => {
          if(type.value === cryptos[0].nom){
            setDataConverter("BTC");
            setActualCrypto(cryptos[0].code);
          }else{
            setDataConverter("USDT");
            setActualCrypto(cryptos[1].code);
          }
  }
  const handleOnSelectAmount = (type) => {
    setAmountUSD(event.target.value);
    setAmountXAF(event.target.value*650);
  }
  const {mutateAsync, isLoading, isError, isSuccess}  = useDepositCrypto();
  const handleMoney = async (hookData)=>{
    const {wallet, amount} = hookData;
    const body = {
      data: {
          address:wallet,
          crypto:"btc"
          //crypto:actualCrypto
      }
    };
    const res = await mutateAsync(body);
    if(res.error && !res.success){
        setResponseAlert(res);
        setAlertVisible(true);
       } else {
         cp_init(res.data.transactionId,amountXAF,"Achat de Cryptomonaie : "+actualCrypto,"achat");
         //cp_init(res.data.transactionId,amountVal);
     }
  };
  return (
    <Portal>
    <Global
    styles={css`
      /*Responsive*/
      .table{
        margin-top:2em;
      }
        .table th{
          background-color:white !important;
          color:#143527 !important;
          font-size:1.3em;
        }
        .table td{
          color:#143527 !important;
          font-size:1.3em;
          text-align:center;
        }
    `}
  />
    <div style={{paddingBottom:"2em",paddingTop:"2em"}}>
    <Container>
    <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#143527"}}>Formulaire d'achat de cryptomonaie</h1>
      <Form onSubmit={handleSubmit(handleMoney)}>
      <Row>
          <Col sm={{ size: '9', offset: 1 }}>
                <Sinput
                 label="Cryptomonaie à acheter"
                 name="crypto"
                 inline
                 options={destinationOption}
                 defaultOption={""}
                 placeholder="Choix de la cryptomonaie à acheter"
                 dd
                 labelColor="#143527"
                 register={()=>{}}
                 onSelect={handleOnSelectTypeCrypto}
               />
               <Sinput
                label="Adresse wallet à créditer"
                name="wallet"
                inline
                labelColor="#143527"
                placeholder="3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5"
                type="text"
                inputBg="#679966"
                register={register}
                onSelect={()=>{}}
              />
              {errors.wallet && <div className="text-muted font-italic" style={{marginBottom:"2em"}}>

                 <span className="text-danger font-weight-700">{errors.wallet.message}</span>

             </div>}
               <Sinput
                label="Montant à verser"
                name="amount"
                inline
                labelColor="#143527"
                placeholder="0"
                usd
                inputBg="#679966"
                type="number"
                register={register}
                handleOnchange={handleOnSelectAmount}
                inputvalue={amountUSD}
              />{errors.amount && <div className="text-muted font-italic" style={{marginBottom:"2em"}}>

                 <span className="text-danger font-weight-700">{errors.amount.message}</span>

             </div>}
             <Table bordered>
              <thead>
                <tr>
                  <th>Montant USD</th>
                  <th>{"Equivalence "+destinationOption}</th>
                  <th>Total à payer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{amountUSD+"$"}</td>
                  <td>{actualCrypto===cryptos[0].code?(amountUSD/dtc?.USD).toFixed(5):(amountUSD/dtc2?.USD).toFixed(5)}</td>
                  <td>{amountUSD*650+" XAF"}</td>
                </tr>
              </tbody>
            </Table>
               <Button className="mt-3 mb-1"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
               {isLoading? <Spinner size="sm" color="#cc993a" />: "POURSUIVRE L'ACHAT"}
              </Button>
              <div id="cinetpay_payment_result" style={{color:"red",fontSize:"1.1em"}}></div>
          </Col>
        </Row>
      </Form>
      </Container>
      <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
    </div>
  </Portal>
  )
}
export default withAuth(BuyCryptos);

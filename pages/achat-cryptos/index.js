import React, {useState, useEffect} from 'react'
import Public from '../../src/layouts/Public'
import {Global,css} from "@emotion/react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { achatCrypto } from "../../src/validations";
import { useAppContext } from '../../src/context';
import { useRouter } from 'next/router';
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
import {cp_init} from "../../src/helpers/cp";
import { useConverter } from '../../src/hooks';
import { v4 as uuidv4 } from 'uuid';
export default function BuyCryptos() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(achatCrypto),
  });
  const optionstype = ["Bitcoin","USDT"];
  const context = useAppContext();
  const router = useRouter();
  const [dataConverter, setDataConverter] = useState("BTC");
  const {data:dtc} = useConverter("BTC","USD");
  const {data:dtc2} = useConverter("USDT","USD");
  const [amountUSD, setAmountUSD] = useState(0);
  const [amountCrypto, setAmountCrypto] = useState(0);
  const [amountXAF, setAmountXAF] = useState(0);
  const [actualCrypto, setActualCrypto] = useState("Bitcoin");
  const [selectedType, setType] = useState("");
  const [destinationOption, setDestinationOption] = useState(["Bitcoin","USDT"]);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    if(selectedType !== "") setModal(!modal);
  };
  const handleOnSelectTypeCrypto = (type) => {
          if(type.value === "Bitcoin"){
            setDataConverter("BTC");
          }else{
            setDataConverter("USDT");
          }
          setActualCrypto(type.value);
  }
  const handleOnSelectAmount = (type) => {
    setAmountUSD(event.target.value);
    setAmountXAF(event.target.value*650);
  }
  const handleMoney = async ()=>{
    cp_init(uuidv4(),amountXAF,"Achat de Cryptomonaie : "+actualCrypto,"achat");
  };
  return (
    <Public>
    <Global
    styles={css`
      /*Responsive*/
      .table{
        margin-top:2em;
      }
        .table th{
          background-color:white !important;
          color:#244230 !important;
          font-size:1.3em;
        }
        .table td{
          color:white !important;
          font-size:1.3em;
          text-align:center;
        }
    `}
  />
    <div style={{backgroundColor:"#244230",paddingBottom:"2em",paddingTop:"2em"}}>
    <Container>
    <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#fff"}}>Formulaire d'achat de cryptomonaie</h1>
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
                 register={()=>{}}
                 onSelect={handleOnSelectTypeCrypto}
               />
               <Sinput
                label="Adresse wallet à créditer"
                name="wallet"
                inline
                placeholder="dfjidjdayuaz668"
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
              <Sinput
               label="Email"
               name="email"
               inline
               inputBg="#679966"
               placeholder="Entrez votre adresse mail"
               type="text"
               register={register}
               onSelect={()=>{}}
             />{errors.email && <div className="text-muted font-italic" style={{marginBottom:"2em"}}>

                <span className="text-danger font-weight-700">{errors.email.message}</span>

            </div>}
             <Table bordered>
              <thead>
                <tr>
                  <th>Montant USD</th>
                  <th>{"Equivalence "+actualCrypto}</th>
                  <th>Total à payer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{amountUSD+"$"}</td>
                  <td>{(amountUSD/dtc?.USD).toFixed(5)}</td>
                  <td>{amountUSD*650+" XAF"}</td>
                </tr>
              </tbody>
            </Table>
               <Button className="mt-3 mb-1"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
               POURSUIVRE L'ACHAT
              </Button>
              <div id="cinetpay_payment_result" style={{color:"red",fontSize:"1.1em"}}></div>
          </Col>
        </Row>
      </Form>
      </Container>
    </div>
  </Public>
  )
}

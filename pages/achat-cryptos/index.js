import React, {useState, useEffect} from 'react'
import Public from '../../src/layouts/Public'
import {Global,css} from "@emotion/react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { depotBTCSchema } from "../../src/validations";
import { useAppContext } from '../../src/context';
import { useRouter } from 'next/router';
import  LightBoxContainer from '../../src/components/common/lightBoxContainer';
import CinetPayForm from "../../src/components/forms/CinetPayForm";
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
import { useConverter } from '../../src/hooks'
export default function BuyCryptos() {
  const optionstype = ["Bitcoin","USDT"];
  const context = useAppContext();
  const router = useRouter();
  const {data:dtc} = useConverter("BTC","USD");
  const [amountUSD, setAmountUSD] = useState(0);
  const [amountCrypto, setAmountCrypto] = useState(0);
  const [amountXAF, setAmountXAF] = useState(0);
  const [actualCrypto, setActualCrypto] = useState("");
  const [selectedType, setType] = useState("");
  const [destinationOption, setDestinationOption] = useState(["Bitcoin","USDT"]);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    if(selectedType !== "") setModal(!modal);
  };
  const handleOnSelectTypeCrypto = (type) => {
          setActualCrypto(type.value);
  }
  const handleOnSelectAmount = (type) => {
    setAmountUSD(event.target.value);
  }
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
                name="adresse"
                inline
                placeholder="dfjidjdayuaz668"
                type="text"
                inputBg="#679966"
                register={()=>{}}
                onSelect={()=>{}}
              />
               <Sinput
                label="Montant à verser"
                name="amount"
                inline
                placeholder="0"
                usd
                inputBg="#679966"
                type="number"
                register={()=>{}}
                handleOnchange={handleOnSelectAmount}
                inputvalue={amountUSD}
              />
              <Sinput
               label="Email"
               name="amount"
               inline
               inputBg="#679966"
               placeholder="Entrez votre adresse mail"
               type="email"
               register={()=>{}}
               onSelect={()=>{}}
             />
             <Table bordered>
              <thead>
                <tr>
                  <th>Montant USD</th>
                  <th>{"Equivalence "+actualCrypto}</th>
                  <th>Total XAF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{amountUSD+"$"}</td>
                  <td>{(amountUSD/ dtc?.USD).toFixed(5)}</td>
                  <td>{amountUSD*650}</td>
                </tr>
              </tbody>
            </Table>
               <Button onClick={toggleModal} className="mt-3 mb-1"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
               POURSUIVRE L'ACHAT
              </Button>
          </Col>
        </Row>
      </Container>
    </div>
  </Public>
  )
}

import React, {useState} from 'react'
import {cp_init} from "../../../src/helpers/cp";
import {useDepotTransaction,useDepositWebhookCp} from '../../hooks';
import {useDeposit} from '../../hooks';
import { useAppContext } from '../../context';
import { useConverterAfrica } from '../../../src/hooks'
import { tauxChange } from "../../helpers/tauxChange";
import { fraisOperateurs } from "../../helpers/fraisOperateurs";
import {
  FormGroup,
  Input,Table,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,Button,
  Row, Form, Label,FormText,Spinner
} from "reactstrap";
import Dot from '../common/dot'
import {useMutation, useQueryClient} from 'react-query';

export default function CinetPayForm() {
  const context = useAppContext();
  const [xafVal, setXAFVal] = useState(0);
  const [amountVal, setAmountVal] = useState(0);
  const [firstAmountVal, setFirstAmount] = useState(0);
  const [countryVal, setCountryVal] = useState("Cameroun");
  const [currencyVal, setCurrencyVal] = useState("XAF");
  const {data:dtc} = useConverterAfrica("USD",currencyVal);
  const changeXAFtoUSD = (data) => {
     setXAFVal(data);
     let amountReal = parseFloat(data)+((data*fraisOperateurs(countryVal))/100);
     setAmountVal(amountReal);
  }
  const changeCurrency = (data) => {
     setCurrencyVal(data.target.value);
     changeXAFtoUSD(firstAmountVal);
  }
  const changeCountry = (data) => {
     setCountryVal(data.target.value);
     setXAFVal(amountVal);
     changeXAFtoUSD(firstAmountVal);
  }
  const {mutateAsync, isLoading, isError, isSuccess}  = useDepotTransaction();
  //const {mutateAsync:mutateAsyncCp, isLoading:isLoadingCp, isError:isErrorCp, isSuccessCp:isSuccessCp}  = useDepositWebhookCp();
  return (
    <div>
        <FormGroup>
            <Label>Veuillez selectionner le pays où vous éffectuez le transfert</Label>
            <Input onChange={changeCountry} type="select" id="cinetpay_country">
              <option>Cameroun</option>
              <option>Sénégal</option>
              <option>Togo</option>
              <option>Mali</option>
              <option>Côte d'ivoire</option>
              <option>Burkina Faso</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label>Veuillez Choisir une monnaie</Label>
            <Input onChange={changeCurrency} type="select" id="cinetpay_currency">
              <option>XAF</option>
              <option>XOF</option>
              <option>CDF</option>
            </Input>
        </FormGroup>
        <FormGroup>
          <Label>Montant {currencyVal}</Label>
          <Input type="integer" onChange={(data)=>{
            let inputAmount = data.target.value;
            changeXAFtoUSD(inputAmount);
            setFirstAmount(inputAmount);
          }} id="cinetpay_amount" placeholder="100" />
        </FormGroup>
        <FormGroup>
        <Button color="primary">Les transactions via VISA/Mastercard sont soumises à 3.5% de frais.</Button>{' '}
          <Table>
            <thead>
              <tr>
                <th>Montant en USD</th>
                <th>Frais</th>
                <th>Total en {currencyVal}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{(xafVal/tauxChange(currencyVal)).toFixed(3)}</td>
                <td>{fraisOperateurs(countryVal)}</td>
                <td>{amountVal}</td>
              </tr>
            </tbody>
            </Table>
        </FormGroup>

        <Button onClick={async ()=>{
          //Here we ask token
          const body = {};
          const res = await mutateAsync({accessToken: context.appState.accessToken ,data:body});
          // const res2 = await mutateAsyncCp({accessToken: context.appState.accessToken ,data:{
          //   //trans_id:paymentInfo.cpm_trans_id
          //   trans_id:""
          // }});
          if(res.error && !res.success){
              alert("Probleme de connexion avec le server shakazz!");
             } else {
               cp_init(res.data.transactionId,amountVal);
           }
        }} className="mt-3 mb-1" id="cp_bt_get_signature" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
        {isLoading? <Spinner size="sm" color="#cc993a" />: "SOUMETTRE"}
       </Button>
       <div id="cinetpay_payment_result" style={{color:"red",fontSize:"1.1em"}}></div>
    </div>
  )
}

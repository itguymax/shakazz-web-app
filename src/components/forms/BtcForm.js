import React, {useState} from 'react'
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,Button,
  Row, Form, Label,FormText
} from "reactstrap";
import Dot from '../common/dot'
import { useConverter } from '../../../src/hooks'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { depotBTCSchema } from "../../../src/validations";
import { useDeposit} from '../../../src/hooks';

export default function BtcForm({}) {
  const {mutateAsync, isLoading, isError, isSuccess}  = useDeposit();
  const [usdVal, setUSDVal] = useState(100);
  const {data:dtc} = useConverter("BTC","USD");
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(depotBTCSchema),
  });
  const  handleMSubmit = async (t) => {
     const body = {
     data: {
       principal : {
           type : "principal",
           btc : t?.quantitebtc,
           amount: t?.montant,
           taux : dtc?.USD
       },
       user: {
           transaction: t?.transactionPassword,
       },
     }
   };
   // setBody(body);
   const res =  await mutateAsync({accessToken: context.appState.accessToken,data:body});
    const {error, message,success, data} = res;
       if(error && !success){
       setSuccessmsg(null);
       alert("une erreur s'est produite")
      } else {
        setErrormsg(null);
        setSuccessmsg(message);
      }
  }
  const changeUSDtoBTC = (data) => {
     setUSDVal(data.target.value);
  }
  const onSubmit = (hookdata) =>{
    console.log("deposit data", hookdata);
  };
  return (
    <>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Montant</Label>
          <Input onChange={changeUSDtoBTC} innerRef={register()} name="depot_btc_montant" type="integer" placeholder="100" />
        </FormGroup>
        <FormGroup>
          <Label>Equivalence en Bitcoin</Label>
          <Input disabled value={(usdVal/ dtc?.USD).toFixed(5)} type="integer" placeholder="100" />
        </FormGroup>
       {errors.depot_btc_montant && <div className="text-muted font-italic">

          <span className="text-danger font-weight-700">{errors.depot_btc_montant.message}</span>

      </div> }
      <Button className="mt-3 mb-1"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
      {isLoading? <Spinner size="sm" color="#cc993a" />: "SOUMETTRE"}
     </Button>
    </Form>
    </>
  )
}

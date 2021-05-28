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
import Sinput from "./Sinput";
import Dot from '../common/dot'
import { useConverter } from '../../../src/hooks'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { depotSchema } from "../../../src/validations";

export default function BtcForm({}) {
  const [usdVal, setUSDVal] = useState(100);
  const {data:dtc} = useConverter("BTC","USD");
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(depotSchema),
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
       setErrormsg(message);

       alert("une erreur s'est produite")
      } else {

        setErrormsg(null);
        setSuccessmsg(message);

        router.push('/portal/depot/detail');
      }
  }
  const changeUSDtoBTC = (data) => {
     setUSDVal(data.target.value);
  }
  const onSubmit = (hookdata) =>{
    console.log("deposit data", data);
    setData(hookdata);
    openDepotModal();

  };
  return (
    <>
    <Form>
        <FormGroup>
          <Label>Montant</Label>
          <Input onChange={changeUSDtoBTC} type="integer" placeholder="100" />
        </FormGroup>
        <FormGroup>
          <Label>Equivalence en Bitcoin</Label>
          <Input disabled value={(usdVal/ dtc?.USD).toFixed(5)} type="integer" placeholder="100" />
        </FormGroup>
       {errors.montant && <div className="text-muted font-italic">

          <span className="text-danger font-weight-700">{errors.montant.message}</span>

      </div> }
      <Button className="mt-3 mb-1"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
      SOUMETTRE
     </Button>
    </Form>
    </>
  )
}

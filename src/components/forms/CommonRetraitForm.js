import React, {useState, useEffect} from 'react'
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,Button,Spinner,
  Row, Form, Label,FormText,Alert
} from "reactstrap";
import Sinput from "./Sinput";
import Toast from "./Toast";
import Dot from '../common/dot'
import { useConverter } from '../../../src/hooks'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRetrait, usePortefeuille, useWallets} from '../../../src/hooks'
import { useAppContext } from '../../../src/context';
import { retraitSchema } from "../../../src/validations";

export default function CommonRetraitForm({labelRib,moyen}) {
  const context = useAppContext();
  const {mutateAsync, isLoading, isError, isSuccess}  = useRetrait();
  const [usdVal, setUSDVal] = useState(0);
  const [actualCurrency, setCurrency] = useState("XAF");
  const {data:dtc} = useConverter("BTC","USD");
  const [show, setShow] = useState(false);
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState({});
  const onDismiss = () => setAlertVisible(false);
  const [token,setToken] = useState(context.appState.accessToken);
  const {data:dt,isLoading:dtIsloading} = usePortefeuille(token);
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(retraitSchema),
  });
  let typeDePortefeuille = "";
  if(moyen === "VISA" || moyen === "MasterCard"){
    typeDePortefeuille = "carte";
  }else if(moyen === "OrangeMoney"){
    typeDePortefeuille = "orange";
  }else if(moyen === "MtnMoney"){
    typeDePortefeuille = "mtn";
  }else if(moyen === "Bitcoin"){
    typeDePortefeuille = "btc";
  }
  const [portefeuilleOptions, setPortefeuille] = useState(dt.data.porte_feuilles.filter(item => item.type === typeDePortefeuille));
  let defaultPortefeuilleA = portefeuilleOptions[0]?portefeuilleOptions[0]["_id"]:0;
  const [portefeuilleA, setPortefeuilleA] = useState(defaultPortefeuilleA);
  const portefeuilleChange = (event) => {
    let elt = event.target.selectedIndex;
    setPortefeuilleA(event.target.options[elt].dataset.idportefeuille);
  };
  const currencyChange = (event) => {
    let elt = event.target.selectedIndex;
    setCurrency(event.target.options[elt].text);
  };
  const onSubmit = async (hookdata) =>{
    const body = {
      data : {
        user: {
            transaction:hookdata.transactionPassword,
        },
        whitdrawal: {
            wId:portefeuilleA,
        },
        principal: {
            amount: parseFloat(hookdata.amount)
        },
        currency:actualCurrency
    }
  };console.log(body.data)
    const res =  await mutateAsync({accessToken: context.appState.accessToken,data:body});
    const {error, message,success, data} = res;
        if(error && !success){
          setResponseAlert(res);
          setAlertVisible(true);
        } else {
          setResponseAlert(res);
          setAlertVisible(true);
       }
  };
  /*

  */
  /*useEffect(()=> {
    if( typeof window !== "undefined" && dt){console.log(dt.data.porte_feuilles)
       setPortefeuille(dt.data.porte_feuilles.map(item => item));
    }
  })*/
  return (
    <><Form onSubmit={handleSubmit(onSubmit)}>
    <FormGroup>
      <Sinput
        label="Montant USD"
        placeholder="100"
        type="number"
        register={register}
        name="amount"
        append
        iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
      />
      {errors.amount && <div className="text-muted font-italic">

         <span className="text-danger font-weight-700">{errors.amount.message}</span>

     </div> }
    </FormGroup>
        <FormGroup>
          <Sinput
            label={labelRib}
            placeholder={moyen}
            type="text"
            register={register}
            name="rib"
            append
            iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
          />
          {errors.rib && <div className="text-muted font-italic">

             <span className="text-danger font-weight-700">{errors.rib.message}</span>

         </div> }
        </FormGroup>
        <FormGroup>
          <Label>Nom du portefeuille à créditer</Label>
          <Input onChange={portefeuilleChange} type="select" name="portefeuille" placeholder="Choisisez un portefeuille">
              {portefeuilleOptions.map( (option, i) => (
                  <option data-idPortefeuille={option["_id"]} key={i}>
                      {option.nom}
                  </option>

                ))}
          </Input>
        </FormGroup>
        {moyen!=="Bitcoin" && <FormGroup><Input onChange={currencyChange} type="select" name="currency" placeholder="Choisissez une monaie de retrait">
            {["XAF","XOF","CDF"].map( (option, i) => (
                <option key={i}>
                    {option}
                </option>

              ))}
        </Input>
        {errors.currency && <div className="text-muted font-italic">

           <span className="text-danger font-weight-700">{errors.currency.message}</span>

       </div> }
        </FormGroup>}
        <FormGroup>
          <Sinput
            label="Mot de passe de la transaction"
            placeholder="Mot de passe de transaction"
            type="password"
            register={register}
            name="transactionPassword"
            append
            iStyle={{ borderRadius:"10px",backgroundColor: "#f5f5f5", overflow:"hidden"}}
          />
          {errors.transactionPassword && <div className="text-muted font-italic">

             <span className="text-danger font-weight-700">{errors.transactionPassword.message}</span>

         </div> }
        </FormGroup>
        <Button className="mt-3 mb-1"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
        {isLoading? <Spinner size="sm" color="#cc993a" />: "SOUMETTRE"}
       </Button>
        </Form>
        <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
    </>
  )
}

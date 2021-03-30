import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { twofaSchema } from "../validations";
import DropDownC from '../components/forms/Dropdownc'
import { Form, Button} from 'reactstrap'; 
export default function Modificationpwd() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(twofaSchema),
  });
  return (
    <Form role="form" onSubmit={handleSubmit(onSubmit)}>
        <div><h3 style={{font: "normal normal bold 20px/24px Ubuntu", color:"#679966"}}>2FA</h3></div>
        <div className="d-flex align-items-center">
          <DropDownC label="Choisir le canal" register={register} name="canal" selectedOption={faOption} handleOnSelect={handleOnSelect} options={options||[]}/>
          <Button className="py-0 mb--4 ml-5" type="submit"  style={{ backgroundColor:'#679966', borderColor:'#679966', borderRadius:'40px', height:"40px"}} >
                      Confirmer
            </Button>
        </div>
    </Form>
  )
}

import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { twofaSchema } from "../validations";
import DropDownC from '../components/forms/Dropdownc'
import { Form, Button} from 'reactstrap';
export default function Twofa({ col,sublabel, label, options, onSubmit, faOption, handleOnSelect}) {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(twofaSchema),
  });
  
  return (
    
     <Form className="my-3" role="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <h3 style={{font: "normal normal bold 20px/24px Ubuntu", color:"#679966"}}>{label}</h3>
        {sublabel &&<h5 style={{color: "#707070", fontSize:"16px"}}>{sublabel}</h5>}
        </div>
        <div className={col?"": "d-flex align-items-center"}>
          <DropDownC label="Choisir le canal" register={register} name="canal" selectedOption={faOption} handleOnSelect={handleOnSelect} options={options||[]}/>
          <Button className={col?" mt-3":"py-0 mb--4 ml-5"} type="submit"  style={{ backgroundColor:'#679966', borderColor:'#679966', borderRadius:'40px', height:"40px"}} >
                      Confirmer
            </Button>
        </div>
    </Form>
  )
}

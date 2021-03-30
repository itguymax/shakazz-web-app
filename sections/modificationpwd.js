import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordSchema } from "../validations";
import Sinput from "../components/forms/Sinput"
import { Form, Button} from 'reactstrap'; 

export default function Modificationpwd({onSubmit,Schema, label, sublabel}) {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(passwordSchema),
  });
  const [show, setShow] = useState(false);
  const [shownp, setShownp] = useState(false);
  const [showrnp, setShowrnp] = useState(false);
  const handleToggleshownp = () => setShownp(!shownp);
  const handleToggleshow = () => setShow(!show);
  const handleToggleshowrnp = () => setShowrnp(!showrnp);
  return (
    <Form role="form" className="my-3" onSubmit={handleSubmit(onSubmit)}>
        <div><h3 style={{font: "normal normal bold 20px/24px Ubuntu", color:"#679966"}}>{label}</h3></div>
         {sublabel &&<h5 style={{color: "#707070", fontSize:"16px"}}>{sublabel}</h5>}
        <div style={{marginRight:"200px"}}>
           <Sinput
              name="oldPassword"
              placeholder="********************"
              register={register}
              label="Actuel"
              inputBg="#FFF"
              iStyle={{border:'1px solid #707070', borderRadius:"25px", overflow:"hidden"}}
              inputBg="#fff"
              icon={show ? "fa fa-eye":"fa fa-eye-slash"}
              type={show ? "text":"password"}
              handleToggleshow={handleToggleshow}
              label="Actuel"
              append
              mgl
              />
              {errors.oldPassword && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.oldPassword.message}</span>
               
              </div> }
              <Sinput
              name="newPassword"
              placeholder="********************"
              register={register}
              iStyle={{border:'1px solid #707070', borderRadius:"25px", overflow:"hidden"}}
              inputBg="#fff"
              icon={shownp ? "fa fa-eye":"fa fa-eye-slash"}
              type={shownp ? "text":"password"}
              handleToggleshow={handleToggleshownp}
              label="Nouveau"
              append
              mgl
              />
               {errors.newPassword && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.newPassword.message}</span>
               
              </div> }
              <Sinput
              name="repeatNewPassword"
              placeholder="********************"
              register={register}
              label="Répéter le mot de passe"
              iStyle={{border:'1px solid #707070', borderRadius:"25px", overflow:"hidden"}}
              inputBg="#fff"
              icon={showrnp ? "fa fa-eye":"fa fa-eye-slash"}
              type={showrnp? "text":"password"}
              handleToggleshow={handleToggleshowrnp}
              append
              mgl
              />
               {errors.repeatNewPassword && <div className="text-muted font-italic">
                
                  <span className="text-danger font-weight-700">{errors.repeatNewPassword.message}</span>
               
              </div> }
          <Button className="py-0 mb--4" type="submit"  style={{ backgroundColor:'#679966', borderColor:'#679966', borderRadius:'40px', height:"40px"}} >
            Confirmer
          </Button>
        </div>
    </Form>
  )
}

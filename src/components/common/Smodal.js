import React, {useEffect} from 'react'
import { useRouter } from 'next/router';
import {
  Button,
  Modal,
  Row,
  Spinner,
} from "reactstrap";
import { tauxChangeRetrait } from "../../helpers/tauxChangeRetrait";
import { fraisOperateursRetrait } from "../../helpers/fraisOperateursRetrait";
import LineItem from './LineItem'
export default function Smodal({ open,handleClose,isLoading, handleMSubmit, data, path }) {
  let total = parseFloat(data.amount)+parseFloat(data.amount)*fraisOperateursRetrait(data.mode_versement)/100;
  const router = useRouter();
  return (
    <div style={{filter: 'blur(20px)'}}>
         <Row>
            <Modal
            isOpen={open}
            onClick={() => {
               handleClose()
            //  if(path)  return router.push(path);
            }}
            toggle={handleClose}
            style={{width: '500px', borderRadius:'50px'}}
          >
            <div className=" modal-header pb-0">
              {/* <h6 className=" modal-title" id="modal-title-notification">
                Your attention is required
              </h6> */}
              <button
                aria-label="Close"
                className=" close"
                onClick={() => handleClose()}
                type="button"
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className=" modal-body py-0">
              <div>
                <h4 className="text-center mb-4" style={{font: 'normal normal bold 16px/18px Ubuntu', color:'#444'}}>Résumé de la transaction</h4>
                <LineItem textLeft="Compte à débiter:" textRight={data.numero}/>
                {/* <LineItem textLeft="ID:" textRight="Skz0052"/> */}
                <LineItem textLeft="Montant:" textRight={data.amount+"$"}/>
                <LineItem textLeft="Frais de transaction:" textRight={fraisOperateursRetrait(data.mode_versement)+"%"}/>
                <LineItem textLeft="Méthode de paiement:" textRight={data.mode_versement}/>
                <hr style={{background : '#B7B7B7 0% 0% no-repeat padding-box'}}/>
                <LineItem textLeft="Montant Total:" textRight={total+"$"}/>
              </div>
            </div>
            <div className=" modal-footer justify-content-center pt-0">
             <Button className="mt-3 mb-1 text-white"  onClick={()=> handleMSubmit(data)} style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
                 {isLoading ? <Spinner size="sm" color="#cc993a" />: "Confirmer"}
              </Button>
            </div>
          </Modal>
         </Row>
    </div>
  )
}

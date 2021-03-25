import React, {useEffect} from 'react'
import {
  Button,
  Modal,
  Row
} from "reactstrap";
const LineItem = ({textLeft, textRight}) => (
   <div className=" d-flex " style={{justifyContent: 'space-between'}}>
        <h6 className="text-left" style={{font: 'normal normal bold 14px/15px Ubuntu', color: '#444'}}>{textLeft}</h6>
        <h6 className="text-right" style={{font: 'normal normal bold 14px/15px Ubuntu', color: '#679966'}}>{textRight}</h6>
    </div>
)
export default function Smodal({ open,handleClose, data }) {
  return (
    <div style={{filter: 'blur(20px)'}}>
         <Row>
            <Modal
            isOpen={open}
            onClick={() => handleClose()}
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
                <LineItem textLeft="Receveur:" textRight="Shakazz"/>
                <LineItem textLeft="Compte à créditer:" textRight={data.wallet}/>
                {/* <LineItem textLeft="ID:" textRight="Skz0052"/> */}
                <LineItem textLeft="Montant:" textRight={`${data.montant}`+ " $"}/>
                <LineItem textLeft="Méthode de paiement:" textRight={data.method}/>
                <hr style={{backgroundnpm : '#B7B7B7 0% 0% no-repeat padding-box'}}/>
                <LineItem textLeft="Total:" textRight={`${data.quantitebtc}` + "₿"}/>
              </div>
            </div>
            <div className=" modal-footer justify-content-center pt-0">
             <Button className="mt-3 mb-1 text-white"  type="submit" style={{ backgroundColor:'#CC9933', borderColor:'#CC9933'}} >
                 Confirmer
              </Button>
            </div>
          </Modal>
         </Row>
    </div>
  )
}

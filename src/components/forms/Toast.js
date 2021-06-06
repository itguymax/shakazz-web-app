import React , {useState} from 'react'
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row,Alert,
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import Dot from '../common/dot'
import {Global,css} from "@emotion/react"

export default function ModalPopup({visibleAlert,responseAlert,onDismiss}) {
  return (
    <>
    <Global
    styles={css`
      /*Responsive*/
    `}
  />
    <div style={{position:"fixed",top:"20px",right:"20px",zIndex:"900"}}>
      <Alert style={{marginLeft:"1em",width:"20em"}} color={responseAlert.error === true?"danger":"success"} isOpen={visibleAlert} toggle={onDismiss} fade={true}>
        {responseAlert.message}
      </Alert>
    </div>
    </>
  )
}

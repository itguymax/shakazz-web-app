import React , {useState} from 'react'
import {
Alert,
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
      <Alert style={{marginLeft:"1em",width:"20em"}} color={responseAlert.error === true?"danger":"success"} isOpen={visibleAlert} toggle={onDismiss} fade={false}>
        {responseAlert.message}
      </Alert>
    </div>
    </>
  )
}

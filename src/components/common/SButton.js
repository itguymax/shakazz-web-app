import React from 'react';
import { Button } from "reactstrap";
import {css} from '@emotion/react';

function ArrowButton({handleClick, label,labelColor, arrowImage}) {
  return (
    <Button onClick={handleClick} style={{boxShadow:"none", backgroundColor:"#fff", border: "none", padding:"1px"}}>
      <span style={{ color: labelColor }}>{label}</span>
      <img src={arrowImage} className="ml-2" style={{width: "30px"}}/>
    </Button>
  )
}

function FlatButton ({label,type, bgc, handleClick, disabled,width, ...rest}){
  return (
    <>
      { type ?<Button type={type} disabled={disabled} className="px-3 py-2"  style={{boxShadow:"none", backgroundColor:bgc?bgc:"#fff", border: "none", borderRadius:"20px", width, padding:"1px", ...rest}}>
     {label}
    </Button>: <Button  disabled={disabled} className="px-3 py-2"  onClick={handleClick} style={{boxShadow:"none", backgroundColor:bgc?bgc:"#fff", border: "none", borderRadius:"20px", padding:"1px",width:"90px", rest}}>
     {label}
    </Button>}
    </>
  )
}

export {
  ArrowButton,
  FlatButton
}

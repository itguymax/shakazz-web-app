import React , {useState} from 'react'
import {Global,css} from "@emotion/react"
import { Tooltip } from 'reactstrap';
export default function ToolipComp({tooltipOpen,toggle,message,position="right"}) {
  return (
    <>
    <Global
    styles={css`
      /*Responsive*/
    `}
  />
  <div>
      <Tooltip placement={position} isOpen={tooltipOpen} autohide={false} target="detectToolipComp" toggle={toggle}>
        {message}
      </Tooltip>
    </div>
    </>
  )
}

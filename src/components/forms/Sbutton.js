import React from 'react'
import { Button } from 'reactstrap'

export default function Sbutton({label, onClick, style}) {
  return (
    <>
      <Button onClick={onClick} style={style} className="btn btn-neutral ">
        {label}
      </Button>
    </>
  )
}

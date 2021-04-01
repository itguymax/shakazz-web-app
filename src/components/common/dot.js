import React from 'react'

export default function Dot({info}) {
  return (
    <span  style={{backgroundColor: info? "#00DC1D": "#DC0000", borderRadius:"50%", height:"8px", width:"8px", display:"inline-block", marginLeft:"5px", marginBottom: "5px"}}/>
  )
}

import React from 'react'
import { Progress } from 'reactstrap'

export default function LinearProgress({label, val, pColor}) {
  return (
    <div>
       <div className=" progress-wrapper">
        <div className=" progress-info">
          <div className=" progress-label">
            <span>{label+ ":"}</span>
          </div>
          <div className=" progress-percentage">
            <span>{val +"%"}</span>
          </div>
        </div>
        <Progress max="100" value={val} color={pColor}></Progress>
      </div>
    </div>
  )
}

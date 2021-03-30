import React from 'react'


export default function Line({height, bgc}) {
  return (
    <>
       <hr style={{ backgroundColor: bgc || "#b7b7b7", height:height|| '1px', marginBottom: '10px', marginTop: '10px'}}/>
    </>
  )
}

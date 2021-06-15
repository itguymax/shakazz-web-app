import React from 'react'
import Image from 'next/image'
export default function Arrowback({url}) {
  return (
    <p onClick={()=>{
      window.location.assign(url);
    }} style={{color:"white",fontSize:"1.15em",cursor:"pointer"}}>Menu &nbsp;<span>
    <Image
                          src="/assets/img/Down@2x.png"
                          alt="..."
                          height={15} width={25}
                          style={{}}
                          />
    </span>
  </p>
  )
}

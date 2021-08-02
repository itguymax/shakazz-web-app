import React from 'react'
// g: generation 1 2 3 4 5
// gp generation population
// gto generation turn over
// gbgc generation background color
export default function GenerationCard({g,gp,gto,gbgc,handleClick}) {
  return (
    <div onClick={handleClick} className="py-4 text-center px-5 ml-4 mb-4" style={{backgroundColor:gbgc, borderRadius:"31px", cursor:"pointer"}} >
      <h1 style={{color:"#fff"}}>{`Génération ${g}`}</h1>
      <h4 style={{color:"#444", fontWeight:"100"}}>Nombre de personnes:{"  "}<span style={{color:"#fff", fontWeight:"bold"}}>{gp}</span> </h4>
      <h4 style={{color:"#444", fontWeight:"100"}}>Chiffre d'affaire:{"  "}<span style={{color:"#fff", fontWeight:"bold"}}>{gto}</span> </h4>
    </div>
  )
}

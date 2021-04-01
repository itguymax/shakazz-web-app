import React from 'react'
import { Card } from "reactstrap";

 function LightBoxContainer({children,borderR, height, width, bg, borderLess, cl, direction}) {
   const bgc = bg || '#FFFFFF';
   const cln = cl || "";
   const bderr= borderR || '39px'
  return (
    <Card className={"mb-3 d-flex" + cln}
        style={{
          background: `${bgc} 0% 0% no-repeat padding-box`,
          border: borderLess? null :'1px solid #707070',
          borderRadius: bderr, 
          height,
          width,
          flexDirection: direction

        }}
    >
      <>
        {children}
      </>
    </Card>
  )
}

export default LightBoxContainer;
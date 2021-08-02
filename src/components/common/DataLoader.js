import React from 'react'
import Portal from "../../layouts/Portal.js";
import {Spinner} from "reactstrap";
export default function DataLoader({label}) {
  return (
   <Portal>
      <div css={css`
              width: 100%;
              height: 100vh;
              display: flex;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            `}>
             <Spinner style={{ width: '5rem', height: '5rem' , color:"#cc9933"}} />
          </div>
      </Portal>
  )
}

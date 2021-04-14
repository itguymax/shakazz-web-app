import React from 'react'
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import LightBoxContainer from "../components/common/lightBoxContainer";
import { Container } from "reactstrap";
import {  FlatButton} from "./common/SButton";

export default function coffre() {
  const percentage = 75;
  return (
    <div >
      <LightBoxContainer>
          <Container className="py-4" fluid style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
             <div>coffre</div>
             <FlatButton width="150px">
                  <CircularProgressbar 
                  
                        styles={buildStyles({pathColor: '#cc9933',textColor: '#cc9933',})}
                    counterClockwise value={percentage} text={`${percentage}%`} />
              </FlatButton> 
             <div>reclamation</div>
          </Container>  
      </LightBoxContainer> 
    </div>
  )
}

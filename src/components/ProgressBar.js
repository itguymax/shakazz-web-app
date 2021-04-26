import React from "react"
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import {  FlatButton} from "./common/SButton";
const ProgressBar = ({percentage, bgc}) => {
  return <> <FlatButton bgc={bgc} width="150px"> <CircularProgressbar  styles={buildStyles({pathColor: '#cc9933',textColor: '#cc9933',})} counterClockwise value={percentage} text={`${percentage}%`} />  </FlatButton></>
}


export default ProgressBar;
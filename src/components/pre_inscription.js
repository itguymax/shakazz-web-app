import react from "react";
import {css} from "@emotion/react";
import  { Link } from "./Link";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import config from "../config"
const PreInscription = ({bleu, white}) => {
  return (
       <>
      <div
        className="align-items-center"
        style={{
          backgroundColor:"#fff",
          backgroundImage: bleu?  "url(" + "/assets/img/preInscription1.png" + ")": white? "": "url(" + "/assets/img/preInscription.png" + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <Container className="d-flex align-items-center justify-content-center py-6" 
        fluid 
        css={css`
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
       

      `}>     
              <div className="text-center" style={{ position: "relative"}}>
                 <div css={css`
                    position: absolute;
                     background-image: url("/assets/img/fleche.png");
                     background-size: cover;
                     background-position: center;
                     background-repeat: no-repeat;
                     top: 40px;
                     left: 175px;
                     height: 45px;
                     width: 45px;
                     transform: rotate(290deg);
              `}/>
                <h2 className={white?"":"text-white"} style={{color: white? "#333":""}}>Réservez votre place </h2>
                <h2 className= { white?"":"text-white p-0 mt--2  mb-4"} style={{color: white? "#333":""}}> en cliquant ici</h2>
              </div>
               <a href={config.preInscriptionLink} className="buttonAnimation" target="_blank" style={{ background: bleu|white?'#cc993a 0% 0% no-repeat padding-box':'#24422F 0% 0% no-repeat padding-box', cursor:'pointer', width:"200px", textAlign:"center", padding:'12px 10px 12px 10px', borderRadius:'20px',  font: 'normal normal normal 16px/14px Ubuntu', color:'#fff', marginBottom: "20px"}}>Pré-inscription</a>
        </Container>
      </div>
    </>

  )
};


export default PreInscription;
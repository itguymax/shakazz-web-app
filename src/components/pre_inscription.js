import react from "react";
import {css} from "@emotion/react";
import  { Link } from "./Link";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const PreInscription = ({bleu}) => {
  return (
       <>
      <div
        className="align-items-center"
        style={{
          height:"300px",
          backgroundImage: bleu?  "url(" + "/assets/img/preInscription1.png" + ")":  "url(" + "/assets/img/preInscription.png" + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <Container className="d-flex align-items-center" fluid css={css`
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      `}>
          
            
              <div className="text-center">
                <h1 className=" text-white">Reservez votre place </h1>
                <h1 className="text-white "> en cliquant ici</h1>
              </div>
              <Link label="Pré-inscription" path="/services" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'20px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff', marginBottom: "40px"}}/>
            
         
        </Container>
      </div>
    </>

  )
};


export default PreInscription;
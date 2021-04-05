
import { Button, Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import {css} from "@emotion/react";
import  { Link } from "../components/Link";

const PlanCard = ({pool, durree, roi, description}) => {
  return (
    <Col xl="4" className="mb-3" >
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
             <div className="d-flex p-2 pt-3 align-items-center justify-content-center" style={{borderRadius:"50px", border:"1px solid #6f6f6f"}}
             css={css`
                 width:250px;
                 @media (max-width: 600px){
                   width:300px;
                 }

             `}
             > 
              <h2 style={{color: "#6F6F6F", fontsize:"20px", fontWeight:"bold"}}>{pool}</h2>
             </div>
             <div css={css`
                 
                 @media (max-width: 600px){
                   width:300px;
                 }

             `} className="mt-4" style={{ border:"1px solid #6f6f6f", borderRadius:"10px", overflow:"hidden",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                  <section className="mb-6" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                      <h2 style={{color: "#6F6F6F", fontsize:"20px", fontWeight:"bold"}} className="mt-3">{durree}</h2>
                      <p>RECOMPENSES</p>
                      <div className="text-center py-3" style={{backgroundColor:"#fcfcfc", width:"100%"}}> <h1  style={{color: "#6F6F6F", fontsize:"20px", fontWeight:"bold"}}>{roi}</h1></div>
                      
                      <p className="text-center mt-6 px-4" style={{color: "#6F6F6F", fontSize:"12px", letterSpacing:"0px", lineHeight:"1.2"}}>
                         {description}
                      </p>
                      
                  </section>
                   <Link label="En savoir plus" path="/services" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff', marginBottom: "40px"}}/>
             </div>
         </div>
    </Col>

  )
}
const Plans = ()=> {
  return (
    <>  
      <Container fluid className="pt-6" >
          <div className="text-center">  
            <h1 style={{color: "#6F6F6F"}}>Plans</h1>
             <p>ce sont les actifs financiers qui observent la plus forte croissance sur les 10 dernières années.</p>
          </div>
          
               <Container fluid css={css`
      width:80%;
      @media (max-width: 6000px){
        width:100%;
      }

      `}>
                 <Row className="mt-5 pb-4 mx-9">
                  <PlanCard pool="Pool mensuel" durree="1 MOIS" roi="7,5%" description="La liquidité est débloquée au terme des
360 jours après l’ouverture
et création du vault"/>
                  <PlanCard pool="Pool mensuel" durree="6 MOIS" roi="51%" description="La liquidité est débloquée au terme des
540 jours après l’ouverture
et création du vault"/>
                  <PlanCard pool="Pool mensuel" durree="1 AN" roi="114%" description="La liquidité est débloquée au terme des
1080 jours après l’ouverture
et création du vault"/>
                 </Row>
               </Container>   
          
     </Container>
    </>
  )
}

export default Plans;
import React from "react";
import Image from 'next/image';
import jsPDF from 'jspdf';

import { Container, Row, Col } from "reactstrap";





export default function RowUnderline(props) {

    function savePdf(){
        let doc = new jsPDF('p', 'pt');
        doc.addImage({
            imageData : '/assets/img/CV2_front_dev.jpg',
            x: 0,
            y: 0,
            w: 300,
            h: 150,
            });
        doc.setFont('courier')
        doc.setFontSize(15)
        doc.text(140,30 ,props.user.nom)
        doc.setFontSize(10)
        doc.text(230,45 ,props.user.poste)
        doc.setFontSize(7)
        doc.text(155,90 ,props.user.email)
        doc.text(178,100 ,props.user.tel)
        doc.text(180,110 ,props.user.site)
        doc.text(222,120 ,props.user.address)
    
        doc.addImage({
            imageData : '/assets/img/CV2_back.jpg',
            x: 0,
            y: 155,
            w: 300,
            h: 150,
            });
        
        doc.save('generated pdf');
    }
    function selectFunction(){
        if(props.item == 0)
          savePdf()
        if(props.item == 1) 
          return <Flyer/>
        if(props.item == 2) 
          return <Licence/>
        if(props.item == 3) 
          return <Link/>
        if(props.item == 4) 
          return <Pdf/>
        if(props.item == 5) 
          return <Youtube/>  
        }

  return (
    <Container fluid  >
        <Row style={{ display : 'flex' , flexDirection : 'column' , marginBottom:'2em', paddingLeft:'0px !important'}}>
            <Row style={{borderBottom: '2px solid #888 ', height : '1.75em'}}> 
                <Col onClick={ () => props.selectElement(props.item) } className="col-10" style={{ }}>
                    <p style={{fontSize: '15px', lineHeight: '1.5' , textAlign: 'left',cursor:"pointer", marginRight:"100px", paddingLeft:'0px !important'}}>{props.titre}</p>          
                </Col>
                <Col className="col-2" onClick={()=>selectFunction()}>
                    <span style= {{ float : 'right',cursor:"pointer"}}>
                      <Image 
                        src={props.image}
                        alt="..." 
                        height={20} width={20}
                        style={{backgroundColor:"#000"}}  
                    />
                    </span>
                </Col>
            </Row>
        </Row>
    </Container>

  );
}
import React from 'react'
import Public from '../../layouts/Public';
import { CardBody, Container,Row, Col, Card} from 'reactstrap';
import ContactForm from '../../components/forms/ContactForm'
import ContactHero from '../../sections/contactHero'
 function ContactezNous() {
  return (
     <>
     <ContactHero/>
     <Container className="mt--7" fluid>
      <Row className="justify-content-center mb-9">
        <Card className="shadow p-4 pt-xl-5 pb-xl-5" style={{width: "80%"}}>
          <CardBody className="row">
              <div className="col">
                <h1 style={{font: "normal normal bold 48px/5px Ubuntu", color: "#121212"}}>Get in Touch</h1>
                <h4 className="mt-4" style={{color:"#A1A1A1", fontWeight: "300"}}>Lorem ipsum dolor sit amet consectetur adipiscing elit</h4>
                <div className="mt-5">
                  En face Afriland first bank Mvog-mbi <br/>
                  Yaoundé, Cameroun <br/>
                  +237 691 273 540<br/>
                  shakazztrading@gmail.com
                </div>
              </div>
              <Col>
                <ContactForm/>
              </Col>
          </CardBody>
        </Card>
      </Row>
     </Container>
    </>
  )
}

ContactezNous.layout = Public;
export default ContactezNous;
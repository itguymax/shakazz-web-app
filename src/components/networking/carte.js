import React from 'react';
import { Container, Row} from "reactstrap";
import jsPDF from 'jspdf';


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});





export default function carte(props)  {

    function savePdf(){
        let doc = new jsPDF('p', 'pt');
        doc.text(20,20 ,'this is default text')

        doc.setFront('courier')

        doc.setFrontType('bold');


        doc.text(20,20 ,'this is default text with bold')
        
        doc.save('generated pdf');


        
    }
    return( 
        // <Document>
        //     <Page size="A4" style={styles.page}>
        //         <View style={styles.section}>
        //         <Text>Section #1</Text>
        //         </View>
        //         <View style={styles.section}>
        //         <Text>Section #2</Text>
        //         </View>
        //     </Page>
        // </Document>
        <Container>
            <Row>
                <Col className="col-10">
                    <img src = "/assets/img/modele-carte-visite-propre_.png" style={{
                        position : 'relative',
                        display: 'block',
                        margin: 'auto',
                        width: '70%',
                        height: '70%'
                    }}/>
                </Col>
                <Col className="col-2" style={{}} onClick={{savePdf()}}>
                    <Image style= {{ float : 'right'}}
                        src={props.image}
                        alt="..." 
                        height={20} width={20}
                        style={{backgroundColor:"#000"}}  
                    />
                </Col>
            </Row>
        </Container>    
  )
}
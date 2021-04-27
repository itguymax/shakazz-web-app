import React from 'react';
import { Container, Row} from "reactstrap";
// import { Document, Page } from 'react-pdf';



export default function flyer(props)  {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    //   }

    return( 
        <Container>
            <Row>
                {/* <div>
                    <Document
                        file="assets/pdf/note.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                </div> */}
                <img src = "/assets/img/modele-presentation-entreprise-moderne-flyer-vector.png" style={{
                    position : 'relative',
                    display: 'block',
                    margin: 'auto',
                    width: '70%',
                    height: '70%'
                }}/>
            </Row>
        </Container>    
  )
}
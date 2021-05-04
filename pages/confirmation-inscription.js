import React from 'react';
import Head from 'next/head';
import  Bleu from '../src/layouts/Bleu';
import Link from 'next/link'
import { Container } from 'reactstrap';
function ConfirmationInscription() {
  return (
    <>
      <Head>
        <title>Shakazz | Confirmation Inscription </title>
      </Head>
      <Container fluid style={{display:"flex", justifyContent:"center", alignItems:'center', height:"80vh"}}>
       
         <div>
            <h1 style={{color: "#fff"}}>Verifiez votre Email</h1>
            <Link className="text-center " href="/auth/login" ><span style={{color: "#fff", cursor:"pointer"}}>Cliquez ici pour vous Connecter</span></Link>
         </div>
      
      </Container>
      
     
    </>
  );
}





ConfirmationInscription.layout = Bleu;
export default ConfirmationInscription;
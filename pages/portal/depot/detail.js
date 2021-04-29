import React from 'react';
import AdminBleu from '../../../src/layouts/AdminBleu';
import LineItem from '../../../src/components/common/LineItem';
import withAuth from '../../src/hoc/withAuth';
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  Button,
  Table,
  Progress,
  Form,
} from "reactstrap"
function Detail() {
  return (
    <AdminBleu back>
    <>
      <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#fff"}}> Effectuer un dépôt</h1>
      <Row>
        <Card className="mt-2 justify-content-center p-4" style={{backgroundColor: "#679966", width: '100%'}}>
            <h5 style={{font: 'normal normal normal 14px/15px Ubuntu', color:"#fff"}}>Pour compléter le paiement via Bitcoin, envoyez le montant exacte</h5> 
            <h5 style={{font: 'normal normal bold 14px/15px Ubuntu', color:"#fff"}}>0.001</h5>
            <h5 style={{font: 'normal normal normal 14px/15px Ubuntu', color:"#fff"}}>Dans les 14:57 minutes à cette adresse bitcoin:</h5> 
            <h5 style={{font: 'normal normal bold 14px/15px Ubuntu', color:"#fff"}}>3G6Qbq5wqzCGW2U75kgnjfZaBXBsMmgfqD</h5>
        </Card>
      </Row>
      <Row className="pt-4">
        <div  style={{width: '100%'}}>
          <LineItem textLeft="Receveur:" textRight="Shakazz" colorLeft="#679966" colorRight="#679966"/>
          <LineItem textLeft="Compte à créditer:" colorLeft="#679966" colorRight="#679966" textRight="Wallet principal"/>
          <LineItem textLeft="Montant:"  colorRight="#679966"colorLeft="#679966"textRight="6,000$"/>
          <LineItem textLeft="Méthode de paiement:" colorRight="#679966" colorLeft="#679966" textRight="bitcoin"/>
          <hr style={{backgroundColor: '#b7b7b7', marginBottom: '10px', marginTop: '10px'}}/>
          <LineItem textLeft="Total:" colorRight="#679966" colorLeft="#679966" textRight="0.01"/>
        </div>
      </Row>
    </>
    </AdminBleu>
  )
}



export default withAuth(Detail);

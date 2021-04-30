import React from 'react'
import AdminBleu from '../../src/layouts/AdminBleu'
import withAuth from '../../src/hoc/withAuth';
function paymentSummary() {
  return (
    <div>
      PaiementSummary
    </div>
  )
}



paymentSummary.layout = AdminBleu;
export default withAuth(paymentSummary);

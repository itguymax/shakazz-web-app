const cp_init = async (token,amountVal,des=null,cpm_custom="depot")=>{
    const body = {
      data: {
      }
    };
    let trans_id = token;
    const amount = amountVal;
    const currency = document.getElementById("cinetpay_currency")||null;
    const result_div = document.getElementById('cinetpay_payment_result');
    let custom = cpm_custom;
    //-------------Configuration
    CinetPay.setConfig({
        apikey: '4758178085f46b2e7dc69e3.86025892',
        site_id: 980771,
        notify_url: 'https://shakazz-server.herokuapp.com/api/v1/services/payement/webhook/cinetpay'
    });
    CinetPay.on('error', function (e) {console.log(e);
             result_div.innerHTML = '';
             result_div.innerHTML += 'Error code:' + e.code + 'Message::' + e.message;
        });
    CinetPay.on('paymentPending', function (e){console.log(e);
            result_div.innerHTML = '';
             result_div.innerHTML = 'Paiement en cours ';
             result_div.innerHTML += 'code:' + e.code + 'Message::' + e.message;
        });
    CinetPay.on('paymentSuccessfull', async function (paymentInfo) {
      //const res =  await mutateAsync({accessToken: context.appState.accessToken,data:body});
               if(typeof paymentInfo.lastTime != 'undefined'){
                   result_div.innerHTML = '';
                   if(paymentInfo.cpm_result == '00'){
                       result_div.innerHTML = 'Votre paiement a été validé avec succès :  Montant payé :'+paymentInfo.cpm_amount+'';
                   }else{
                       result_div.innerHTML = 'Une erreur est survenue :'+paymentInfo.cpm_error_message;
                   }
               }
       });
    CinetPay.on('signatureCreated', function () {})
    CinetPay.on('error', function (e) {
             result_div.innerHTML = '';
             result_div.innerHTML += e.message;
        });

    //-------------Gestion des evenements
    //error

    //Application des méthodes
        CinetPay.setSignatureData({
            amount: parseFloat(amount),
            trans_id: trans_id,
            currency: currency === null?"XAF":currency.value,
            designation: des===null?"DEPOT SHAKAZZ":des,
            custom: custom
        });
          CinetPay.getSignature();
}
export {cp_init}

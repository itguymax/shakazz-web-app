//import { useAppContext } from '../context';
const cp_init = (token)=>{
    //const context = useAppContext();
    let trans_id = token;
    const amount = document.getElementById("cinetpay_amount");
    const currency = document.getElementById("cinetpay_currency");
    const result_div = document.getElementById('cinetpay_payment_result');
    let custom = "";
    //-------------Configuration
    CinetPay.setConfig({
        apikey: '4758178085f46b2e7dc69e3.86025892',
        site_id: 980771,
        notify_url: 'https://shakazz-server.herokuapp.com/api/v1/services/payement/webhook/cinetpay'
    });
    CinetPay.on('paymentPending', function (e){
            result_div.innerHTML = '';
             result_div.innerHTML = 'Paiement en cours ';
             result_div.innerHTML += 'code:' + e.code + 'Message::' + e.message;
        });
    CinetPay.on('paymentSuccessfull', function (paymentInfo) {
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
            amount: parseInt(amount.value),
            trans_id: trans_id,
            currency: currency.value,
            designation: "DEPOT SHAKAZZ",
            custom: custom
        });
          CinetPay.getSignature();
}
export {cp_init}

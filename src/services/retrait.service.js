
import config from '../config';
import  apiV1  from './config';
  
const makeWithdrawal = async ({accessToken, data}) => {
  console.log("Transfert Externe", accessToken, data);
    const url = "/transactions/transactions/whitdrawal";
    try {
    let responseJson =  apiV1.postJson(url, accessToken,data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }




export {
 makeWithdrawal
};
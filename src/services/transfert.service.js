
import config from '../config';
import  apiV1  from './config';
  
const makeInternalTransfert = async ({accessToken, data}) => {
  console.log("Transfert Externe", accessToken, data);
    const url = "/transactions/externe/transfert";
    try {
    let responseJson =  apiV1.postJson(url, accessToken,data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }

const makeExternalTransfert = async ({accessToken, data}) => {
  console.log("Transfert Interne", accessToken, data);
    const url = "/transactions/interne/transfert";
    try {
    let responseJson =  apiV1.postJson(url, accessToken,data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }


export {
  makeInternalTransfert,
  makeExternalTransfert,
};
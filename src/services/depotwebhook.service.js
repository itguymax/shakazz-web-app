
import config from '../config';
import  apiV1  from './config';


const depotWebhookCp = async ({ accessToken, data }) => {
    const url = "/payement/webhook/cinetpay";
    try {
    let responseJson =  apiV1.postJson(url, accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }

export {
  depotWebhookCp,
};

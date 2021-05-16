
import config from '../config';
import  apiV1  from './config';


const  serviceKyc = async (accessToken, data) => {
    const url = `/services/kyc${data}`;
    try {
    let responseJson =  apiV1.getJson(url, accessToken);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }


export {
   serviceKyc,
};

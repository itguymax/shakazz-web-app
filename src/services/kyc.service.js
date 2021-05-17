
import config from '../config';
import  apiV1  from './config';


const  serviceKyc = async ({accessToken, data}) => {
    const url = `/uploads/document`;
    try {
    let responseJson =  apiV1.postJson(url,accessToken,data);
    return responseJson;
  } catch(err) {
  }
  }


export {
   serviceKyc
};

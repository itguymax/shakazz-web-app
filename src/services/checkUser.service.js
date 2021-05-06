
import config from '../config';
import  apiV1  from './config';

  
const CheckUser = async (accessToken, data) => {
    const url = `/auth/uniqueUserName/${data}`;
    try {
    let responseJson =  apiV1.getJson(url, accessToken);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }


export {
  CheckUser,
};
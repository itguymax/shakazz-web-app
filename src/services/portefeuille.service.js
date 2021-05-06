
import config from '../config';
import  apiV1  from './config';

  
const fetchPortefeuille = async (accessToken) => {
    const url = "/whitdrawals/all";
    try {
    let responseJson =  apiV1.getJson(url, accessToken);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }


export {
  fetchPortefeuille,
};
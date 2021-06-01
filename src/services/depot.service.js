
import config from '../config';
import  apiV1  from './config';


const fetchDepotTransactions = async ({ accessToken, data }) => {
    const url = "/transactions/cinet/deposit";
    try {
    let responseJson =  apiV1.getJson(url, accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }

export {
  fetchDepotTransactions,
};

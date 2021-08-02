
import config from '../config';
import  apiV1  from './config';


const fetchAlltransactions = async ({ accessToken, data }) => {
    const url = "/transactions/transaction/all";
    try {
    let responseJson =  apiV1.postJson(url, accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }
  const fetchDailytransactions = async ({ accessToken, data }) => {
      const url = "/transactions/transaction/daily";
      try {
      let responseJson =  apiV1.postJson(url, accessToken, data);
      return responseJson;
    } catch(err) {
      console.log(err);
    }
    }

const fetchWallettransactions = async ({accessToken,data}) => {
    const url = "/transactions/transaction/wallet";
    try {
    let responseJson =  apiV1.postJson(url, accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }
export {
  fetchAlltransactions,
  fetchWallettransactions,
  fetchDailytransactions
};


import config from '../config';
import  apiV1  from './config';

  
const fetchAlltransactions = async (accessToken, page = 1, element = 10) => {
    const url = "transactions/transaction/all?page=" + page + "&element=" + element;
    try {
    let responseJson =  apiV1.getJson(url, accessToken);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }

  
const fetchWallettransactions = async (accessToken, id, page= 1, element = 10) => {
    const url = "/transactions/transaction/wallet?id=" + id  + "&page=" + page + "&element=" + element;
    try {
    let responseJson =  apiV1.getJson(url, accessToken);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }
export {
  fetchAlltransactions,
  fetchWallettransactions,
};
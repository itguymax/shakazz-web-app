
import config from '../config';
import  apiV1  from './config';
import { useRouter } from "next/router";
import { getUTfromLS } from "../helpers/token"
import { useAppContext } from '../context'
  
const fetchWallets = async (accessToken) => {
    const url = "/wallets/all";
    try {
    let responseJson =  apiV1.getJson(url, accessToken);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }


export {
  fetchWallets,
};
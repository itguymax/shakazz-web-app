
import config from '../config';
import  apiV1  from './config';

  
const addOption = async ({accessToken, data}) => {
   console.log("add option", accessToken, data);
    const url = "/options/add";
    try {
    let responseJson =  apiV1.postJson(url, accessToken,data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }

}

const fetchOptions = async (accessToken) => {
    const url = "options/all";
    try {
    let responseJson =  apiV1.getJson(url, accessToken);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }


export {
  fetchOptions,
  addOption,
};
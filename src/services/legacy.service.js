
import config from '../config';
import  apiV1  from './config';

  
const addLegacy = async ({accessToken, data}) => {
   console.log("add legacy", accessToken, data);
    const url = "/legacys/add";
    try {
    let responseJson =  apiV1.postJson(url, accessToken,data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }

}

const fetchAllLegacy = async (accessToken) => {
    const url = "/legacys/all";
    try {
    let responseJson =  apiV1.getJson(url, accessToken);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }

const updateLegacy = async ({accessToken, data}) => {
    const url = "/legacys";
    try {
    let responseJson =  apiV1.putJson(url, accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }
const deleteLegacy = async ({accessToken, data}) => {
    const url = "/legacys";
    try {
    let responseJson =  apiV1.deleteJsonBody(url, accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }

export {
  addLegacy,
  fetchAllLegacy,
  updateLegacy,
  deleteLegacy,
};
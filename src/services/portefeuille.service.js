
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

const addPortefeuille = async ({accessToken, data}) => {
  const url = "/whitdrawals/add";
  try {
    let responseJson =  apiV1.postJson(url, accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
}

const updatePortefeuille = async ({accessToken, id, data}) => {
  const url = `whitdrawals/${id}`;
  try {
    let responseJson =  apiV1.putJson(url, accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
}
const deletePortefeuille = async (id) => {
  const url = `whitdrawals/${id}`;
  try {
    let responseJson =  apiV1.deleteJson(url, accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
}

export {
  fetchPortefeuille,
  addPortefeuille,
  updatePortefeuille,
  deletePortefeuille,
};


import config from '../config';
import  apiV1  from './config';

const addChest = async ({accessToken, data}) => {
  const url = "/chests/add";
  console.log("add chest", accessToken, data);
    try {
    let responseJson =  apiV1.postJson(url, accessToken,data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
}

const fetchChest = async ( accessToken) => {
  const url = "/chests/all";
      try {
    let responseJson =  await apiV1.getJson(url, accessToken);
    return responseJson;
  } catch(err) {
    console.log(err)
  }
}

const deleteChest = async ({accessToken, data}) => {
  const url = "/chests/delete";
  try {
    let responseJson = await apiV1.deleteJson(url,accessToken, data);
    return responseJson;
  } catch(err){
    console.log(err)
  }
}

const claimChest =  async ({ accessToken, chestID }) => {
  const url = `/services/chests/${chestID}`;
    try {
    let responseJson =  apiV1.postJson(url, accessToken);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
}

export {
  addChest,
  fetchChest,
  deleteChest,
  claimChest,
};
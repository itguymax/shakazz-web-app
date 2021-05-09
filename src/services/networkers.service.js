
import config from '../config';
import  apiV1  from './config';

  
const fetchNetworkers = async () => {
    const url = "/networks/all";
    try {
    let responseJson =  apiV1.unAuthgetJson(url);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }

  const fetchUserByInvitation = async (invitation) => {
    const url = `/users/${invitation} `
     try {
    let responseJson =  await apiV1.unAuthgetJson(url);
    return responseJson;
  } catch(err) {
    console.log(err)
  }
  } 
export {
  fetchNetworkers,
  fetchUserByInvitation,
};
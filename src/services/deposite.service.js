
import config from '../config';
import  apiV1  from './config';

const makeDeposit = async ({accessToken, data}) => {
    const url = "/transactions/deposit";
    try {
    let responseJson =  apiV1.postJson(url, accessToken,data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }


export {
  makeDeposit,
};

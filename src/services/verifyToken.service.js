
import config from '../config';
import  apiV1  from './config';
import { useAppContext } from '../context'
const verifyTokenS = async (token) => {
  
  const data = {
   data: {
      token,
   }
  }
    const url = "/verifyToken";
    try {
    let responseJson =  await apiV1.unAuthPostJson(url, data);
    return responseJson;
  } catch(err) {
    console.log(err)
  }
};



export {
  verifyTokenS
}
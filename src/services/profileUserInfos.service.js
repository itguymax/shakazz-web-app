
import config from '../config';
import  apiV1  from './config';


const profileUserInfos = async ({accessToken, data}) => {
    const url = `/users/update`;
    try {
    let responseJson =  apiV1.postFormData(url,accessToken,data);
    return responseJson;
  } catch(err) {
  }
  }


export {
   profileUserInfos
};
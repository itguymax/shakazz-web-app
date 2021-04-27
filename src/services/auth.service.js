
import  apiV1  from './config';

  const signupUser = async (data) => {
    const url = '/signup';
    const token = "";
    try {
       let responseJson = await  apiV1.postJson(url,token, data);
    return responseJson;
  } catch(err) {
     console.log(err.message);
  }
}
  
const loginUser = async (data) => {
    const url = "/login";
    const token ="";
    try {
    let responseJson =  apiV1.postJson(url,token, data,);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }


  const requestUserPasswordReset = async (data) => {
    const url = "/requestPasswordReset";
    const token = "";
    try {
  
    let responseJson =  apiV1.postJson(url, token, data);
    return responseJson;
  } catch(err) {
    console.log(err)
  }
  }


  const resetUserPassword = async (data) => {
    const url = "/resetPassword";
    const token = "token";
    try {
   
    let responseJson =  await apiV1.postJson(url, token, data);
    return responseJson;
  } catch(err) {
    console.log(err)
  }
  }

export {
  signupUser,
  resetUserPassword,
  loginUser,
  requestUserPasswordReset,
};
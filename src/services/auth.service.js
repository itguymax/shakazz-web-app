
import  apiV1  from './config';

  const signupUser = async (data) => {
    const url = '/signup';
    try {
       let responseJson = await  apiV1.unAuthPostJson(url, data);
       console.log("signup data",responseJson );
    return responseJson;
  } catch(err) {
     console.log(err);
  }
}
  
const loginUser = async (data) => {
    const url = "/login";
    try {
    let responseJson =  apiV1.unAuthPostJson(url, data,);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }


  const requestUserPasswordReset = async (data) => {
    const url = "/requestPasswordReset";
    try {
  
    let responseJson =  apiV1.unAuthPostJson(url, data);
    return responseJson;
  } catch(err) {
    console.log(err)
  }
  }


  const resetUserPassword = async (data) => {
    const url = "/resetPassword";
    try {
    let responseJson =  await apiV1.unAuthPostJson(url, data);
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
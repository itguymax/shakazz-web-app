
import config from '../config';
import  apiV1  from './config';
import { useRouter } from "next/router";

  const signupUser = async (data) => {
    const url = '/auth/signup';
    try {
       let responseJson = await  apiV1.unAuthPostJson(url, data);

    return responseJson;
  } catch(err) {
     console.log(err);
  }
}
const signupUserCrypto = async (data) => {
  const url = '/crypto/auth/signup';
  try {
     let responseJson = await  apiV1.unAuthPostJson(url, data);

  return responseJson;
} catch(err) {
   console.log(err);
}
}
const loginUserCrypto = async (data) => {
    const url = "/crypto/auth/login";
    try {
    let responseJson =  apiV1.unAuthPostJson(url, data);
    return responseJson;
  } catch(err) {
    console.log(err);
  }
  }
const loginUser = async (data) => {
    const url = "/auth/login";
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

   const logOutUser =  async (router) => {
     if(window !== undefined){
         sessionStorage.setItem(config.localStoreToken,"");
          router.replace("/auth/crypto/login");
     }
     return null ;
   }

   const changeConnexionPassword = async ({accessToken, data}) => {
      const url = "/users/reset/password";
    try {
    let responseJson =  await apiV1.putJson(url,accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err)
  }
   }
   const changeTransactionPassword = async ({accessToken, data}) => {
      const url = "/users/reset/transaction";
    try {
    let responseJson =  await apiV1.putJson(url,accessToken, data);
    return responseJson;
  } catch(err) {
    console.log(err)
  }
   }

export {
  loginUserCrypto,
  signupUser,
  signupUserCrypto,
  resetUserPassword,
  loginUser,
  requestUserPasswordReset,
  logOutUser,
  changeConnexionPassword,
  changeTransactionPassword
};

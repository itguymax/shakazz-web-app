import config from "../config"


const getUTfromLS =  () => {
  if(typeof window !== "undefined"){
    const t =  localStorage.getItem(config.localStoreToken);
   return t;
  }
  return null;
}

const setUTToLS = (token) => {
    if(typeof window !== "undefined"){
     localStorage.setItem(config.localStoreToken, token);
  }
  
}

export {
  getUTfromLS,
  setUTToLS
}
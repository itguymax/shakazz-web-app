import { useMutation, useQuery } from 'react-query';
import { updateUser, fetchUserInfos, fetchUserTree } from "../../services";
import config from '../../config';
const useUpdateUser = () => {
  return useMutation('Update User', updateUser);
}

const useFetchUserInfos =  (accessToken) => {
  return useQuery(['User Infos'], () => fetchUserInfos(accessToken), {onSuccess: (data)=> {
     console.log("daaaaaaaaaaaaa", data);
     if(data && typeof window !== "undefined"){
         localStorage.setItem(config.info,  JSON.stringify(data?.data?.user));
         console.log("localStorage.getItem(config.info)",JSON.parse(localStorage.getItem(config.info)));
      }
     
     
  }})
}

const useFetchUserTree = (accessToken) => {
  return useQuery(['User tree'], () => fetchUserTree(accessToken))
}



export {
 useUpdateUser,
 useFetchUserInfos,
 useFetchUserTree,
}
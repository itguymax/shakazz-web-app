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
        if(localStorage.getItem(config.grade)){
        localStorage.removeItem(config.grade);
      } else {
         localStorage.setItem(config.grade, data?.data?.user?.grade);
      }
     }
     console.log("localStorage.getItem(config.grade)",localStorage.getItem(config.grade));
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
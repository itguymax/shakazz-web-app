import { useMutation, useQuery } from 'react-query';
import { updateUser, fetchUserInfos, fetchUserTree } from "../../services";

const useUpdateUser = () => {
  return useMutation('Update User', updateUser);
}

const useFetchUserInfos = (accessToken) => {
  return useQuery(['User Infos'], () => fetchUserInfos(accessToken))
}

const useFetchUserTree = (accessToken) => {
  return useQuery(['User tree'], () => fetchUserTree(accessToken))
}



export {
 useUpdateUser,
 useFetchUserInfos,
 useFetchUserTree,
}
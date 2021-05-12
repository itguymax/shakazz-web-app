import { useMutation, useQuery } from 'react-query';
import {  addChest,
  fetchChest,
  deleteChest,
  claimChest
  } from "../../services";


const useAddChest = () => {
  return useMutation('Add Chest', addChest);
}
const useDeleteChest = () => {
  return useMutation('Delete Chest', deleteChest);
}
const useClaimChest= () => {
  return useMutation('Claim Chest', claimChest);
}
const useFetchUserChest = (accessToken) => {
  return useQuery(['Fetch user chest'], () => fetchChest(accessToken));
}
export {
 useAddChest,
 useDeleteChest,
 useClaimChest,
 useFetchUserChest
}
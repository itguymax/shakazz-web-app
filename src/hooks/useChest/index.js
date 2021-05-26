import { useMutation, useQuery } from 'react-query';
import {  addChest,
  fetchChest,
  deleteChest,
  claimChest,
  dailyTransaction,
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
  return useQuery(['Fetch user chest'], () => fetchChest(accessToken),{
      // Refetch the data every second
      refetchInterval: 1000,
    });
}
const useChestDailyTransactions = (accessToken, id, page, element) => {
  return useQuery(['dailyTransaction'], () => dailyTransaction(accessToken, id, page, element) );
}


export {
 useAddChest,
 useDeleteChest,
 useClaimChest,
 useFetchUserChest,
 useChestDailyTransactions,
}
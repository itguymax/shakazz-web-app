import { useMutation, useQuery, QueryClient, } from 'react-query';
import { fetchPortefeuille, addPortefeuille, deletePortefeuille, updatePortefeuille } from "../../services";

const queryClient = new QueryClient()
const usePortefeuille = (accessToken) => {
  return useQuery(['Portefeuille'], () => fetchPortefeuille(accessToken));
}

const useAddPortefeuille = () => {
 return useMutation('addPortefeuille',addPortefeuille, {onSuccess: () => queryClient.invalidateQueries('Portefeuille')} );
}
const useDeletePortefeuille = () => {
  return useMutation('deletePortefeuille',deletePortefeuille);
}
const useUpdatePortefeuille = () => {
  return useMutation('updatePortefeuille',updatePortefeuille);
}

 export {
  usePortefeuille,
  useAddPortefeuille,
  useDeletePortefeuille,
  useUpdatePortefeuille,
}
import { useMutation, useQuery, QueryClient, } from 'react-query';
import { addLegacy,fetchAllLegacy,updateLegacy,deleteLegacy} from "../../services";

const queryClient = new QueryClient();

const useFetchAllLegacy = (accessToken) => {
  return useQuery(['FetchLegacy'], () => fetchAllLegacy(accessToken)
  // ,{
  //     // Refetch the data every second
  //     refetchInterval: 1000,
  //   }
    );
}

const useAddLegacy = () => {
 return useMutation('AddLegacy',addLegacy, {onSuccess: () => queryClient.invalidateQueries('FetchLegacy')});
}
const useDeleteLegacy = () => {
  return useMutation('DeleteLegacy',deleteLegacy, {onSuccess: () => queryClient.invalidateQueries('FetchLegacy')});
}
const useUpdateLegacy = () => {
  return useMutation('updateLegacy',updateLegacy, { onSuccess: () => queryClient.invalidateQueries('FetchLegacy')});
}

 export {
  useFetchAllLegacy,
  useAddLegacy,
  useDeleteLegacy,
  useUpdateLegacy,
}
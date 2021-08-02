import { useQuery, useMutation } from 'react-query';
import { fetchAlltransactions,fetchWallettransactions,fetchDailytransactions } from "../../services";

const useFetchAlltransactions = () => {
  return useMutation('fetchAlltransactions', fetchAlltransactions );
}
const useFetchWallettransactions = () => {
  return useMutation('fetchWallettransactions', fetchWallettransactions);
}
const useFetchDailytransactions = () => {
  return useMutation('fetchDailytransactions', fetchDailytransactions);
}
export {
useFetchAlltransactions,
useFetchWallettransactions,
useFetchDailytransactions
}

import { useQuery, useMutation } from 'react-query';
import { fetchAlltransactions,fetchWallettransactions } from "../../services";

const useFetchAlltransactions = () => {
  return useMutation('fetchAlltransactions', fetchAlltransactions );
}
const useFetchWallettransactions = () => {
  return useMutation('fetchWallettransactions', fetchWallettransactions);
}

export {
useFetchAlltransactions,
useFetchWallettransactions,
}
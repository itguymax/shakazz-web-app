import { useQuery } from 'react-query';
import { fetchNetworkers} from "../../services";

const useNetworkers = (accessToken) => {
  return useQuery(['Networkers'], () => fetchNetworkers(accessToken))
}

export {
  useNetworkers,
}
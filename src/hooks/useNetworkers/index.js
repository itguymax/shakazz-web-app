import { useQuery } from 'react-query';
import { fetchNetworkers, fetchUserByInvitation} from "../../services";

const useNetworkers = (accessToken) => {
  return useQuery(['Networkers'], () => fetchNetworkers(accessToken))
}

const UseNetworkerByInvitation = (invitation) => {
  return useQuery(["Referal link"], () => fetchUserByInvitation(invidation))
}
export {
  useNetworkers,
  UseNetworkerByInvitation
}
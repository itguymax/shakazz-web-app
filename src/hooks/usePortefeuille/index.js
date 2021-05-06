import { useMutation, useQuery } from 'react-query';
import { fetchPortefeuille } from "../../services";

const usePortefeuille = (accessToken) => {
  return useQuery(['Portefeuille'], () => fetchPortefeuille(accessToken))
}

export {
  usePortefeuille
}
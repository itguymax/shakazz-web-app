import { useMutation, useQuery } from 'react-query'
import { fetchWallets} from "../../services/wallet.service";
const useWallets = (accessToken) => {
  return useQuery(['wallets'], () => fetchWallets(accessToken),{refetchInterval:1000})
}


export {
  useWallets
}
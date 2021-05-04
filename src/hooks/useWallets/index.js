import { useQuery } from 'react-query'
import { fetchWallets} from "../../services/wallet.service";
const useWallets = (accessToken) => {
  return useQuery(['wallets'], () => fetchWallets(accessToken))
}


export {
  useWallets
}
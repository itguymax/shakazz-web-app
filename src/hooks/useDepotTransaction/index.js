import { useMutation} from 'react-query';
import { fetchDepotTransactions } from "../../services";

const useDepotTransaction = () => {
  return useMutation('Use depot', fetchDepotTransactions)
}
export {
  useDepotTransaction
}

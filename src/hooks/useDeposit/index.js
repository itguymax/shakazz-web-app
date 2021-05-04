import { useMutation} from 'react-query'
import { makeDeposit } from "../../services";
const useDeposit = () => {
  return useMutation('Deposit', makeDeposit)
}
export {
  useDeposit
}
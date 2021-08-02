import { useMutation} from 'react-query'
import { makeDeposit,makeDepositCrypto } from "../../services";
const useDeposit = () => {
  return useMutation('Deposit', makeDeposit)
}
const useDepositCrypto = () => {
  return useMutation('Deposit', makeDepositCrypto)
}
export {
  useDeposit,useDepositCrypto
}

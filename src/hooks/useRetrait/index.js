import { useMutation} from 'react-query'
import { makeWithdrawal } from "../../services";

const useTransfertInterne = () => {
  return useMutation('Retrait', makeWithdrawal)
}

export {
 useTransfertInterne
}
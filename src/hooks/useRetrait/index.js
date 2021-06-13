import { useMutation} from 'react-query'
import { makeWithdrawal } from "../../services";

const useRetrait = () => {
  return useMutation('Retrait', makeWithdrawal)
}

export {
 useRetrait
}

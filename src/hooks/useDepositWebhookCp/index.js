import { useMutation} from 'react-query'
import { depotWebhookCp } from "../../services";
const useDepositWebhookCp = () => {
  return useMutation('DepositWebhookCp', depotWebhookCp)
}
export {
  useDepositWebhookCp
}

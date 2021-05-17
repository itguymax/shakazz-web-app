import { useMutation} from 'react-query';
import { serviceKyc } from "../../services";

const useServiceKyc = () => {
  return useMutation('Use kyc', serviceKyc)
}
export {
  useServiceKyc
}

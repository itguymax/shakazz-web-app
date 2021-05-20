import { useMutation} from 'react-query';
import { profileUserInfos } from "../../services";

const useProfileUserInfos = () => {
  return useMutation('Use profile form', profileUserInfos)
}
export {
  useProfileUserInfos
}

import { useMutation } from 'react-query';
import { updateUser } from "../../services";

const useUpdateUser = () => {
  return useMutation('Update User', updateUser);
}

export {
 useUpdateUser
}
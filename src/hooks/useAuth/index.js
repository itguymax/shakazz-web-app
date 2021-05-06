import { useMutation} from 'react-query'
import { changeConnexionPassword, changeTransactionPassword } from "../../services";


const usechangeConnexionPassword = () => {
  return useMutation('Change connexion pwd', changeConnexionPassword)
}
const usechangeTransactionPassword = () => {
  return useMutation('Change transaction pwd', changeTransactionPassword)
}
export {
  usechangeTransactionPassword,
  usechangeConnexionPassword
}
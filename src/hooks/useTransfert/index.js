import { useMutation} from 'react-query'
import { makeExternalTransfert,makeInternalTransfert } from "../../services";


const useTransfertInterne = () => {
  return useMutation('Transfert Interne', makeInternalTransfert)
}
const useTransfertExterne = () => {
  return useMutation('Transfert Externe', makeExternalTransfert)
}
export {
  useTransfertExterne,
  useTransfertInterne
}
import { useQuery} from 'react-query'
import { converter,converterAfrica } from "../../services";
const useConverter = (from,to) => {
  return useQuery(['USD-BTC'], () => converter(from,to))
}
const useConverterAfrica = (from,to) => {
  return useQuery(['USD-XAF'], () => converterAfrica(from,to))
}
export {
  useConverter,
  useConverterAfrica
}

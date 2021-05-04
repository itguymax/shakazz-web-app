import { useQuery} from 'react-query'
import { converter } from "../../services";
const useConverter = (from,to) => {
  return useQuery(['USD-BTC'], () => converter(from,to))
}
export {
  useConverter
}
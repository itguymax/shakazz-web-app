import { useMutation, useQuery } from 'react-query'
import { fetchOptions } from "../../services";
const useFetchOptions = (accessToken) => {
  return useQuery(['Fetch options'], () => fetchOptions(accessToken))
}

const useAddOption = () => {
  
}

export {
  useFetchOptions
}
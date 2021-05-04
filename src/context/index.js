import { createContext, useContext, useState, useReducer} from 'react';
import { constantes } from '../config';
import { getUTfromLS } from "../helpers/token";
import { getUserWallets } from "../services/wallet.service";
import { QueryClient, useQuery } from 'react-query'

export const AppContext = createContext({});

export const initialState = {
  user: {},
  userData: {},
  settings:{},
  wallets: [],
  accessToken: getUTfromLS(),
  depositSummary:{
     btc : "",
     amount: "",
     taux : "",
     method:"",
  },
 
};
export const reducer = (state, action) => {


  switch (action.type) {
    
     case 'wallets': {
       console.log("reducer", action.type, action.value);
      return { ...state, wallets: action.value };
    }
    default:
      return { ...state, [action.type]: action.value };
    // throw new Error();
  }
};


export function AppWrapper({ children }) {
   const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{appState, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
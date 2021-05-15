import { createContext, useContext, useState, useReducer} from 'react';
import { constantes } from '../config';
import { getUTfromLS } from "../helpers/token";
import { getUserWallets } from "../services/wallet.service";
import { QueryClient, useQuery } from 'react-query'

export const AppContext = createContext({});

export const initialState = {
  user: {
    address:{},
    children: {
    child1 : [],
    child2 : [],
    child3 : [],
    child4 : [],
    child5 : []
    },
    generalTurnover:{},
    profil:'',
    companyName:"",
    parent: "",
    name: "",
    lastName: "",
    userName: "",
    invitation: "",
    invitationLink: "",
  },
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
  portefeuille:[]
 
};
export const reducer = (state, action) => {


  switch (action.type) {
    
     case 'wallets': {
       console.log("reducer", action.type, action.value);
      return { ...state, wallets: action.value };
    }
    case 'userInfo': {
      console.log("user reducer",action.type, action.value )
      return {...state, user : { ...state.user,
        address: {
          ...action.value.address
        }
      } }
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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {verifyTokenS} from "../services/verifyToken.service";
import config from '../config';
import {useMutation, useQueryClient,QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration'


const withAuth = (WrappedComponent) => {
  console.log("enter auth");
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);
    console.log("HOC");
    const { mutateAsync, isLoading, isError} = useMutation("Verify token",verifyTokenS);
    console.log("test error", isError);
    if(isError){
      alert("Une erreur s'est produite")
       Router.replace("/auth/login");
    }
    useEffect(async () => {
    if(typeof window !== "undefined"){
           const accessToken = localStorage.getItem(config.localStoreToken);
      console.log('access token', accessToken);
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        console.log("HOC 1");
        Router.replace("/auth/login");
      } else {
        console.log("HOC 2");
        // setVerified(true);
        // we call the api that verifies the token.
        const t = await mutateAsync(accessToken);
        // if token was verified we set the state.
        console.log("dddddd",t);
       if(t){
           if (t.data.verifyToken) {
           console.log("HOC 3");
           setVerified(t.data.verifyToken);
         } else{
           console.log("HOC 4");
          // If the token was fraud we first remove it from localStorage and then redirect to "/"
           localStorage.removeItem(config.localStoreToken);
           Router.replace("/auth/login");
        }
       }
      }
    }
    }, []);

    if (verified) {
      console.log("verified")
      return <WrappedComponent {...props}/>;
    } else {
      console.log("verified not")
      return null;
    }
  };
};

export default withAuth;
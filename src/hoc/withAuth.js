import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {verifyTokenS} from "../services/verifyToken.service";
import config from '../config';
import {useMutation, useQueryClient} from 'react-query';

const withAuth = (WrappedComponent) => {
  console.log("enter auth");
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);
    console.log("HOC");
    const { mutateAsync, isLoading} = useMutation("Verify token",verifyTokenS);
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
         } else {
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
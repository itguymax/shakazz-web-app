import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {verifyToken} from "../services/verifyToken.service";
import config from '../config'

const withAuth = (WrappedComponent) => {
  return (props) => {
    
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
      const accessToken = localStorage.getItem(config.localStoreToken);
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/auth/login");
      } else {
        // we call the api that verifies the token.
        // const data = await verifyToken(accessToken);
        // if token was verified we set the state.
        // if (data.verified) {
        //   setVerified(data.verified);
        // } else {
          // If the token was fraud we first remove it from localStorage and then redirect to "/"
          localStorage.removeItem(config.localStoreToken);
           Router.replace("/auth/login");
        // }
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
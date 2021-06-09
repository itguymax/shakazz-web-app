import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {verifyTokenS} from "../services/verifyToken.service";
import config from '../config';
import {useMutation, useQueryClient,QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import {fetchPortefeuille,fetchWallets} from "../services"


export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['Portefeuille'], () => fetchPortefeuille())
  await queryClient.prefetchQuery(['wallets'], () => fetchWallets())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);
    console.log("HOC");
    const { mutateAsync, isLoading, isError} = useMutation(verifyTokenS, {mutationKey:"Verify token", retry:true});
    console.log("test error", isError);
    if(isError){
      alert("Une erreur s'est produite")
       Router.replace("/auth/login");
    }
    useEffect(async () => {
    if(typeof window !== "undefined"){
           const accessToken = localStorage.getItem(config.localStoreToken);
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/auth/login");
      } else {
        // setVerified(true);
        // we call the api that verifies the token.
        const t = await mutateAsync(accessToken);
        // if token was verified we set the state.
       if(t){
           if (t.data.verifyToken) {
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
      return <WrappedComponent {...props}/>;
    } else {
      return null;
    }
  };
};

export default withAuth;
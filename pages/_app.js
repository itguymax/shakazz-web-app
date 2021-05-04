import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import PageChange from "../src/components/PageChange/PageChange.js";
import { ApolloProvider } from '@apollo/client';
import "../public/assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../public/assets/scss/nextjs-argon-dashboard.scss";
import "../public/assets/css/responsive.css";
import "../public/assets/css/shakazz.css";
import 'react-circular-progressbar/dist/styles.css';
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate} from 'react-query/hydration'
const queryClient = new QueryClient();
// import "../styles/nextjs-argon-dashboard.css"
import {client } from "../src/lib/apollo"
import { AppWrapper } from '../src/context'

Router.events.on("routeChangeStart", (url) => {

  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`build by itguymax@gmail.com`);
    document.insertBefore(comment, document.documentElement);
  }
 
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="assets/img/brand/apple-icon.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="assets/img/brand/apple-icon.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
         
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="assets/img/brand/apple-icon.png"
          />
       
        <meta name="theme-color" content="#317EFB" />
          <title>Shakazz web App</title>
          
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
        </Head>
        
        <Layout>
       
          <ApolloProvider client={client}>
          <QueryClientProvider client={queryClient}>
          <AppWrapper>
              <ReactQueryDevtools initialIsOpen={false}/>
              <Hydrate state={pageProps.dehydratedState}>
                 <Component {...pageProps} />
              </Hydrate>
          </AppWrapper>
          </QueryClientProvider>
        </ApolloProvider>
      
        </Layout>
        
      </React.Fragment>
    );
  }
}

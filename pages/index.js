import React, { Component } from "react";
import Router from "next/router";
import {
  Button
} from "reactstrap";  
import Public from '../src/layouts/Public';
import UserHeader from '../src/components/Headers/UserHeader';
import SEO from '../src/components/Seo';
import Head from 'next/head';
import config from '../src/config'

function Index() {
  // React.useEffect(() => {
  //   Router.push("/portal/dashboard");
  // });
  return <>
      <Head>
          <title>Shakazz | Elargissez vos opportunités d’affaires</title>
        <meta
          name="description"
          content="Shakazz vous propose des plans d’investissement adaptés à votre environnement socioéconomique et au confort financier de votre portefeuille."
        />
        <link rel="canonical" href={`${config.canonicalLink}`}/>

        <meta property="og:locale" content="fr" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shakazz | Elargissez vos opportunités d’affaires"
        />

        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta property="og:url" content={`${config.canonicalLink}`} />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website" />
        <meta
          name="twitter:description"
          content="Shakazz vous propose des plans d’investissement adaptés à votre environnement socioéconomique et au confort financier de votre portefeuille."
        />
      </Head>
      <UserHeader/>
    
  </>
}

Index.layout = Public;
export default Index;
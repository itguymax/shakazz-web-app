import React from 'react';
import Public from '../../src/layouts/Public';
import Head from "next/head";
import config from "../../config";

function Services () {
  return (
    <>
      <Head>
        {/* META tags */}
        <title>Nos services | Shakazz</title>
        <meta
          name="description"
          content="Shakazz Nos services description"
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/services`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nos Services | Shakazz" />
        <meta
          property="og:description"
          content="Shakazz Nos services description"
        />
        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta
          property="og:url"
          content={`${config.canonicalLink}/services`}
        />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webpage" />
        <meta
          name="twitter:description"
          content="Shakazz Nos services description"
        />
      </Head>
    <div>
      Services
    </div>
    </>
  )
}

Services.layout = Public;
export default Services;
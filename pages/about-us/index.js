import React from 'react'
import Public from '../../src/layouts/Public';
import Head from "next/head"
import config from '../../src/config'

 function AboutUs() {
  return (
    <>
      <Head>
        {/* META tags */}
        <title>A propos | Shakazz</title>
        <meta
          name="description"
          content="Shakazz about page description"
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/about-us`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A propos | Shakazz" />
        <meta
          property="og:description"
          content="Shakazz about page description"
        />
        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta
          property="og:url"
          content={`${config.canonicalLink}/about-us`}
        />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webpage" />
        <meta
          name="twitter:description"
          content="Shakazz twitter description"
        />
      </Head>
      <div> About us </div>
    </>
  )
}

AboutUs.layout = Public;

export default AboutUs;
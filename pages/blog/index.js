import React from 'react'
import Link from 'next/link'
import { gql } from '@apollo/client';
import { client } from '../../src/lib/apollo';
import Public from '../../src/layouts/Public';
import styles from '../../styles/Blog.module.css';
import Head from "next/head";
import config from "../../src/config";
import BlogHero from '../../src/sections/BlogHero';
import Subscription from '../../src/sections/Subscription';
import LastArticles from '../../src/sections/LastArticles';
import {css} from "@emotion/react";
import {device} from "../../src/lib/device" ;
import { useRouter } from 'next/router';


function Blog({ posts }) {
  console.log("les node    ");
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
    <Head>
        {/* META tags */}
        <title>Nos articles | Shakazz</title>
        <meta
          name="description"
          content="Découvrez nos articles, et apprenez des experts."
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/blog`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nos Services | Shakazz" />
        <meta
          property="og:description"
          content="Découvrez nos articles, et apprenez des experts."
        />
        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta
          property="og:url"
          content={`${config.canonicalLink}/blog`}
        />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webpage" />
        <meta
          name="twitter:description"
          content="Découvrez nos articles, et apprenez des experts."
        />
      </Head>
       {/* <BlogHero featuredPosts={posts}/> */}
       <LastArticles posts={posts}/>
       <Subscription/>
    </>
  )
}




export async function getStaticProps() {
  const result = await client.query({
    query: gql`
    query BlogPagePosts {
          posts {
            nodes {
              title
              excerpt
              content
              slug
               featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }

    `,
  })
// console.log("les node    ", result.data.posts.nodes);
  return {
    props: {
      posts: result.data.posts.nodes,
    },
  }
}

Blog.layout = Public;
export default Blog;
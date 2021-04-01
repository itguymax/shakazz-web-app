import React from 'react'
import Link from 'next/link'
import { gql } from '@apollo/client';
import { client } from '../../src/lib/apollo';
import Public from '../../src/layouts/Public';
import styles from '../../styles/Blog.module.css';
import Head from "next/head";
import config from "../../src/config";

function Blog({ posts }) {
  console.log("posts", posts);
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
    <main >
        <ul>
          {posts.map(({ title, slug, date, excerpt }) => ( 
            <div key={title}>
            <h1 >{title}</h1>
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a>
                  [{date}] {title}
                </a>
              </Link>
            </li>
          </div>))}
        </ul>
      </main>
    </>
  )
}

Blog.layout = Public;
export default Blog;


export async function getStaticProps() {
  const result = await client.query({
    query: gql`
    query BlogPagePosts {
          posts {
            nodes {
              date
              title
              excerpt
              slug
            }
          }
        }

      # query GetWordPressHomePageAndPosts {
      #   pageBy(uri: "/") {
      #     title
      #     content
      #   }
      #   posts {
      #     nodes {
      #       title
      #       slug
      #       date
      #     }
      #   }
      # }
    `,
  });

  console.log("blog page post", result);
  return {
    props: {
      posts: result.data.posts.nodes,
    },
  };
}
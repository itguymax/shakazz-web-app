
import { gql } from '@apollo/client';
import { client } from '../../src/lib/apollo'; 
import Head from "next/head";
import config from "../../src/config";
export default function BlogPage({post}){

  return (
    <>
    <Head>
        {/* META tags */}
        <title>{` ${post.title} | Shakazz`}</title>
        <meta
          name="description"
          content={post.title}
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/blog`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={` ${post.title} | Shakazz`} />
        <meta
          property="og:description"
          content={post.title}
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
          content={post.title}
        />
      </Head>
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  </>
  )
}



export async function getStaticPaths(){
  const result = await client.query({
    query: gql`
        query GetWordPressPosts {
          posts {
            nodes {
              slug
            }
          }
        }
    `
  });
 console.log("static path", result.data.posts.nodes);
  return {
    paths: result.data.posts.nodes.map(({slug})=>{
      return  {
        params: { slug }
      }
    }
    ),
    fallback: false,
  }

}

export async function getStaticProps({ params }) {
  console.log("get static props param",params);
  const { slug } = params;
  const result = await client.query({
    query: gql`
      query GetWordPressPostBySlug($slug: ID!) {
         post(idType: SLUG, id: $slug) {
            content
            title
          }
      }
    `,
    variables: { slug },
  });
  console.log("slug page", result);
  return {
    props: {
      post: result.data.post,
    },
  };
}
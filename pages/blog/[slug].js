
import { gql } from '@apollo/client';
import { client } from '../../src/lib/apollo'; 
import Head from "next/head";
import Image from "next/image"
import Public from '../../src/layouts/Public';
import config from "../../src/config";
import { useRouter } from "next/router";
import BlogPostFooter from "../../src/components/blog/BlogPostFooter"
// reactstrap components
import {Container} from "reactstrap";

function BlogPage({post}){
  const router = useRouter();

  let featuredImageUrl="";
  let authorInfo="";
  if(post.featuredImage){
   featuredImageUrl =  post?.featuredImage?.node.sourceUrl;
  }
  if(post.author){
     authorInfo = post.author.node;
  }

   if (router.isFallback) {
    return <div>Loading...</div>
  }
 console.log("blog post article", post);
  return (
    <>
    <Head>
        {/* META tags */}
        <title>{` Post | Shakazz`}</title>
        <meta
          name="description"
          content="post"
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/blog`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={` post | Shakazz`} />
        <meta
          property="og:description"
          content={"POST"}
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
          content={"post"}
        />
      </Head>
    {/* <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
    </div> */}
     <article
        css={css`
          width: 100%;
          display: flex;
         
        `}
      >
        <Container
          css={css`
            padding-top: 20px;
            width: 70%;
          `}
         fluid>
          <h1
            css={css`
              text-align: center;
              margin-bottom: 20px;
              margin-top: 0;
              
            `}
          >
            {post.title}
          </h1>
          {featuredImageUrl && (
            <div
              css={css`
                text-align: center;

                p {
                  margin-bottom: 0;
                }
               
              `}
            >
              <Image
                src={featuredImageUrl}
                alt={post.title}
                width={700}
                height={400}
              />
             
            </div>
          )}
          <br />
         
           <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
    
      </article>  
        {/* <div
      css={css`
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <h1>POST PAGE NOT FOUND</h1>
      <p>{`You just hit a route that doesn't exist... the sadness.`}</p>
    </div>   */}
       {/* <Container css={css`
            padding-top: 20px;
            width: 70%;
          `} fluid> */}
        {/* <BlogPostFooter authorInfo={authorInfo}/> */}
      {/* </Container> */}
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
   const paths = result.data.posts.nodes.map(({slug})=>{
      console.log("path path path", slug);
      return  {
        params: { slug }
      }
    }
    )
  return {
    paths,
    fallback: true,
  }

}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const result = await client.query({
    query: gql`
      query GetWordPressPostBySlug($slug: ID!) {
         post(idType: SLUG, id: $slug) {
             content
              title
              # author {
              #   node {
              #     avatar {
              #       url
              #     }
              #     # username
              #     # description
              #   }
              # }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
      }
    `,
    variables: { slug },
  });
  return {
    props: {
      post: result.data.post,
    },
    revalidate: 1,
  }
}

BlogPage.layout = Public;
export default BlogPage;

import { gql } from '@apollo/client';
import { client } from '../../src/lib/apollo'; 

export default function BlogPage({post}){

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
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
import React from 'react'
import Link from 'next/link'
import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
import Public from '../../layouts/Public';
import styles from '../../styles/Blog.module.css';

function Blog({ posts }) {
  console.log("posts", posts);
  return (
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
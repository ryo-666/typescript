import Link from 'next/link';
import React, { FC } from 'react';
import { getAllPostsData } from '../helpers/posts';
import Post from '../components/Post';
import { GetStaticProps } from 'next'
import { POST } from '../types/types'


interface STATICPROPS {
  filteredPosts: POST[]
}

const Blog:React.FC<STATICPROPS> = ({ filteredPosts }) => {
  return (
      <>
      <ul>
        {filteredPosts &&
          filteredPosts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
      </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const filteredPosts = await getAllPostsData()
  return {
    props: { filteredPosts },
    revalidate: 3,
  }
}

export default Blog;
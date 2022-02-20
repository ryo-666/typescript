import Link from 'next/link';
import React from 'react';

const Post = ({post}) => {
  return (
    <div>
        <span>{post.id}</span>
            {" : "}
            <Link href={`/blogs/${post.id}`}>
                <span className="cursor-pointer">{post.title}</span>
            </Link>
    </div>
  )
}


export default Post;
import React from 'react';

type PostsProps = {
    resource:{
        user:any,
        posts:any,
    }
}
const Posts = ({resource} : PostsProps) => {
    const posts = resource.posts.read();
    return (
        <ul>
        {
            posts.map((post:any)=>{
                return <li key={post.id}>
                    {post.id} {post.title}
                </li>
            })
        }
        </ul>
    )
}

export default Posts;
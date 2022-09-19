import React from "react";
import PostCard from "./PostCard";
import PostForm from "./PostForm";



export default function PostList({posts, onDeletePost, onEditPost}) {

    console.log(posts)
    return <div>
        {posts.map((post) => {
            return (
                <PostCard key={post.id} post={post} onDeletePost={onDeletePost} onEditPost={onEditPost}/>
            )
        })}
    </div>
   
   
}
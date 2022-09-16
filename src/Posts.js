import React, { useEffect, useState } from "react";
import PostList from './PostList'

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/posts")
        .then(response => response.json())
        .then((data) => {
            setPosts(data)
        })
    }, [])

    return (
        <div>
            <PostList posts={posts}/>
        </div>
    )
}
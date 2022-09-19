import React, { useEffect, useState } from "react";
import PostList from './PostList'
import PostForm from './PostForm'

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/posts")
        .then(response => response.json())
        .then((data) => {
            setPosts(data)
        })
    }, [])

    function handleDeletePost(id) {
        const updatePostsArray = posts.filter((post) => post.id !== id)
        setPosts(updatePostsArray)
    }

    function handleEditPost(id) {
        const updatePostsArrayTwo = posts.filter((post) => post)
        setPosts(updatePostsArrayTwo)
    }

    

    return (
        <div>
            <br></br>
            <img className="image" src="https://c.tenor.com/QZEM4sbHtp8AAAAC/gilmore-girls-rory-gilmore.gif"></img>
            <img className="image" src="https://media3.giphy.com/media/xUySTJ8Y5HsuM4fvSE/giphy.gif"></img>
            <img className="image" src="https://media3.giphy.com/media/xUPOqAXVSedL6QUIdG/giphy.gif"></img>
            <img className="image" src="https://thumbs.gfycat.com/MeatyGranularAegeancat-max-1mb.gif"></img>
            <img className="image" src="https://i.gifer.com/Rgjb.gif"></img>
            <img className="image" src="https://i.gifer.com/XhWI.gif"></img>
            
            <PostForm />
            <PostList posts={posts} onDeletePost={handleDeletePost} onEditPost={handleEditPost}/>
        </div>
    )
}
import React, { useEffect, useState } from "react";



export default function PostForm() {
   const [posts, setPosts] = useState([])
   const [title, setTitle] = useState("")
   const [date, setDate] = useState("")
   const [entry, setEntry] = useState("")
   const [category, setCategory] = useState("")

   useEffect(() => {
    fetch("http://localhost:9292/posts")
    .then(response => response.json())
    .then((data) => {
      setPosts(data)
    })
  }, [])

  function onAddPost(newPost) {
    const updatedPostsArray = [...posts, newPost]
    setPosts(updatedPostsArray)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      date: date,
      entry: entry,
      category: category
    })
  
  })
  .then((r) => r.json())
  .then((newPost) => onAddPost(newPost))
  }

  return (
    <>
    <div className= "form">Add A New Diary Entry Here!</div>
    <form onSubmit={handleSubmit}>
        <input className="input" onChange = {(e) => setTitle(e.target.value)} value={title} type="text" title="title" placeholder="Enter Post's Title" />
        <input className="input" onChange = {(e) => setDate(e.target.value)} value={date} type="text" date="date" placeholder="Enter Post's Date" />
        <input className="input" onChange = {(e) => setEntry(e.target.value)} value={entry} type="text" entry="entry" placeholder="Post Entry" />
        <button type="submit">Create Post</button>
    </form>
    </>
  )
}

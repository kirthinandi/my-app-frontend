import React, { useEffect, useState } from "react";



export default function PostForm({addPost}) {
   const [title, setTitle] = useState("")
   const [date, setDate] = useState("")
   const [entry, setEntry] = useState("")
   const [categoryId, setCategoryId] = useState("")
const [categories, setCategories] = useState([])
   useEffect(() => {
    fetch("http://localhost:9292/categories")
    .then(response => response.json())
    .then((data) => {
      setCategories(data)
    })
  }, [])



  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accepts": "application/json"
    },
    body: JSON.stringify({
      title: title,
      date: date,
      entry: entry,
      category_id: categoryId
    })
  
  })
  .then((r) => r.json())
  .then((newPost) => addPost(newPost))
  }

  return (
    <>
    <div className= "form">Add A New Diary Entry Here!</div>
    <form onSubmit={handleSubmit}>
        <input className="input" onChange = {(e) => setTitle(e.target.value)} value={title} type="text" title="title" placeholder="Enter Post's Title" />
        <input className="input" onChange = {(e) => setDate(e.target.value)} value={date} type="text" date="date" placeholder="Enter Post's Date" />
        <input className="input" onChange = {(e) => setEntry(e.target.value)} value={entry} type="text" entry="entry" placeholder="Post Entry" />
        <select onChange={(e)=> setCategoryId(e.target.value)} name="emotions" className="button">
        <option disabled selected value> -- select an option -- </option>
            {categories.map(c => {
                return <option value={c.id}>{c.emotion}</option>
            })}
        </select>
        <button className="button" type="submit">Create Post</button>
    </form>
    </>
  )
}

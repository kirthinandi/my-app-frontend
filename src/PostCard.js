import React, {useState} from "react";



export default function PostCard({post, onDeletePost, updatePost}) {
   const { id, title, date, entry} = post;
   const [updatedTitle, setUpdatedTitle] = useState(title);
   const [updatedDate, setUpdatedDate] = useState(date);
   const [updatedEntry, setUpdatedEntry] = useState(entry);

   function handleDeleteClick() {
    fetch(`http://localhost:9292/posts/${post.id}`, {
      method: "DELETE", 
    }
   )
    onDeletePost(id)
  }

  function handleUpdateClick() {
    fetch(`http://localhost:9292/posts/${post.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updatedTitle, 
        date: updatedDate,
        entry: updatedEntry,
      }),
    })
        .then((r) => r.json())
        .then((updatedPost) => updatePost(updatedPost));
  }

   return (
    <>
    <div className="card">
        <div className="container">
            <h3 contentEditable onInput={e => {
                setUpdatedTitle(e.target.textContent)}}>{title}</h3>
            <h4 contentEditable onInput={e => {
                setUpdatedDate(e.target.textContent)}}>{date}</h4>
            <h4 contentEditable onInput={e => {
                setUpdatedEntry(e.target.textContent)}}>{entry}</h4>
            <button className="button" onClick={handleDeleteClick}>Delete</button>
            <button className="button" onClick={handleUpdateClick}>Update</button>
        </div>
    </div>
    </>
   )
}
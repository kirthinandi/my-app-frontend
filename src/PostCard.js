import React from "react";



export default function PostCard({post, onDeletePost, onEditPost}) {
   const { id, title, date, entry} = post;
   function handleDeleteClick() {
    fetch(`http://localhost:9292/posts/:id`, {
      method: "DELETE", 
    }
   )
    onDeletePost(id)
  }

  function handleEditClick() {
    fetch(`http://localhost:9292/posts/:id`, {
      method: "PATCH", 
    }
   )
    onEditPost(id)
  }

   return (
    <div className="card">
        <div className="container">
            <h3>{title}</h3>
            <h4>{date}</h4>
            <h4>{entry}</h4>
            <button className="button" onClick={handleDeleteClick}>Delete</button>
            <button className="button" onClick={handleEditClick}>Edit</button>
        </div>
    </div>
   )
}
import React from "react";



export default function PostCard({post}) {
   const { id, title, date, entry} = post;
   return (
    <div className="card">
        <h3>{title}</h3>
        <h4>{date}</h4>
        <h4>{entry}</h4>
    </div>
   )
}
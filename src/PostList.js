import { React, useState } from "react";
import PostCard from "./PostCard";
import Filters from "./Filters";




export default function PostList({posts}) {

    const [checked, setChecked] = useState(false)
  const happyPosts = posts.filter((happy) => checked ? happy.type === 'happy' : happy)
  const angryPosts = posts.filter((angry) => checked ? angry.type === 'angry' : angry) 
  const sadPosts = posts.filter((sad) => checked ? sad.type === 'sad' : sad) 

  const happyItems = happyPosts.map((happy) => (
    <PostCard key={happy.id} happy={happy} />
  ));

  const angryItems = angryPosts.map((angry) => (
    <PostCard key={angry.id} angry={angry} />
  ));

  const sadItems = sadPosts.map((sad) => (
    <PostCard key={sad.id} sad={sad} />
  ));

    return (
        <main>
      <Filters checked={checked} setChecked={setChecked} />
      <div>{happyItems}{angryItems}{sadItems}</div>
    </main>
    )
   
}
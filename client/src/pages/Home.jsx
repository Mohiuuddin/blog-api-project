import { useState, useEffect } from "react";
import { getPosts } from "../services/api";
import PostCard from "../components/PostCard";

export default function Home(){
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    getPosts().then(setPosts);
  }, []);

  return(
    <div className="home">
      <h1>Blog</h1>
      {
        posts.map(post=>(
          <PostCard key={post.id} post={post}/>
      ))}
    </div>
  );
}
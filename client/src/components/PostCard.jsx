import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.content.slice(0, 100)}...</p>
      <Link to={`/post/${post.id}`}>More</Link>
    </div>
  );
}
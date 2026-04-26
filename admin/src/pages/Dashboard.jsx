import { useEffect, useState } from "react";
import { getAllPosts, deletePost, updatePost } from "../services/api";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    const data = await getAllPosts();
    setPosts(data);
  }

  async function handleDelete(id) {
    await deletePost(id);
    loadPosts();
  }

  async function togglePublish(post) {
    await updatePost(post.id, {
      ...post,
      published: !post.published,
    });
    loadPosts();
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <Link to="/create" className="new-post-btn">+ New Post</Link>
      </div>

      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-info">
              <h3>{post.title}</h3>
              <span className={`status ${post.published ? "published" : "draft"}`}>
                {post.published ? "Published" : "Draft"}
              </span>
            </div>

            <div className="post-actions">
              <button
                className="btn toggle-btn"
                onClick={() => togglePublish(post)}
              >
                {post.published ? "Unpublish" : "Publish"}
              </button>
               <Link to={`/comment/${post.id}`} className="btn edit-btn">
                Comments
              </Link>
              <Link to={`/edit/${post.id}`} className="btn edit-btn">
                Edit
              </Link>

              <button
                className="btn delete-btn"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

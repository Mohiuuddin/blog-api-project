import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, updatePost } from "../services/api";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    loadPost();
  }, []);

  async function loadPost() {
    try {
      const data = await getPostById(id);
      setTitle(data.title);
      setContent(data.content);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await updatePost(id, { title, content });
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  }

  return (
    <div className="edit-post-page">
      <form onSubmit={handleSubmit} className="edit-form">
        <h2 className="form-title">Edit Post</h2>

        <input
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />

        <textarea
          className="form-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />

        <button className="form-button">Update</button>
      </form>
    </div>
  );
}
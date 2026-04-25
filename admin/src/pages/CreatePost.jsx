import { useState } from "react";
import { createPost } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
    const res = await createPost({ title, content });

    if (!res) throw new Error("Failed");

    navigate("/");
  } catch (err) {
    console.log(err);
    alert("Post creation failed");
  }
   
  }

  return (
   <div className="create-post-page">
  <form onSubmit={handleSubmit} className="create-form">
    <h2 className="form-title">Create Post</h2>

    <input
      className="form-input"
      placeholder="Title"
      name="title"
      onChange={e => setTitle(e.target.value)}
      required
    />

    <textarea
      className="form-textarea"
      placeholder="Content"
      name="content"
      onChange={e => setContent(e.target.value)}
      required
    />

    <button className="form-button">Create</button>
  </form>
</div>
  );
}
import { useState } from "react";
import { addComment } from "../services/api";

export default function CommentForm({ postId, onCommentAdded }) {
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
    const res = await addComment({
      postId: Number(postId),
      content,
    });

    console.log("COMMENT RESPONSE:", res); 

    setContent("");
    onCommentAdded();
  } catch (err) {
    console.log("COMMENT ERROR:", err);
  }
    
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button type="submit">Add Comment</button>
    </form>
  );
}
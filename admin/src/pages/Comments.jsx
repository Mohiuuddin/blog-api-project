import { useParams } from "react-router-dom";
import { getComments, deleteComment  } from "../services/api";
import { useEffect, useState } from "react";

export default function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(id).then(setComments);
  }, [id]);

  async function loadComments() {
    const data = await getComments(id);
    setComments(data);
  }

  async function handleDelete(commentId) {
    await deleteComment(commentId);
    loadComments();
  }

  return (
    <div className="comments-container">
      <h2 className="comments-title">Post Comments</h2>

      {comments.length === 0 ? (
        <p className="no-comments">No comments yet</p>
      ) : (
        <div className="comments-list">
          {comments.map((c) => (
            <div key={c.id} className="comment-card">
              <div className="comment-content">
                <p className="comment-text">{c.content}</p>
                <span className="comment-user">
                  By {c.user?.username || "Anonymous"}
                </span>
              </div>

              <button
                className="btn delete-btn"
                onClick={() => handleDelete(c.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
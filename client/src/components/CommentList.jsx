export default function CommentList({ comments }) {
  return (
    <div className="comment-list">
      <h3>Comments</h3>

      {comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        comments.map((c) => (
          <div key={c.id} className="comment">
            <p>{c.content}</p>
            <small>
              By {c.user?.username || "Anonymous"}
            </small>
          </div>
        ))
      )}
    </div>
  );
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost, getComments } from "../services/api";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

export default function PostPage() {
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getPost(id).then(setPost);
    getComments(id).then(setComments);
  }, [id, refresh]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      {token ? (
        <CommentForm
          postId={id}
          onCommentAdded={() => setRefresh(!refresh)}
        />
      ) : (
        <p className="login-warning">
          Please login to write a comment
        </p>
      )}

      <CommentList comments={comments} />
    </div>
  );
}




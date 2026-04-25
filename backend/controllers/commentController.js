const prisma = require("../lib/prisma");
const { post } = require("../routes/posts");
const { deletePost } = require("./postController");


const createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        postId: Number(postId),
        userId: req.user.userId,
      },
      include: {
        user: {
          select: { username: true },
        },
      },
    });

    res.json(comment);
  } catch (err) {
    console.log("COMMENT ERROR:", err); 
    res.status(500).json({ error: "Server error" });
  }
};

const getCommentsByPost = async(req, res)=>{
  const { id } = req.params;
  const comments = await prisma.comment.findMany({
    where: { postId: Number(id) },
    include: {
      user: {
        select: {
          id: true,
          username: true
        }
      }
    },
    orderBy: { createdAt: "desc"}
  });
  res.json(comments);
}


const deleteComment = async(req, res) => {
  const { id } = req.params;

  const comment = await prisma.comment.findUnique({
    where: { id: Number(id)}
  });

  if(!comment){
    return res.status(404).json({ message: "Comment not found"});
  }

  if(comment.userId !== req.user.userId && req.user.role !== "ADMIN"){
    return res.sendStatus(403);
  }

  await prisma.comment.delete({
    where: { id: Number(id) }
  });

  res.json({ message: "Comment deleted"});


}


module.exports = {
  createComment,
  getCommentsByPost,
  deleteComment
};





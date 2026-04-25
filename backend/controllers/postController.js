const prisma = require('../lib/prisma');

const getPublishedPosts = async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  res.json(posts);
};

const getAllPostsAdmin = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.sendStatus(403);
  }

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  res.json(posts);
};



const getPostById = async(req, res)=>{
  const { id } = req.params;
  
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: {
      comments: true,
      author:{
        select: {
          id: true,
          username: true
        }
      }
    }
  });

  if(!post){
    return res.status(404).json({ message: "Post not found"});
  }

  res.json(post);

};


const createPost = async (req, res) => {
  const { title, content } = req.body;
  console.log(req.user);

  const post = await prisma.post.create({
    data: {
      title,
      content,
      published: false,
      authorId: req.user.userId,
    },
  });

  res.json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, published } = req.body;

  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: {
      title,
      content,
      published,
    },
  });

  res.json(post);
};


const deletePost = async (req, res) => {
  const { id } = req.params;

  await prisma.post.delete({
    where: { id: Number(id) },
  });

  res.json({ message: "Post deleted" });
};


module.exports = {
  getPublishedPosts,
  getAllPostsAdmin,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};







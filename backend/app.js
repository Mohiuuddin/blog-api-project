require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRouter = require('./routes/auth');
const commentRoutes = require("./routes/commentRoutes");
const postRoutes = require("./routes/posts");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running...");
});

app.use('/auth', authRouter);
app.use("/comments", commentRoutes);
app.use("/posts", postRoutes);


app.listen(3000);



const prisma = require("../lib/prisma");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async(req, res)=>{
  const {username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const adminExists = await prisma.user.findFirst({
    where: { role: "ADMIN" },
  });

  const user = await prisma.user.create({
    data:{
      username,
      email, 
      password:  hashedPassword,
      role: adminExists ? "USER" : "ADMIN"
    }
  });

  res.json(user);

}

const login = async(req, res)=>{
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if(!user) return res.status(404).json({message: "User not found"});

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) return res.status(401).json({ message: "Invalid password"});

  const token = jwt.sign(
    {userId: user.id, role: user.role},
    process.env.JWT_SECRET,
    { expiresIn: "1d" }

  );

  res.json({ token, username: user.username, role: user.role })

}

module.exports = {
  register,
  login
}


import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const users = [];

export const register = async (req, res) => {
  const { username, pwd } = req.body;
  console.log(username, pwd);

  if (!username || !pwd)
    return res.status(400).json({ message: "Username or password required" });

  const hashPwd = await bcrypt.hash(pwd, 9);
  const newUser = { username: username, hashPwd: hashPwd };

  users.push(newUser);
  return res
    .status(200)
    .json({ message: "Utilisateur " + username + " has been added." });
};

export const login = async (req, res) => {
  const { username, pwd } = req.body;

  if (!username || !pwd)
    return res.status(400).json({ message: "Username or password required" });

  const user = users.find((u) => u.username == username);
  if (!user)
    return res.status(400).json({ message: "Username or password incorrect" });

  const verifyHashPwd = bcrypt.compare(pwd, user.hashPwd);
  if (!verifyHashPwd)
    return res.status(400).json({ message: "Username or password incorrect" });

  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.status(200).json({ messsage: "Auth success", token });
};

export const getUser = async (req, res) => {
  const user = users.find((u) => u.username == req.user.username);

  if (!user) return res.status(404).json({ message: "User not found" });
  console.log(user);

  return res.status(200).json(user);
};

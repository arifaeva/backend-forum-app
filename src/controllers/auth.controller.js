require("dotenv").config();
const User = require("../models/user.model.js");
const Session = require("../models/session.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleLoginJWT(req, res) {
  const { email, password } = req.body;

  // 1. Cari user berdasarkan email
  const user = await User.findOne({ email });
  // res.json({ user }); -> untuk ngetes
  if (!user) res.status(404).json({ message: "Account not found" });

  // 2. Cocokkan password user
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  // console.log(isPasswordMatch); -> untuk ngetes
  if (!isPasswordMatch) res.status(403).json({ message: "Invalid Password" });

  // 3. Buat payload/body untuk token
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  // 4. Generate token
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  // res.json({ payload, token }); -> untuk ngetes

  // 5. Set token ke cookie user
  res
    .cookie("token", token)
    .json({ message: "Login success!!!", user: payload });
}

async function handleRegister(req, res) {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  const user = await newUser.save();

  res.status(201).json({ message: "User registered successfully", data: user });
}

async function handleLoginSession(req, res) {
  const { email, password } = req.body;

  //1. Cari user berdasarkan email
  const user = await User.findOne({ email });
  if (!user) res.status(404).json({ message: "Account not found" });

  //2. Cocokkan password user
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) res.status(403).json({ message: "Invalid password" });

  //3. Insert into DB session
  const newSession = new Session({
    userId: user.id,
  });
  const session = await newSession.save();

  //4. Send session ID to cookie user
  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  res
    .cookie("session_id", session.id)
    .json({ message: "Login success!!!", user: userData });
}

async function handleLogout(req, res) {
  // delete session from DB
  const session_id = req.cookies?.session_id;

  await Session.findByIdAndDelete(session_id);

  return res.send("Logout Success!!!");
}

module.exports = {
  handleLoginJWT,
  handleRegister,
  handleLoginSession,
  handleLogout,
};

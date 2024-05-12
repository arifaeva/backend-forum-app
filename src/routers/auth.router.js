const express = require("express");
// const mongoose = require("mongoose");
const authRouter = express();
const authController = require("../controllers/auth.controller.js");

authRouter.post("/register", authController.handleRegister);
authRouter.post("/login", authController.handleLoginSession);
authRouter.get("/logout", authController.handleLogout);

// authRouter.post("/register", (req, res) =>
//   res.send("Ini register dari auth.router.js")
// );
// authRouter.post("/login", (req, res) =>
//   res.send("Ini login dari auth.router.js")
// );
// authRouter.get("/users", (req, res) =>
//   res.send("Ini data users dari auth.router.js")
// );

module.exports = authRouter;

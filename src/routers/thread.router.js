const express = require("express");
const threadRouter = express();
const jwt = require("jsonwebtoken");
const Session = require("../models/session.model.js");
const Thread = require("../models/thread.model.js");
const threadController = require("../controllers/thread.controller.js");

// threadRouter.get("/api/threads", (req, res) => {
//   const token = req.cookies.token;

//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(payload);
//     res.send("Ini data seluruh thread dari thread.router.js");
//   } catch (error) {
//     res.send("Kamu tidak memiliki akses");
//   }
// });

// threadRouter.get("/api/threads", async (req, res) => {
//   const sessionId = req.cookies?.session_id;

//   if (!sessionId) {
//     return res.send(
//       "Kamu tidak memiliki session, sehingga tidak memiliki akses!"
//     );
//   }

//   const session = await Session.findOne({ _id: sessionId });

//   if (!session) {
//     return res.send(
//       "Kamu tidak memiliki session, sehingga tidak memiliki akses!"
//     );
//   }

//   return res.send("Ini data threads");
// });

// Session: subrequest
// threadRouter.get("/api/threads", async (req, res) => {
//   const { title, content } = req.body;

//   const sessionId = req.cookies.session_id;
//   // console.log(sessionId);
//   const session = await Session.findById(sessionId);

//   const newThread = new Thread({
//     title,
//     content,
//     userId: session.userId,
//   });

//   const savedThread = await newThread.save();

//   return res.send("Ini data threads");
// });

// JWT
// threadRouter.get("/api/threads", async (req, res) => {
//   const { title, content, userId } = req.body;

//   const newThread = new Thread({
//     title,
//     content,
//     userId,
//   });

//   const savedThread = await newThread.save();

//   return res.send("Ini data threads");
// });

threadRouter.get("/api/threads", threadController.handleGetAllThreadsSession);
threadRouter.post("/api/threads", threadController.handlePostNewThreadSession);

module.exports = threadRouter;

const Thread = require("../models/thread.model.js");
const Session = require("../models/session.model.js");

const threads = [];

// JWT
async function handleGetAllThreadsSession(req, res) {
  const { title, content } = req.body;

  const sessionId = req.cookies.session_id;
  // console.log(sessionId);
  const session = await Session.findById(sessionId);

  const newThread = new Thread({
    title,
    content,
    userId: session.userId,
  });

  const savedThread = await newThread.save();

  return res
    .status(200)
    .json({ message: "Successfully get all threads!", data: threads });
}

async function handlePostNewThreadSession(req, res) {
  const { title, content } = req.body;

  const sessionId = req.cookies.session_id;
  // console.log(sessionId);
  const session = await Session.findById(sessionId);

  const newThread = new Thread({
    title,
    content,
    userId: session.userId,
  });

  const savedThread = await newThread.save();
  threads.push(savedThread);

  res.status(201).json({
    message: "Successfully post a new thread!",
    data: savedThread,
  });
}

module.exports = { handleGetAllThreadsSession, handlePostNewThreadSession };

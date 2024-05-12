const express = require("express");
const replyRouter = express();

replyRouter.get("/api/replies", (req, res) =>
  res.send("Ini data seluruh reply dari reply.router.js")
);

module.exports = replyRouter;

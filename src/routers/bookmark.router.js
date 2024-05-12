const express = require("express");
const bookmarkRouter = express();

bookmarkRouter.get("/api/bookmarks", (req, res) =>
  res.send("Ini data seluruh bookmark dari bookmark.router.js")
);

module.exports = bookmarkRouter;

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const middleware = require("./controllers/middleware.js");
const app = express();

const authRouter = require("./routers/auth.router.js");
const threadRouter = require("./routers/thread.router.js");
const replyRouter = require("./routers/reply.router.js");
const bookmarkRouter = require("./routers/bookmark.router.js");
const MONGO_DB_URL = require("./config/dburl.config.js");

mongoose.connect(MONGO_DB_URL);

app.use(express.json());
app.use(cookieParser());

app.use("/api", middleware);

// Routers
app.use(authRouter);
app.use(threadRouter);
app.use(replyRouter);
app.use(bookmarkRouter);

app.listen(8000);
// app.get("/", (req, res) => res.send("Hello Arifa!"));

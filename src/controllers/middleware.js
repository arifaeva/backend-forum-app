const Session = require("../models/session.model.js");

async function middleware(req, res, next) {
  //session
  const sessionId = req.cookies?.session_id;

  if (!sessionId) {
    return res.send(
      "Kamu tidak memiliki session, sehingga tidak memiliki akses!"
    );
  }

  const session = await Session.findOne({ _id: sessionId });

  if (!session) {
    return res.send(
      "Kamu tidak memiliki session, sehingga tidak memiliki akses!"
    );
  }

  // jwt
  // decode dari token -> payload
  // payload.id

  next();
}

module.exports = middleware;

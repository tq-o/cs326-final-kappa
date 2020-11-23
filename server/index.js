import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 1242;

mongoose.connect(
  `mongodb://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@localhost:27017/relax_app`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  const User = mongoose.model("User", { username: String, password: String });

  console.log("database connedted!");
  app.use(express.static(path.join(process.cwd(), "client")));

  app.get("/find_users", (req, res) => {
    User.find(function (err, users) {
      if (err) {
        return console.error(err);
      }
      res.json({ data: users });
    });
  });

  app.get("/login", (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    User.findOne({ username: username }, "_id password", function (err, user) {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ error: "internal error" });
      }
      if (user) {
        if (user.password === password) {
          res.json({ message: "login successfully", id: user._id });
        } else {
          res.status(401);
          res.json({ error: "username or password is not correct" });
        }
      } else {
        res.status(401);
        res.json({ error: "username or password is not correct" });
      }
    });
  });

  app.post("/signup", (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ error: "internal error" });
      }
      if (user) {
        res.status(403);
        res.json({ error: "user already exists" });
      } else {
        const user = new User({ username: username, password: password });
        user.save().then(() => {
          res.json({ message: "user created" });
        });
      }
    });
  });

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
});

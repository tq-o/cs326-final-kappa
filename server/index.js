const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

const url = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.6mduh.mongodb.net/cs326_project?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  const User = mongoose.model("User", {
    username: String,
    password: String,
    mood: {
      happy: { type: Number, default: 0 },
      sad: { type: Number, default: 0 },
      angry: { type: Number, default: 0 },
      disgust: { type: Number, default: 0 },
      fear: { type: Number, default: 0 },
      surprise: { type: Number, default: 0 },
    },
  });

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

  app.post("/login", (req, res) => {
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
          res.json({
            message: "login successfully",
            id: user._id,
          });
        } else {
          res.status(401);
          res.json({
            error: "username or password is not correct",
          });
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
        const user = new User({
          username: username,
          password: password,
        });
        user.save().then(() => {
          res.json({ message: "user created", id: user._id });
        });
      }
    });
  });

  app.post("/mood", (req, res) => {
    const username = req.query.username;
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ error: "internal error" });
      }
      if (user) {
        user.mood = {
          happy: parseInt(req.query.happy || 0),
          sad: parseInt(req.query.sad || 0),
          angry: parseInt(req.query.angry || 0),
          disgust: parseInt(req.query.disgust || 0),
          fear: parseInt(req.query.fear || 0),
          surprise: parseInt(req.query.surprise || 0),
        };
        user.save().then(() => {
          res.json({ message: "update completed", id: user._id });
        });
      } else {
        res.status(403);
        res.json({ error: `there is no username ${username}` });
      }
    });
  });

  app.get("/mood", (req, res) => {
    const username = req.query.username;

    User.findOne({ username: username }, function (err, user) {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ error: "internal error" });
      }
      if (user) {
        user.save().then(() => {
          res.json(user.mood);
        });
      } else {
        res.status(403);
        res.json({ error: `there is no username ${username}` });
      }
    });
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, `../client/html/login.html`));
  });
  
  app.get("/:name", (req, res) => {
    if (
      [
        "activities",
        "musics",
        "videos",
        "meme",
        "moodchart",
        "breathe",
        "welcome",
        "login",
        "signup",
      ].includes(req.params.name)
    ) {
      if (req.params.name == "activities") {
        req.params.name = "activities-listing";
      }

      if (req.params.name == "musics") {
        req.params.name = "music-listing";
      }

      if (req.params.name == "videos") {
        req.params.name = "video-tab";
      }

      res.sendFile(
        path.join(__dirname, `../client/html/${req.params.name}.html`)
      );
    } else {
      res.sendFile(path.join(__dirname, `../client/html/404.html`));
    }
  });
  app.listen(process.env.PORT || 8000);
});

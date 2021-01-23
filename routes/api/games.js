const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Game = require("../../models/Game");

router.post("/", (req, res) => {
    const newGame = new Game({
      name: req.body.name,
      stats: req.body.stats
    });

    newGame.save().then((game) => res.json(game));
  }
);


router.get("/", (req, res) => {
  Game.find()
    .then((games) => res.json(games))
    .catch((err) => res.status(404).json({ nogamesfound: "Could not retreive games" }));
});

module.exports = router;

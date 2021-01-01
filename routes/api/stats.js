const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// const Squad = require("../../models/Squad");
// const User = require("../../models/User");
const Stat = require("../../models/Stat");

// router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
// // user id
// //     stats/gameId,  (stats: {"kd": })

//     const newStat = new Stat({
//         user: req.user.id,
//         game: req.body.gameId,
//         gameName: req.body.gameName,
//         stats: req.body.stats

//     });

//     newStat.save().then((stat) => res.json(stat));
    
// });

// router.put("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
// // user id
// //     stats/gameId,  (stats: {"kd": })
//     const statId = req.params.id
    
//     Stat.findByIdAndUpdate(statId, {stats: req.body.stats}, { new: true })
//         .then((stat) => res.json(stat))
//         .catch((err) =>
//             res.status(404).json({ nostatfound: "Could not process request." })
//         );
    
// });

// router.get("/", (req, res) => {
//   Game.find()
//     .then((games) => res.json(games))
//     .catch((err) => res.status(404).json({ nogamesfound: "Could not retreive games" }));
// });

module.exports = router;




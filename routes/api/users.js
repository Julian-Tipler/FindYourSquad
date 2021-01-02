const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const Stat = require("../../models/Stat");
const Game = require("../../models/Game");
const Squad = require("../../models/Squad");

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

// router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
//   res.json({
//     id: req.user.id,
//     username: req.user.username,
//   });
// })

//Returns user state
router.get('/:userId', (req, res) => {
    User.findById(req.params.userId)
        .populate("userStats")
        .then(user => res.json(user))
        .catch(err =>
            res.status(404).json({ nouserfound: 'No user found' }  
        )
    );
});


// //Updates user

router.put('/:userId', (req, res) => {
  let update = { 
    platform: req.body.username,
    bio: req.body.bio
  } 
  User.findByIdAndUpdate(req.params.userId, update, { new: true })
    .then((user) => res.json(user))
    .catch(err =>
        res.status(404).json({ dataTypeError: 'Wrong data type' }  ))
});






router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // debugger
  // console.log(req.body.username)
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      errors.username = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {

              //makes new empty stats for each game when new user is made, one option of a way of doing it
              // Game.find().then(games => {
              //   games.forEach(game=> {
              //     const newStat = new Stat({
              //       user: user.id,
              //       game: game._id,
              //       gameName: game.name,
              //       stats: {}

              //   });
              //       newStat.save().then((stat) => res.json(stat));
              //   })
              // })
               
              ///


              const payload = { id: user.id, username: user.username };
              
              
              
           

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});


router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  // console.log(req.body)
  // debugger
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }).then(user => {
    if (!user) {
      errors.username = "Provide a valid username";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, username: user.username };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});


router.post("/:id/stats", passport.authenticate('jwt', { session: false }), (req, res) => {
// user id
//     stats/gameId,  (stats: {"kd": })

    const newStat = new Stat({
        user: req.params.id,
        game: req.body.gameId,
        gameName: req.body.gameName,
        stats: req.body.stats
    });

    newStat.save().then((stat) => {

      let update = { $push: { userStats: stat._id } };

      User.findByIdAndUpdate(req.params.id, update, { new: true })
        .then((user) => res.json(user))

    });
})


router.put("/:id/stats", passport.authenticate('jwt', { session: false }), (req, res) => {

    
    Stat.findByIdAndUpdate(req.body.statId, {stats : req.body.stats}, {new: true})
      .then(stat => res.json(stat))

})
 
  // userId param
  // game_id body
  // game_name body
  // stats body  {kd: 5, kills: 5}


// router.put("/:id/stats", passport.authenticate('jwt', { session: false }), (req, res) => {
// // user id
// //     stats/gameId,  (stats: {"kd": })
//     const statId = req.params.id
    
//     Stat.findByIdAndUpdate(statId, {stats: req.body.stats}, { new: true })
//         .then((stat) => res.json(stat))
//         .catch((err) =>
//             res.status(404).json({ nostatfound: "Could not process request." })
//         );
    
// });







module.exports = router;
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Squad = require('../../models/Squad');
const Game = require('../../models/Game');
const validateSquadInput = require('../../validation/squads');

//index squad
router.get('/', (req, res) => {
  // if (!req.query.game){
  //   Squad.find()
  //     .populate()
  // } else {
    Squad.find(req.query) // game: Call of Duty
      .find({squadFull:false})
      .populate({ path: 'members', populate: { path: 'userStats'}}) //, match: {game: req.query.game }
      .populate('game')
      .sort({ date: -1})
      .then((squads) => res.json(squads))
      .catch((err) =>
          res.status(404).json({ nosquadsfound: "No squads found" })
      );
  // }
})

// show squad page
router.get('/:id', (req, res) => {
  Squad.findById(req.params.id)
    .populate({ path: 'members', populate: { path: 'userStats' }})
    .populate({ path: "requests", populate: {path: 'userStats'}})
    .populate("game")
    .then((squad) => res.json(squad))
    .catch((err) =>
      res.status(404).json({ nosquadfound: "No squad found with that ID" })
    );
  });
  
// create squad
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    // const maxSquadSize = Game.findById(req.body.game)(game => game.squadSize)
    
    const { errors, isValid } = validateSquadInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    const newSquad = new Squad({
      leader: req.user.id,
      name: req.body.name,
      generalBio: req.body.generalBio,
      members: req.user.id,
      skillLevel: req.body.skillLevel,
      game: req.body.game,
      squadSize: req.body.squadSize
    });
    
    newSquad.save()
    .then(squad => {
      let update = { $push: { squads: squad._id } };

      User.findByIdAndUpdate(req.user.id, update, { new: true })
        .then((user) => res.json(squad))
     //res.json(squad));
    })

  });

// POST squad message
router.put("/:id/messages", (req, res) => {
    debugger
    let id = req.params.id;
    let update = { $push: { messages: {
        squad: req.body.squad,
        sender: req.body.sender,
        content: req.body.content 
    }}};
    Squad
        .findByIdAndUpdate(id, update, {new: true})
        .populate({ path: 'members', populate: { path: 'userStats' }})
        .populate({ path: "requests", populate: {path: 'userStats'}})
        .populate("game")
        .then(squad => res.json(squad))
        .catch(err =>
            res.status(404).json({ nosquadfound: 'Could not process request.' })
        );
})

// update squad  
router.put("/:id", (req, res) => {
     let id = req.params.id;
     let update, remove;
    switch (req.body.type) {
      case "addRequest":
        update = { $addToSet: { requests: req.body.newMemberId } };
        Squad.findByIdAndUpdate(id, update, { new: true })
            .populate({ path: 'members', populate: { path: 'userStats' }})
            .populate({ path: "requests", populate: {path: 'userStats'}})
            .populate("game")
          .then((squad) => res.json(squad))
          .catch((err) =>
            res.status(404).json({ nosquadfound: "Could not process request." })
          );
        break;

      case "declineRequest":
        remove = { $pull: { requests: req.body.requestId } };
        Squad.findByIdAndUpdate(id, remove, { new: true })
            .populate({ path: 'members', populate: { path: 'userStats' }})
            .populate({ path: "requests", populate: {path: 'userStats'}})
            .populate("game")
          .then((squad) => res.json(squad))
          .catch((err) =>
            res.status(404).json({ nosquadfound: "Could not process request." })
          );
        break;

      case "acceptMember":
        update = {
          $addToSet: { members: req.body.requestId },
          $pull: { requests: req.body.requestId },
        };
        let squad = Squad.findById(id)
        .then(squad=> {
          if (squad.members.length >= squad.squadSize) {
            squad.squadFull=true
            squad.save()
          }
          if (squad.squadFull) {
            return res.status(404).json({ nosquadfound: "This squad is full." })
          }
        
        console.log(squad)
        if (!squad.squadFull) {
          console.log('ping')
          Squad.findByIdAndUpdate(id, update, { new: true })
            .populate({ path: 'members', populate: { path: 'userStats' }})
            .populate({ path: "requests", populate: {path: 'userStats'}})
            .populate("game")
            .then((squad) => {
              if (squad.members.length >= squad.squadSize) {
                squad.squadFull=true
                squad.save()
              }
              let userUpdate = { $push: { squads: id } };
              User.findByIdAndUpdate(req.body.requestId, userUpdate, { new: true })
                .then((user) => {
                  res.json(squad)
                }
                )
            })
            .catch((err) =>
              res.status(404).json({ nosquadfound: "Could not process request." })
            );
        }
        })
        break;

      case "removeMember":
        remove = { $pull: { members: req.body.memberId } };
        Squad.findByIdAndUpdate(id, remove, { new: true })
            .populate({ path: 'members', populate: { path: 'userStats' }})
            .populate({ path: "requests", populate: {path: 'userStats'}})
            .populate("game")
          .then((squad) => {
            squad.squadFull=false
            squad.save()
            let userUpdate = { $pull: { squads: id } };

            User.findByIdAndUpdate(req.body.memberId, userUpdate, { new: true })
              .then((user) => res.json(squad))
          })
          .catch((err) =>
            res.status(404).json({ nosquadfound: "Could not process request." })
          );
        break;

      default:
        Squad.findById(id)
          .then((squad) => res.json(squad))
          .catch((err) =>
            res.status(404).json({ nosquadfound: "Could not process request." })
          );
    };
});
  
module.exports = router;















// Update Squad
//------------------------------------------------------------------------------
// router.put("/:id", (req, res) => {
//   if (req.body.type === 'addRequest'){
//     let id = req.params.id;  //body
//     let update = { $push: { requests: req.body.newMemberId }}
//     Squad.findByIdAndUpdate(id, update, {new: true})
//     .then(squad => res.json(squad));
//   }
  
//   if (req.body.type === 'declineRequest') {
//     let id = req.params.id;
//     let remove = { $pull: { requests: req.body.newMemberId }}
//     Squad.findByIdAndUpdate(id, remove, {new: true}).then(squad => res.json(squad));
//   }
  
//   if (req.body.type === 'acceptMember') {
//     let id = req.params.id;    
//     // let remove = { $pull: { requests: req.body.newMemberId }}
//     // Squad.findByIdAndUpdate(id, remove, {new: true})
//     let update = { $push: { members: req.body.newMemberId }, $pull: { requests: req.body.newMemberId }};
//     Squad.findByIdAndUpdate(id, update, { new: true } ).then(squad => res.json(squad));
//   }
  
//   if (req.body.type === 'removeMember') {
//     let id = req.params.id;
//     let remove = { $pull: { members: req.body.newMemberId }}
//     Squad.findByIdAndUpdate(id, remove, {new: true}).then(squad => res.json(squad));
//     }
// });
//------------------------------------------------------------------------------
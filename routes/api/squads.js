const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Squad = require('../../models/Squad');
const User = require('../../models/User');
const validateSquadInput = require('../../validation/squads');

//index squad
router.get('/', (req, res) => {
  Squad.find(req.query)
    .populate('members')
    .sort({ date: -1})
    .then((squads) => res.json(squads))
    .catch((err) =>
        res.status(404).json({ nosquadsfound: "No squads found" })
    );
})

// show squad page
router.get('/:id', (req, res) => {
  Squad.findById(req.params.id)
    .populate('members')
    .then(squad => res.json(squad))
    .catch(err =>
      res.status(404).json({ nosquadfound: 'No squad found with that ID' })
    );
  });
  
// create squad
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
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
    
    newSquad.save().then(squad => res.json(squad));
  });

// POST squad message
router.put("/:id/messages", (req, res) => {
    let id = req.params.id;
    let update = { $push: { messages: {
        squad: req.body.squad,
        sender: req.body.sender,
        content: req.body.content
    }}};
    Squad
        .findByIdAndUpdate(id, update, {new: true})
        .then(squad => res.json(squad))
        .catch(err =>
            res.status(404).json({ nosquadfound: 'Could not process request.' })
        );
})

// update squad  
router.put("/:id", (req, res) => {
    let id = req.params.id;
    let update, remove;

    switch(req.body.type) {
        case 'addRequest':
            update = { $push: { requests: req.body.newMemberId }};
            Squad
                .findByIdAndUpdate(id, update, {new: true})
                .then(squad => res.json(squad));
        case 'declineRequest':
            remove = { $pull: { requests: req.body.newMemberId }}
            Squad
                .findByIdAndUpdate(id, remove, {new: true})
                .then(squad => res.json(squad));
        case 'acceptMember': 
            // let remove = { $pull: { requests: req.body.newMemberId }}
            // Squad.findByIdAndUpdate(id, remove, {new: true})
            update = { $push: { members: req.body.newMemberId }, $pull: { requests: req.body.newMemberId }};
            Squad
                .findByIdAndUpdate(id, update, { new: true })
                .then(squad => res.json(squad));
        case 'removeMember':
            remove = { $pull: { members: req.body.newMemberId }}
            Squad
                .findByIdAndUpdate(id, remove, {new: true})
                .then(squad => res.json(squad));
        default:
            Squad.findById(req.params.id)
                .then(squad => res.json(squad))
                .catch(err =>
                    res.status(404).json({ nosquadfound: 'Could not process request.' })
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
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Squad = require('../../models/Squad');
const User = require('../../models/User')
const validateSquadInput = require('../../validation/squads');

//Squad index
router.get('/', (req, res) => {

  Squad.find(req.query)
        .sort({ date: -1})
        .then((squads) => res.json(squads))
        .catch((err) =>
          res.status(404).json({ nosquadsfound: "No squads found" })

      );
})
  // console.log(req.query);
  // if (Object.values(req.query).every(el=> el == "")) {
  //   console.log('no query')
  //   Squad.find()
  //     .sort({ date: -1 })
  //     .then((squads) => res.json(squads))
  //     .catch((err) =>
  //       res.status(404).json({ nosquadsfound: "No squads found" })
  //     );
  // } else {
    // var gameSearch = [] 
    // Squad.find().where('game').equals(req.query.game).then(search=> gameSearch.push(search))
    // var squadSizeSearch = []
    // Squad.find().where('squadSizeSearch').equals(req.query.squadSize).then(search => squadSizeSearch.push(search))
    // var skillLevelSearch = []
    // Squad.find().where('skillLevelSearch').equals(req.query.skillLevel).then(search => skillLevelSearch.push(search))

    // allSearch = gameSearch.concat(skillLevelSearch,squadSizeSearch)
    // allSearch = [...new Set([...gameSearch,...skillLevelSearch,...squadSizeSearch])]
    
    // acceptableFields = [];
    // for(var key in req.query) {
    //   if (req.query[key] !== ""){
    //     filteredQuery.push(key)
    //   }
    // res.json()

    // if (req.query.game === undefined) {
    //     let game = undefined;
    // }

    // if (req.query.skillLevel == undefined) {
    //     let skillLevel = undefined;
    // }

    // if (req.query.squadSize == undefined) {
    //     let squadSize = undefined;
    // }
    // Squad.find({
    //   'game': req.query.game,
    //   'skillLevel': req.query.skillLevel,
    //   'squadSize': req.query.squadSize},
    //      function(err, squads) {
    //         res.json(squads);
    //     });


    // Squad.find(
    // {
    //     "$or": [
    //         { "game": req.query.game}, 
    //         { "skillLevel": req.query.skillLevel }, 
    //         { "squadSize": req.query.squadSize },  

    //     ]
    // }, function(err, squads) {
    //     res.json(squads);
    // }
    // );

// var filteredQuery = [],
//     acceptableFields = ['game', 'skillLevel', "squadSize"];

    // acceptableFields.forEach(field =>
    //   req.query.field && filteredQuery[field] === req.query[field];
    // );
    
    // var query = Squad.find(filteredQuery);
    // var searchQuery = Squad.find()
    // for(var key in req.query) {
    //   if (req.query[key] !== ""){
    //     filteredQuery.push(key)
    //   }
    //   // Squad.find()
    //   //   .where(req.query[key]).equals(key);
    // }
    // searchQuery(filteredQuery)
    
      // Squad.find()
      //   .where(req.query[key]).equals(key)
    // console.log('YES query')
    // Squad.find()
    //   .sort({ date: 1 })
    //   .where('game').equals(req.query.game)  
    //   .where('skillLevel').equals(req.query.skillLevel)
    //   .where('squadSize').equals(req.query.squadSize)
    //   .then((squads) => res.json(squads))
    //   .catch((err) =>
    //     res.status(404).json({ nosquadsfound: "No squads found" })
    //   );
  // }
 
// router.get("/game/game_id", (req, res) => {
//   Squad.find()
//     .sort({ date: -1 })
//     .then((squads) => res.json(squads))
//     .catch((err) => res.status(404).json({ nosquadsfound: "No squads found" }));
// });

// SHOW squad page
router.get('/:id', (req, res) => {
  Squad.findById(req.params.id)
    .then(squad => res.json(squad))
    .catch(err =>
      res.status(404).json({ nosquadfound: 'No squad found with that ID' })
    );
  });
  
// POST squad
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
        case 'addMessage':
            update = { $push: { messages: {
                squad: req.body.squad,
                sender: req.body.sender,
                content: req.body.content 
            }}}
            Squad
                .findByIdAndUpdate(id, update, {new: true})
                .then(squad => res.json(squad))
                .catch(err =>
                    res.status(404).json({ nosquadfound: 'Could not process request.' })
                );
        default:
            Squad.findById(req.params.id)
                .then(squad => res.json(squad))
                .catch(err =>
                    res.status(404).json({ nosquadfound: 'Could not process request.' })
                );
    };
});
  
module.exports = router;

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Squad = require('../../models/Squad');
const validateSquadInput = require('../../validation/squads');

router.get('/', (req, res) => {
    Squad.find()
        .sort({ date: -1 })
        .then(squads => res.json(squads))
        .catch(err => res.status(404).json({ nosquadsfound: 'No squads found' }));
});

router.get('/user/:user_id', (req, res) => {
    Squad.find({user: req.params.user_id})
        .then(squads => res.json(squads))
        .catch(err =>
            res.status(404).json({ nosquadsfound: 'No squads found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Squad.findById(req.params.id)
        .then(squad => res.json(squad))
        .catch(err =>
            res.status(404).json({ nosquadfound: 'No squad found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateSquadInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newSquad = new Squad({
        text: req.body.text,
        user: req.user.id
      });
  
      newSquad.save().then(squad => res.json(squad));
    }
  );


module.exports = router;
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSquadInput(data, squadSize) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.generalBio = validText(data.generalBio) ? data.generalBio : '';

  if (!Validator.isLength(data.name, { max: 60 })) {
    errors.name = 'Squad name must be less than 60 characters';
  }

  // if (Validator.isLessThan())

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Squad name field is required';
  }

  if (!Validator.isLength(data.generalBio, { max: 200 })) {
    errors.generalBio = 'Squad bio must be less than 200 characters';
  }

  if (Validator.isEmpty(data.game)) {
    errors.name = 'Game field is required';
  }

  if (Validator.isEmpty(data.skillLevel)) {
    errors.skillLevel = 'Skill level field is required';
  }

  if (Validator.isEmpty(data.squadSize)) {
    errors.squadSize = 'Squad size field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
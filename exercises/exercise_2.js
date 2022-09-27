const characters = require("../data/characters.json");

// TODO: return all characters with known birth year
const charactersWithKnownBirthDate = () => {
  return characters.filter((character) => character.birth_year !== "unknown");
};

module.exports = charactersWithKnownBirthDate;

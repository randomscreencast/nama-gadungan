const names = require("./data/names.json");

function getNameByfirstLetter(firstLetter) {
  if (firstLetter.length !== 1) return [];

  const filteredNameByFirstLetter = names.filter(
    (name) => name.charAt(0).toLowerCase() === firstLetter.toLowerCase()
  );
  return filteredNameByFirstLetter;
}

module.exports = getNameByfirstLetter;

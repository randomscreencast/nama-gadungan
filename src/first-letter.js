const names = require("./data/names.json");

function getNamesByFirstLetter(firstLetter) {
  if (!firstLetter) return [];
  if (firstLetter.length !== 1) return [];

  const filteredNameByFirstLetter = names.filter(
    (name) => name.charAt(0).toLowerCase() === firstLetter.toLowerCase()
  );
  return filteredNameByFirstLetter;
}

module.exports = getNamesByFirstLetter;

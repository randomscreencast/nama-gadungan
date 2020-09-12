const names = require("./data/names.json");

function random() {
  const randomNum = Math.floor(Math.random() * Math.floor(names.length));
  return names[randomNum];
}

module.exports = random;

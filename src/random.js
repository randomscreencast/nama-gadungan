import names from "./data/names.json";

function random() {
  const randomNum = Math.floor(Math.random() * Math.floor(names.length));
  return names[randomNum];
}

export default random;

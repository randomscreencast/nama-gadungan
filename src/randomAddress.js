const alladdress = require("./allAddress");

const randomAddress = () => {
  const listAddress = alladdress();
  const randomNum = Math.floor(Math.random() * Math.floor(listAddress.length));
  return listAddress[randomNum];
};

module.exports = randomAddress;

const address = require('./data/address.json');

const listAddress = [];

const {streetName, allayName, cityName} = address;

const allAddress = () => {
  for (let h = 0; h < cityName.length; h++) {
    for (let i = 0; i < streetName.length; i++) {
      for (let j = 0; j < allayName.length; j++) {
        let data = `Jl. ${streetName[i]} Gg. ${allayName[j]}, No. ${i + 1}${
          j + 1
        }, Kota ${cityName[h]}`;
        listAddress.push(data);
      }
    }
  }
  for (let i = 0; i < listAddress.length; i++) {
    const element = listAddress[i];
    listAddress.filter((item) => {
      if (element === item) listAddress.splice(i, 1);
    });
  }
  return listAddress;
};

module.exports = allAddress;

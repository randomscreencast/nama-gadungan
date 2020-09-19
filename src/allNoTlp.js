const listNoTlp = [];

const allNoTpl = (count) => {
  for (let i = 0; i < count; i++) {
    const noTlp = Math.floor(Math.random() * 10000000000 + 1000000000);
    const stringNoTlp = `+628${noTlp}`;
    listNoTlp.push(stringNoTlp);
  }
  return listNoTlp;
};

module.exports = allNoTpl;

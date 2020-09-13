const random = require("./random.js");
const all = require("./all.js");

test("check if random name exists in names.json", function () {
  const name = random();
  const names = all();
  const nameExist = names.filter(function (item) {
    return item === name;
  });
  expect(nameExist.length).toEqual(1);
});

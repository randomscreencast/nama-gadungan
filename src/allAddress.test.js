const allAdress = require("./allAddress");

test("make sure allAddress items in array is string", function () {
  const actual = allAdress().every(function (currentValue) {
    return typeof currentValue === "string";
  });
  expect(actual).toBe(true);
});

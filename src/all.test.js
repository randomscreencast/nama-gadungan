const all = require("./all.js");

test("it works!", function () {
  const actual = all().every(function (currentValue) {
    return typeof currentValue === "string";
  });
  expect(actual).toBe(true);
});

test("test more than two character names", function () {
  const actual = all().every(function (currentValue) {
    return currentValue.length > 2;
  });
  expect(actual).toBe(true);
});

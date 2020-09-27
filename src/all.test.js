import all from "./all.js";

test("make sure all items in array is string", function () {
  const actual = all().every(function (currentValue) {
    return typeof currentValue === "string";
  });
  expect(actual).toBe(true);
});

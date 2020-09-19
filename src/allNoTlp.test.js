const allNoTlp = require("./allNoTlp");

test("the number of characters greater than 12 and less then 16", () => {
  const actual = allNoTlp(10).every((currentValue) => {
    return currentValue.length > 12 && currentValue.length < 16;
  });
  expect(actual).toBe(true);
});

import getKodepos from "./kodepos.js";

test("getKodepos for Tangerang", function () {
  const actual = getKodepos("Tangerang");
  expect(actual).not.toBeNaN();
});

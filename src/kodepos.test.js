import getKodepos from "./kodepos.js";

test("getKodepos return number", function () {
  expect(getKodepos()).not.toBeNaN();
});

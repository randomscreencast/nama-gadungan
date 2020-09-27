import getKodepos from "./kodepos.js";

test("getKodepos for Tangerang", function () {
  const actual = getKodepos("Tangerang");
  expect(actual).not.toBeNaN();
});

test("getKodepos for Tambun Selatan", function () {
  const actual = getKodepos("Tambun Selatan");
  expect(actual).not.toBeNaN();
});

test("getKodepos for Manggala", function () {
  const actual = getKodepos("Manggala");
  expect(actual).not.toBeNaN();
});

test("getKodepos for else", function () {
  const actual = getKodepos("Bekasi Timur");
  expect(actual).not.toBeNaN();
});

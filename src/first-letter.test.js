const getNamesByFirstLetter = require("./first-letter");

test("should return empty array when letter has length more than one", () => {
  const firstNameMatching = getNamesByFirstLetter("Ade");

  expect(firstNameMatching).toEqual([]);
});

test("should return empty array when no passing argument in function", () => {
  const firstNameMatching = getNamesByFirstLetter();

  expect(firstNameMatching).toEqual([]);
});

test("should return array when argument valid and names contain firstletter A", () => {
  const firstNameMatching = getNamesByFirstLetter("A");

  const namesWithFirstLetterA = [
    "Asirwada Budiyanto",
    "Agus Utama",
    "Ana Palastri",
    "Ani Haryanti",
    "Ade Hariyah",
    "Artanto Marbun",
    "Ajimat Najmudin S.E.",
    "Aslijan Wibowo"
  ];

  expect(firstNameMatching).toEqual(namesWithFirstLetterA);
});

test("should return array when argument valid and names contain firstletter a", () => {
  const firstNameMatching = getNamesByFirstLetter("a");

  const namesWithFirstLetterA = [
    "Asirwada Budiyanto",
    "Agus Utama",
    "Ana Palastri",
    "Ani Haryanti",
    "Ade Hariyah",
    "Artanto Marbun",
    "Ajimat Najmudin S.E.",
    "Aslijan Wibowo"
  ];

  expect(firstNameMatching).toEqual(namesWithFirstLetterA);
});

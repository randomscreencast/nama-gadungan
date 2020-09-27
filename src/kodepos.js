function getKodepos(location) {
  if (location === "Tangerang") {
    return 15214;
  } else if (location === "Tambun Selatan") {
    return 17510;
  } else if (location === "Manggala") {
    return 90233;
  } else {
    return 12345;
  }
}

export default getKodepos;

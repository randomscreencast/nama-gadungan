function getKodepos(location) {
  if (location === "Tangerang") {
    return 15214;
  } else if(location === "Tambun Selatan") {
    return 1750;
  } else {
    return 12345;
  }
}

export default getKodepos;

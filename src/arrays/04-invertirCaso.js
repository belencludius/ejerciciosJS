const invertirCaso = (str) => {
  let newStr
  for(letter of str) {
    if (letter === letter.toUpperCase()) {
      newStr = newStr + letter.toLowerCase()
    } else {
      newStr += letter.toUpperCase()
    }
  }
  return { str, newStr }
}

module.exports = {
  invertirCaso
}
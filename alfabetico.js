const words = ["pele", "messi", "socrates", "papadopoulous", "abigail", "andrea"];
words.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;

  
});

console.log(words);

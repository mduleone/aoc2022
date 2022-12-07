const { data } = require("./data/day06");

const [input] = data;

const isAllUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
};

const findFirstNUnique = (signal, n) => {
  let i;
  const len = signal.length;
  for (i = n; i < len; i++) {
    if (isAllUnique(signal.slice(i - n, i))) {
      return i;
    }
  }
};

console.log(findFirstNUnique(input, 4));
console.log(findFirstNUnique(input, 14));

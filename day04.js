const { data } = require("./data/day04");

const parsePairs = (ranges) => {
  const [first, second] = ranges.split(",");

  return {
    first: first.split("-").map(Number),
    second: second.split("-").map(Number),
  };
};

const findWholeOverlap = ({ first: [startF, endF], second: [startS, endS] }) =>
  (startF <= startS && endF >= endS) || (startS <= startF && endS >= endF);

const findOverlap = ({ first: [startF, endF], second: [startS, endS] }) =>
  endF >= startS && endS >= startF;

console.log(
  data
    .map(parsePairs)
    .map(findWholeOverlap)
    .filter((x) => x).length
);

console.log(
  data
    .map(parsePairs)
    .map(findOverlap)
    .filter((x) => x).length
);

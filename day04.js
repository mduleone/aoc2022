const { data } = require("./data/day04");

const parsePairs = (ranges) => {
  const [first, second] = ranges.split(",");
  const [ff, fs] = first.split("-");
  const [sf, ss] = second.split("-");

  return {
    first: [Number(ff), Number(fs)],
    second: [Number(sf), Number(ss)],
  };
};

const findWholeOverlap = ({
  first: [startF, endF],
  second: [startS, endS],
}) => {
  if (
    (startF <= startS && endF >= endS) ||
    (startS <= startF && endS >= endF)
  ) {
    return true;
  }

  return false;
};

const findOverlap = ({ first: [startF, endF], second: [startS, endS] }) => {
  if (endF < startS || endS < startF) {
    return false;
  }

  return true;
};

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

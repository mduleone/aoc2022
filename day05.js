const { startingStacks, moves } = require("./data/day05");

const MOVE_REGEX = /^move\s(\d+)\sfrom\s(\d+)\sto\s(\d+)$/;

const processMove = (moveStr) => {
  const [, qty, from, to] = moveStr.match(MOVE_REGEX);

  return {
    quantity: Number(qty),
    from,
    to,
  };
};

const cloneStart = (start) =>
  Object.entries(start).reduce(
    (agg, [key, value]) => ({ ...agg, [key]: [...value] }),
    {}
  );

const computeFinalStacks9000 = (start, moveSet) => {
  let ret = cloneStart(start);

  for (moveIdx in moveSet) {
    const { quantity, from, to } = processMove(moveSet[moveIdx]);

    for (let i = 0; i < quantity; i++) {
      ret[to].push(ret[from].pop());
    }
  }

  return ret;
};

const computeFinalStacks9001 = (start, moveSet) => {
  let ret = cloneStart(start);

  for (moveIdx in moveSet) {
    const { quantity, from, to } = processMove(moveSet[moveIdx]);

    let temp = [];
    for (let i = 0; i < quantity; i++) {
      temp.push(ret[from].pop());
    }
    for (let i = 0; i < quantity; i++) {
      ret[to].push(temp.pop());
    }
  }

  return ret;
};

const getLasts = (final) =>
  Object.values(final)
    .map((value) => value[value.length - 1])
    .join("");
const final9000 = computeFinalStacks9000(startingStacks, moves);
const final9001 = computeFinalStacks9001(startingStacks, moves);

console.log(getLasts(final9000));
console.log(getLasts(final9001));

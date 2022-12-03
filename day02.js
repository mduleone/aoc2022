const { data } = require('./data/day02');

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const LOSS = 0;
const DRAW = 3;
const WIN = 6;

const OPPO_MAP = {
  A: ROCK,
  B: PAPER,
  C: SCISSORS,
}
const SELF_MAP = {
  X: ROCK,
  Y: PAPER,
  Z: SCISSORS,
}
const WIN_MAP = {
  X: LOSS,
  Y: DRAW,
  Z: WIN,
}

const determineWinner = (self, oppo) => {
  const selfScore = SELF_MAP[self];
  const oppoScore = OPPO_MAP[oppo];

  if (selfScore === ROCK) {
    if (oppoScore === ROCK) {
      return DRAW;
    }
    if (oppoScore === PAPER) {
      return LOSS;
    }
    return WIN
  }

  if (selfScore === PAPER) {
    if (oppoScore === PAPER) {
      return DRAW;
    }
    if (oppoScore === SCISSORS) {
      return LOSS;
    }
    return WIN
  }

  if (selfScore === SCISSORS) {
    if (oppoScore === SCISSORS) {
      return DRAW;
    }
    if (oppoScore === ROCK) {
      return LOSS;
    }
    return WIN
  }
};

const determineThrow = (self, oppo) => {
  const winCondition = WIN_MAP[self];
  const oppoScore = OPPO_MAP[oppo];

  if (winCondition === WIN) {
    if (oppoScore === ROCK) {
      return PAPER;
    }
    if (oppoScore === PAPER) {
      return SCISSORS;
    }
    return ROCK;
  }

  if (winCondition === DRAW) {
    if (oppoScore === ROCK) {
      return ROCK;
    }
    if (oppoScore === PAPER) {
      return PAPER;
    }
    return SCISSORS;
  }

  if (winCondition === LOSS) {
    if (oppoScore === ROCK) {
      return SCISSORS;
    }
    if (oppoScore === PAPER) {
      return ROCK;
    }
    return PAPER;
  }
};

const computeScoreRound1 = (game) => {
  const [oppo, self] = game.split(' ');

  return determineWinner(self, oppo) + SELF_MAP[self];
}

const computeScoreRound2 = (game) => {
  const [oppo, self] = game.split(' ');

  return determineThrow(self, oppo) + WIN_MAP[self];
}

console.log(data.reduce((agg, curr) => agg + computeScoreRound1(curr), 0));
console.log(data.reduce((agg, curr) => agg + computeScoreRound2(curr), 0));

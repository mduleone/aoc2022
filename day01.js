const { data } = require('./data/day01');

const users = data
                .join(',')
                .split(',,')
                .map(el => el.split(','))
                .map(el => el.reduce((agg, curr) => agg + Number(curr), 0));

console.log(Math.max(...users));

console.log(users.sort((a, b) => a - b).slice(-3).reduce((a, c) => a + c, 0))